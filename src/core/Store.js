"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
const EventBus_1 = __importDefault(require("./EventBus"));
class Store extends EventBus_1.default {
    constructor(defaultState) {
        super();
        this.state = {};
        this.state = defaultState;
        this.set(defaultState);
    }
    getState() {
        return this.state;
    }
    set(nextState) {
        const prevState = Object.assign({}, this.state);
        this.state = Object.assign(Object.assign({}, this.state), nextState);
        this.emit("changed", prevState, nextState);
    }
    async dispatch(nextStateOrAction, payload) {
        if (typeof nextStateOrAction === "function") {
            nextStateOrAction(this.dispatch.bind(this), this.state, payload);
        }
        else {
            await this.set(Object.assign(Object.assign({}, this.state), nextStateOrAction));
        }
    }
}
exports.Store = Store;
//# sourceMappingURL=Store.js.map