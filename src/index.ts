// require("babel-core/register");
import { renderDOM } from "./core";
import { RegisterPage } from "./pages/register";
import { ProfilePage } from "./pages/profile";
import { ProfileChangeDataPage } from "./pages/profileChangeData";
import { NotFoundPage } from "./pages/notFound";
import { LoginPage } from "./pages/login";
import { ChatPage } from "./pages/chat/chat";
import { ProfileChangePassword } from "./pages/profileChangePassword/profileChangePassword";

import "./styles/styles.css";

function router(route: string): object {
  if (route === "/profile-change-data") {
    return new ProfileChangeDataPage();
  }
  if (route === "/login") {   
    return new LoginPage();
  }
  if (route === "/profile") {
    return new ProfilePage();
  }
  if (route === "/profile-change-password") {
    return new ProfileChangePassword();
  }
  if (route === "/chat") {
    return new ChatPage();
  }
  if (route === "/register") {
    return new RegisterPage();
  } else {
    return new NotFoundPage();
  }
}
const routers: any = router(window.location.pathname.replace(/.hbs/i, ""));

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(routers);
});
