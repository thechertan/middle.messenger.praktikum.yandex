import { httpFetch } from "../../HTTPTransport";

class UsersApi {
  changeProfile({ ...props }): Promise<any> {
    const data = JSON.stringify({ ...props });
    return httpFetch.put("/user/profile", {
      data,
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
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
      withCredentials: true,
    });
  }

  changeProfileAvatar(file: any): Promise<any> {
    const data = file;
    return httpFetch.put("/user/profile/avatar", {
      data,
      headers: {
        accept: "application/json",
      },
      withCredentials: true,
    });
  }

  getUser(id: number): Promise<any> {
    return httpFetch.get(`/user/${id}`, {
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
    });
  }

  searchUsers(login: string): Promise<any> {
    const data = JSON.stringify({ login });
    return httpFetch.post("/user/search", {
      data,
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
    });
  }
}

export default UsersApi;
