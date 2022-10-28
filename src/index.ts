import "./styles/styles.css";
import Router from "utils/Router/Router";
import { Store } from "core/Store";
import allSettled from "helpers/allSettled";
import HOCRegisterPage from "./pages/register";
import { HOCprofilePage } from "./pages/profile";
import { HOCProfileChangeDataPage } from "./pages/profileChangeData";
import { NotFoundPage } from "./pages/notFound";
import HOCLoginPage from "./pages/login";
import { HOCchatPage } from "./pages/chat";
import { HOCProfileChangePassword } from "./pages/profileChangePassword";
import { ErrorPage } from "./pages/error";
import { defaultState } from "./store";

(async function () {
  const store = new Store<AppState>(defaultState);
  const router = new Router();
  window.store = store;
  window.router = router;
  await allSettled();
  router
    .use("/settings", HOCprofilePage)
    .use("/settings/changedata", HOCProfileChangeDataPage)
    .use("/settings/changepassword", HOCProfileChangePassword)
    .use("/messenger", HOCchatPage)
    .use("/", HOCLoginPage)
    .use("/sign-up", HOCRegisterPage)
    .use("/404", NotFoundPage)
    .use("/500", ErrorPage);
  router.start();
})();
