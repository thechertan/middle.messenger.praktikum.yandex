"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("core");
function isEqual(lhs, rhs) {
    return lhs === rhs;
}
class Route {
    constructor(pathname, view) {
        this._pathname = pathname;
        this._blockClass = view;
    }
    navigate(pathname) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }
    match(pathname) {
        return isEqual(pathname, this._pathname);
    }
    render() {
        if (!this._block) {
            this._block = new this._blockClass();
            (0, core_1.renderDOM)(this._block);
        }
        else {
            (0, core_1.renderDOM)(this._block);
        }
    }
}
exports.default = Route;
//# sourceMappingURL=Route.js.map