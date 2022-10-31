import { httpFetch } from "../../HTTPTransport";
import { SignupOptions } from "../types/index";

class AuthApi {
  signIn({ ...props }): Promise<any> {
    const data = JSON.stringify({ ...props });
    return httpFetch.post("/auth/signin", {
      data,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  signUp({ ...props }: SignupOptions): Promise<any> {
    const data = JSON.stringify({ ...props });

    return httpFetch.post("/auth/signup", {
      data,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  async logout(): Promise<any> {
    return httpFetch.post("/auth/logout", {});
  }

  async me(): Promise<any> {
    return httpFetch.get("/auth/user", {});
  }
}

export default AuthApi;
