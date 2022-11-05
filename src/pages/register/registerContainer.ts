import { withStore } from "utils/withStore/withStore";
import withIsLoading from "utils/withLoading/withLoading";
import RegisterPage from "./register";
// @ts-ignore
const HOCPRegisterPage = withStore(withIsLoading(RegisterPage));
export default HOCPRegisterPage;
