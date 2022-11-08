import Router from "./Router";
import {HOCprofilePage} from "../../pages/profile";
import HOCLoginPage from "../../pages/login";


describe('test ./Router', () => {
    const router = new Router();
    if (typeof localStorage === "undefined" || localStorage === null) {
        // eslint-disable-next-line global-require,import/no-extraneous-dependencies
        const {LocalStorage} = require('node-localstorage');
        // eslint-disable-next-line no-global-assign
        localStorage = new LocalStorage('./scratch');
    }

    it('test use and getRoute method from Router => is Auth true', () => {
        localStorage.setItem("isAuth", "true")
        router.use("/settings", HOCprofilePage);
        const result = router.getRoute('/settings')._pathname
        expect(result).toBe('/settings')
    })
    it('test use and getRoute method from Router => is Auth false', () => {
        localStorage.removeItem("isAuth")
        router.use("/", HOCLoginPage);
        const result = router.getRoute('/settings')._pathname
        expect(result).toBe('/')
    })

})
;