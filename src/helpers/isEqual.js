"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEqual = void 0;
const isArray_1 = require("./isArray");
const isObject_1 = require("./isObject");
const isSameType_1 = require("./isSameType");
function isEqual(a, b) {
    if (a === b) {
        return true;
    }
    if ((!(0, isObject_1.isObject)(a) && !(0, isArray_1.isArray)(a)) || (!(0, isObject_1.isObject)(b) && !(0, isArray_1.isArray)(b))) {
        return false;
    }
    if (!(0, isSameType_1.isSameType)(a, b) || Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    /* eslint-disable-next-line */
    for (const key of Object.keys(a)) {
        /* eslint-disable-next-line */
        if (!b.hasOwnProperty(key)) {
            return false;
        }
        if (!isEqual(a[key], b[key])) {
            return false;
        }
    }
    return true;
}
exports.isEqual = isEqual;
//# sourceMappingURL=isEqual.js.map