import { BlockClass } from "core/Block";

type WithIsLoading = {
  isLoading: boolean;
};

/**
 * HOC не подписан на изменения стора, поэтому будет корректно работать
 * только при обернутом withStore хоке.
 */
export default function withIsLoading<P extends WithIsLoading>(
  WrappedBlock: BlockClass<P>
) {
  // @ts-expect-error this is not typed
  return class extends WrappedBlock<P> {
    public static componentName =
      WrappedBlock.componentName || WrappedBlock.name;

    constructor(props: P) {
      super({ ...props, isLoading: () => window.store.getState().isLoading });
    }
  } as BlockClass<Omit<P, "isLoading">>;
}
