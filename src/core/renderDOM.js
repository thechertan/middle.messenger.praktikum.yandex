"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function renderDOM(block) {
    const root = document.querySelector("#root");
    root.innerHTML = "";
    root.appendChild(block.getContent());
}
exports.default = renderDOM;
//# sourceMappingURL=renderDOM.js.map