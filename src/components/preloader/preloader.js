"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("core/Block"));
require("./index.css");
class Preloader extends Block_1.default {
    render() {
        // language=hbs
        return `
  <div class="preloader ">
    <div class="preloader__container">
      <span class="preloader__round"></span>
    </div>
  </div>
    `;
    }
}
exports.default = Preloader;
Preloader.componentName = "Preloader";
//# sourceMappingURL=preloader.js.map