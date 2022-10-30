import { httpFetch } from "../../HTTPTransport";

class UsersApi {
  changeProfile({ ...props }): Promise<any> {
    const data = JSON.stringify({ ...props });
    return httpFetch.put("/user/profile", {
      data,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  changePassword(oldPassword: string, newPassword: string): Promise<any> {
    const dataRequest = {
      newPassword,
      oldPassword,
    };
    const data = JSON.stringify(dataRequest);
    return httpFetch.put("/user/password", {
      data,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  changeProfileAvatar(file: any): Promise<any> {
    const data = file;
    return httpFetch.put("/user/profile/avatar", {
      data,
      headers: {
        accept: "application/json",
      },
    });
  }

  getUser(id: number): Promise<any> {
    return httpFetch.get(`/user/${id}`, {
      headers: {
        "content-type": "application/json",
      },
    });
  }

  searchUsers(login: string): Promise<any> {
    const data = JSON.stringify({ login });
    return httpFetch.post("/user/search", {
      data,
      headers: {
        "content-type": "application/json",
      },
    });
  }
}

export default UsersApi;
