"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const Block_1 = __importDefault(require("../../../core/Block"));
class Link extends Block_1.default {
    constructor(props) {
        const onClick = (e) => {
            e.preventDefault();
            window.router.go(this.props.to);
        };
        super(Object.assign(Object.assign({}, props), { events: { click: onClick } }));
    }
    render() {
        return `<a class='{{className}}' href="{{to}}">{{text}}</a>`;
    }
}
exports.Link = Link;
Link.componentName = "Link";
//# sourceMappingURL=link.js.map