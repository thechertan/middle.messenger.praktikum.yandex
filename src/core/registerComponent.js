"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handlebars_1 = __importDefault(require("handlebars"));
function registerComponent(Component) {
    handlebars_1.default.registerHelper(Component.componentName || Component.name, function (_a) {
        var _b = _a.hash, { ref } = _b, hash = __rest(_b, ["ref"]), { data, fn } = _a;
        if (!data.root.children) {
            data.root.children = {};
        }
        if (!data.root.refs) {
            data.root.refs = {};
        }
        const { children, refs } = data.root;
        /**
         * Костыль для того, чтобы передавать переменные
         * внутрь блоков вручную подменяя значение
         */
        Object.keys(hash).forEach((key) => {
            if (this[key] && typeof this[key] === "string") {
                hash[key] = hash[key].replace(new RegExp(`{{${String(key)}}}`, "i"), this[key]);
            }
        });
        const component = new Component(hash);
        children[component.id] = component;
        if (ref) {
            refs[ref] = component.getContent();
        }
        const contents = fn ? fn(this) : "";
        return `<div data-id="${component.id}">${contents}</div>`;
    });
}
exports.default = registerComponent;
//# sourceMappingURL=registerComponent.js.map