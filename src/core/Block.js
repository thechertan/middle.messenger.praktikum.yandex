"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nanoid_1 = require("nanoid");
const handlebars_1 = __importDefault(require("handlebars"));
const EventBus_1 = __importDefault(require("./EventBus"));
class Block {
    constructor(props) {
        this.id = (0, nanoid_1.nanoid)(6);
        this._element = null;
        this.children = {};
        this.state = {};
        this.refs = {};
        this.setProps = (nextProps) => {
            if (!nextProps) {
                return;
            }
            if (this.props) {
                Object.assign(this.props, nextProps);
            }
            else {
                console.log("Упали пропсы!");
            }
        };
        this.setState = (nextState) => {
            if (!nextState) {
                return;
            }
            Object.assign(this.state, nextState);
        };
        const eventBus = new EventBus_1.default();
        this.getStateFromProps();
        this.props = this._makePropsProxy(props || {});
        this.state = this._makePropsProxy(this.state);
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT, this.props);
    }
    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
    _createResources() {
        this._element = this._createDocumentElement("div");
    }
    getStateFromProps() {
        this.state = {};
    }
    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER, this.props);
    }
    _componentDidMount(props) {
        this.componentDidMount(props);
    }
    componentDidMount(props) {
        return props;
    }
    _componentDidUpdate() {
        const response = this.componentDidUpdate();
        if (!response) {
            return;
        }
        this._render();
    }
    componentDidUpdate() {
        return true;
    }
    get element() {
        return this._element;
    }
    _render() {
        const fragment = this._compile();
        this._removeEvents();
        const newElement = fragment.firstElementChild;
        this._element.replaceWith(newElement);
        this._element = newElement;
        this._addEvents();
    }
    render() {
        return "";
    }
    getContent() {
        var _a, _b;
        // Хак, чтобы вызвать CDM только после добавления в DOM
        if (((_b = (_a = this.element) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.nodeType) === Node.DOCUMENT_FRAGMENT_NODE) {
            setTimeout(() => {
                var _a, _b;
                if (((_b = (_a = this.element) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.nodeType) !== Node.DOCUMENT_FRAGMENT_NODE) {
                    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
                }
            }, 100);
        }
        return this.element;
    }
    _makePropsProxy(props) {
        // Можно и так передать this
        // Такой способ больше не применяется с приходом ES6+
        const self = this;
        let waitSet = false;
        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target, prop, value) {
                target[prop] = value;
                // Запускаем обновление компоненты
                // Плохой cloneDeep, в след итерации нужно заставлять добавлять cloneDeep им самим
                if (!waitSet) {
                    waitSet = true;
                    setTimeout(() => {
                        self.eventBus().emit(Block.EVENTS.FLOW_CDU, Object.assign({}, target), target);
                        waitSet = false;
                    }, 10);
                }
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа");
            },
        });
    }
    _createDocumentElement(tagName) {
        return document.createElement(tagName);
    }
    _removeEvents() {
        const { events } = this.props;
        if (!events || !this._element) {
            return;
        }
        Object.entries(events).forEach(([event, listener]) => {
            // @ts-ignore
            this._element.removeEventListener(event, listener);
        });
    }
    _addEvents() {
        const { events } = this.props;
        if (!events) {
            return;
        }
        Object.entries(events).forEach(([event, listener]) => {
            // @ts-ignore
            this._element.addEventListener(event, listener);
        });
    }
    _compile() {
        const fragment = document.createElement("template");
        /**
         * Рендерим шаблон
         */
        const template = handlebars_1.default.compile(this.render());
        fragment.innerHTML = template(Object.assign(Object.assign(Object.assign({}, this.state), this.props), { children: this.children, refs: this.refs }));
        /**
         * Заменяем заглушки на компоненты
         */
        Object.entries(this.children).forEach(([id, component]) => {
            /**
             * Ищем заглушку по id
             */
            const stub = fragment.content.querySelector(`[data-id="${id}"]`);
            if (!stub) {
                return;
            }
            const stubChilds = stub.childNodes.length ? stub.childNodes : [];
            /**
             * Заменяем заглушку на component._element
             */
            const content = component.getContent();
            stub.replaceWith(content);
            /**
             * Ищем элемент layout-а, куда вставлять детей
             */
            const layoutContent = content.querySelector('[data-layout="1"]');
            if (layoutContent && stubChilds.length) {
                layoutContent.append(...stubChilds);
            }
        });
        /**
         * Возвращаем фрагмент
         */
        return fragment.content;
    }
}
exports.default = Block;
Block.EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
};
//# sourceMappingURL=Block.js.map