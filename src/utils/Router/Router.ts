import Route from "utils/Route/Route";

export default class Router {
    static __instance: Router;

    routes!: Array<any>;

    history!: History;

    _currentRoute!: Object | null;

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

    get _isAuth(): boolean {
        const isAuth = localStorage.getItem("isAuth");
        if (isAuth) {
            return true;
        }
        return false;
    }

    public use(pathname: string, block: any) {
        const route = new Route(pathname, block);
        this.routes.push(route);
        return this;
    }

    public start() {
        this._onRoute(String(window.location.pathname));
    }

    private _onRoute(pathname: string) {
        const route = this.getRoute(pathname);
        if (!route) {
            return;
        }

        this._currentRoute = route;
        route.render(route, pathname);
    }

    public getRoute(pathname: string) {
        let router: string = pathname;
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
