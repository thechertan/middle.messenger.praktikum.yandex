"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withStore = void 0;
function withStore(WrappedBlock) {
    var _a;
    // @ts-expect-error No base constructor has the specified
    return _a = class extends WrappedBlock {
            constructor(props) {
                super(Object.assign(Object.assign({}, props), { store: window.store }));
                this.__onChangeStoreCallback = () => {
                    // @ts-expect-error this is not typed
                    this.setProps(Object.assign(Object.assign({}, this.props), { store: window.store }));
                };
            }
            componentDidMount(props) {
                super.componentDidMount(props);
                window.store.on("changed", this.__onChangeStoreCallback);
            }
            componentWillUnmount() {
                super.componentWillUnmount();
                window.store.off("changed", this.__onChangeStoreCallback);
            }
        },
        _a.componentName = WrappedBlock.componentName || WrappedBlock.name,
        _a;
}
exports.withStore = withStore;
//# sourceMappingURL=withStore.js.map