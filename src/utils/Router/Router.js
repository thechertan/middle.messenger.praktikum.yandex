"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(require("utils/Route/Route"));
class Router {
    constructor() {
        if (Router.__instance) {
            // eslint-disable-next-line
            return Router.__instance;
        }
        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        Router.__instance = this;
    }
    get _isAuth() {
        const isAuth = localStorage.getItem("isAuth");
        if (isAuth) {
            return true;
        }
        return false;
    }
    use(pathname, block) {
        const route = new Route_1.default(pathname, block);
        this.routes.push(route);
        return this;
    }
    start() {
        this._onRoute(String(window.location.pathname));
    }
    _onRoute(pathname) {
        const route = this.getRoute(pathname);
        if (!route) {
            return;
        }
        this._currentRoute = route;
        route.render(route, pathname);
    }
    go(pathname) {
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }
    back() {
        this.history.back();
    }
    forward() {
        this.history.forward();
    }
    getRoute(pathname) {
        let router = pathname;
        const notFoundPage = this.routes.find((route) => route.match("/404"));
        if (!this._isAuth) {
            if (router === "/" || router === "/sign-up") {
                return this.routes.find((route) => route.match(router));
            }
            router = "/";
            return this.routes.find((route) => route.match(router));
        }
        if (router === "/" || router === "/sign-up") {
            router = "/messenger";
        }
        // eslint-disable-next-line
        const route = this.routes.find((route) => {
            if (route.match(router)) {
                return route.match(router);
            }
        });
        if (route) {
            return route;
        }
        return notFoundPage;
    }
}
exports.default = Router;
//# sourceMappingURL=Router.js.map