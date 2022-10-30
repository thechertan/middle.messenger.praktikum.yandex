"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * HOC не подписан на изменения стора, поэтому будет корректно работать
 * только при обернутом withStore хоке.
 */
function withIsLoading(WrappedBlock) {
    var _a;
    // @ts-expect-error this is not typed
    return _a = class extends WrappedBlock {
            constructor(props) {
                super(Object.assign(Object.assign({}, props), { isLoading: () => window.store.getState().isLoading }));
            }
        },
        _a.componentName = WrappedBlock.componentName || WrappedBlock.name,
        _a;
}
exports.default = withIsLoading;
//# sourceMappingURL=withLoading.js.map