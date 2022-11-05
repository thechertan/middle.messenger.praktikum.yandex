import { withStore } from "utils/withStore/withStore";
import withIsLoading from "utils/withLoading/withLoading";
import { ChatPage } from "./chat";
// @ts-ignore
const HOCchatPage = withStore(withIsLoading(ChatPage));

export default HOCchatPage;
