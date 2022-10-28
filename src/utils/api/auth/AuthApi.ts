import { httpFetch } from "../../HTTPTransport";
import { SignupOptions } from "../types/index";

class AuthApi {
  signIn({ ...props }): Promise<any> {
    const data = JSON.stringify({ ...props });
    return httpFetch.post("/auth/signin", {
      data,
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      withCredentials: true,
    });
  }

  signUp({ ...props }: SignupOptions): Promise<any> {
    const data = JSON.stringify({ ...props });

    return httpFetch.post("/auth/signup", {
      data,
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
    });
  }

  async logout(): Promise<any> {
    return httpFetch.post("/auth/logout", {
      withCredentials: true,
    });
  }

  async me(): Promise<any> {
    return httpFetch.get("/auth/user", {
      withCredentials: true,
    });
  }
}

export default AuthApi;
