"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withUser = void 0;
function withUser(WrappedBlock) {
    var _a;
    // @ts-expect-error No base constructor has the specified
    return _a = class extends WrappedBlock {
            constructor(props) {
                super(Object.assign(Object.assign({}, props), { user: window.store.getState().user }));
                this.__onChangeUserCallback = (prevState, nextState) => {
                    if (JSON.stringify(prevState.user) !== JSON.stringify(nextState.user)) {
                        // @ts-expect-error this is not typed
                        this.setProps(Object.assign(Object.assign({}, this.props), { user: nextState.user }));
                    }
                };
            }
            componentDidMount(props) {
                super.componentDidMount(props);
                window.store.on("changed", this.__onChangeUserCallback);
            }
            componentWillUnmount() {
                super.componentWillUnmount();
                window.store.off("changed", this.__onChangeUserCallback);
            }
        },
        _a.componentName = WrappedBlock.componentName || WrappedBlock.name,
        _a;
}
exports.withUser = withUser;
//# sourceMappingURL=withUser.js.map