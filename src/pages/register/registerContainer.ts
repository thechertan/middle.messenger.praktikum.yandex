import { withStore } from "utils/withStore/withStore";
import withIsLoading from "utils/withLoading/withLoading";
import RegisterPage from "./register";

const HOCPRegisterPage = withStore(withIsLoading(RegisterPage));
export default HOCPRegisterPage;
