"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const Block_1 = __importDefault(require("../../../core/Block"));
class Button extends Block_1.default {
    constructor({ className, text, id, onClick }) {
        super({ className, text, id, events: { click: onClick } });
    }
    render() {
        return `
  <button
    type="submit"
    name="save"
    id="{{id}}"
    class="{{className}}"
  disabled
  >
  {{text}}
  </button>
    `;
    }
}
exports.Button = Button;
Button.componentName = 'Button';
//# sourceMappingURL=button.js.map