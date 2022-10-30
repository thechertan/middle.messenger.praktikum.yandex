"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOCprofilePage = void 0;
const withStore_1 = require("utils/withStore/withStore");
const withUser_1 = require("utils/withUser/withUser");
const profile_1 = require("./profile");
// @ts-ignore
const HOCprofilePage = (0, withStore_1.withStore)((0, withUser_1.withUser)(profile_1.ProfilePage));
exports.HOCprofilePage = HOCprofilePage;
//# sourceMappingURL=profileContainer.js.map