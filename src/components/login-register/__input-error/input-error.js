"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputError = void 0;
const Block_1 = __importDefault(require("../../../core/Block"));
class InputError extends Block_1.default {
    constructor({ text, className, id }) {
        super({
            text,
            className,
            id,
        });
    }
    render() {
        // language=hbs
        return `
  <div class="register__span-error">
    <span id="{{id}}" class="{{className}}">{{#if text}}{{text}}{{/if}}</span>
  </div>
    `;
    }
}
exports.InputError = InputError;
InputError.componentName = 'InputError';
//# sourceMappingURL=input-error.js.map