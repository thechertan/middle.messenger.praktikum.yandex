import { withStore } from "utils/withStore/withStore";
import withIsLoading from "utils/withLoading/withLoading";
import LoginPage from "./login";
// @ts-ignore
const HOCPLoginPage = withStore(withIsLoading(LoginPage));
export default HOCPLoginPage;
