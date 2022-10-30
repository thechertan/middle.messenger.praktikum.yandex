import { withStore } from "utils/withStore/withStore";
import { withUser } from "utils/withUser/withUser";
import withIsLoading from "utils/withLoading/withLoading";
import ProfileChangeDataPage from "./profileChangeData";

const HOCProfileChangeDataPage = withStore(
  // @ts-ignore
  withUser(withIsLoading(ProfileChangeDataPage))
);
export { HOCProfileChangeDataPage };
