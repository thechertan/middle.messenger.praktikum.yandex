import clearLocalStorage from "helpers/clearLocalStorage";
import { auth } from "./auth";
import { SignupOptions } from "./types";
import { webSocketApi } from "./WssMessage";

class AuthAPI {
  signIn({ ...data }: { login: string; password: string }): Promise<any> {
    return auth
      .signIn({ ...data })
      .then((res) => {
        localStorage.setItem("isAuth", "true");
        window.router.go("/messenger");
        console.log(res);

        return res;
      })
      .catch((err) => err);
  }

  signUp({ ...data }: SignupOptions): Promise<any> {
    return auth
      .signUp({ ...data })
      .then((res) => {
        localStorage.setItem("isAuth", "true");
        window.router.go("/messenger");
        return res;
      })
      .catch((err) => err);
  }

  logout(): Promise<void> {
    return auth
      .logout()
      .then(() => {
        webSocketApi.close();
        window.store.dispatch({ isActivChat: false });
        clearLocalStorage();
      })
      .catch((err) => err);
  }

  me(): Promise<void> {
    return auth
      .me()
      .then((data) => data)
      .catch((err) => err);
  }
}

const authAPI = new AuthAPI();
export default authAPI;
