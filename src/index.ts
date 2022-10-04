require("babel-core/register");
import { Block, renderDOM, registerComponent } from "./core";
import RegisterPage from "./pages/register";
import ProfilePage from "./pages/profile";
import ProfileChangeData from "./pages/profileChangeData"
import NotFound from "./pages/notFound";
import Login from "./pages/login";
import { ChatPage } from "./pages/chat/chat";
import { ProfileChangePassword } from "./pages/profileChangePassword/profileChangePassword";


import "./styles/styles.css";

import Input from "./components/login-register/__ready-input/_input";
import inputError from "./components/login-register/__input-error";
import Button from "./components/login-register/__button";
import Link from "./components/login-register/__link";
import ReadyInput from "./components/login-register/__ready-input";

registerComponent(Input);
registerComponent(ReadyInput);
registerComponent(inputError);
registerComponent(Button);
registerComponent(Link);



function router(route: string): object {
  if(route === '/profile-change-data'){
    return new ProfileChangeData();
  }
  if(route === '/login'){
    return new Login();
  }
  if(route === '/profile'){
    return new ProfilePage();
  }
  if(route === '/profile-change-password'){
    return new ProfileChangePassword();
  }
  if(route === '/chat'){
    return new ChatPage();
  }
  if(route === '/register'){
    return new RegisterPage();
  }else {
    return new NotFound();
  }
 
}
const routers = router(window.location.pathname.replace(/.hbs/i, ''))




document.addEventListener("DOMContentLoaded", () => {
    renderDOM(routers);
});
