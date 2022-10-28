import { withStore } from "utils/withStore/withStore";
import { withUser } from "utils/withUser/withUser";
import { ProfilePage } from "./profile";

const HOCprofilePage = withStore(withUser(ProfilePage));

export { HOCprofilePage };
