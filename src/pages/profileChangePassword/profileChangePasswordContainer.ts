import { withStore } from "utils/withStore/withStore";
import { withUser } from "utils/withUser/withUser";
import withIsLoading from "utils/withLoading/withLoading";
import { ProfileChangePassword } from "./profileChangePassword";

const HOCProfileChangePassword = withStore(
  // @ts-ignore
  withUser(withIsLoading(ProfileChangePassword))
);
export { HOCProfileChangePassword };
