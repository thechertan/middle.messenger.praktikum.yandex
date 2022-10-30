"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var METHODS;
(function (METHODS) {
    METHODS["GET"] = "GET";
    METHODS["POST"] = "POST";
    METHODS["PUT"] = "PUT";
    METHODS["PATCH"] = "PATCH";
    METHODS["DELETE"] = "DELETE";
})(METHODS || (METHODS = {}));
function queryStringify(data) {
    if (!data)
        return "";
    return Object.entries(data).reduce((acc, [key, value], index, arr) => `${acc}${key}=${value}${index < arr.length - 1 ? "&" : ""}`, "?");
}
class HTTPTransport {
    constructor(_parentPath = "") {
        this.get = (url, options = {}) => this.request(url, Object.assign(Object.assign({}, options), { method: METHODS.GET }));
        this.post = (url, options = {}) => this.request(url, Object.assign(Object.assign({}, options), { method: METHODS.POST }));
        this.put = (url, options = {}) => this.request(url, Object.assign(Object.assign({}, options), { method: METHODS.PUT }));
        this.patch = (url, options = {}) => this.request(url, Object.assign(Object.assign({}, options), { method: METHODS.PATCH }));
        this.delete = (url, options = {}) => this.request(url, Object.assign(Object.assign({}, options), { method: METHODS.DELETE }));
        this.request = (url, options) => {
            const { method = METHODS.GET, headers = {}, data, timeout = 5000, withCredentials = false, } = options;
            // Если метод GET и передана data, трансформировать data в query запрос
            const query = method === METHODS.GET ? queryStringify(data) : "";
            return new Promise((resolve, reject) => {
                const xhr = new window.XMLHttpRequest();
                xhr.open(method, this._parentPath + url + query);
                if (withCredentials) {
                    xhr.withCredentials = true;
                }
                Object.entries(headers).forEach(([key, value]) => {
                    xhr.setRequestHeader(key, value);
                });
                xhr.onload = () => {
                    if (xhr.status >= 300) {
                        reject(xhr);
                    }
                    else {
                        resolve(xhr);
                    }
                };
                xhr.onabort = () => reject(xhr);
                xhr.onerror = () => reject(xhr);
                xhr.timeout = timeout;
                xhr.ontimeout = () => reject(xhr);
                if (method === METHODS.GET || !data) {
                    xhr.send();
                }
                else {
                    xhr.send(data);
                }
            });
        };
        this._parentPath = _parentPath;
    }
}
exports.default = HTTPTransport;
//# sourceMappingURL=HTTPTransport.js.map