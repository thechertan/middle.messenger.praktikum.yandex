import { withStore } from "utils/withStore/withStore";
import withIsLoading from "utils/withLoading/withLoading";
import LoginPage from "./login";

const HOCPLoginPage = withStore(withIsLoading(LoginPage));
export default HOCPLoginPage;
