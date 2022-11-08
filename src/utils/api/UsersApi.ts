import { usersApi } from "./user";

class UserAPI {
  searchUsers(login: string): Promise<any> {
    return usersApi
      .searchUsers(login)
      .then((res) => res.response)
      .catch((err) => err);
  }

  getUser(id: number): Promise<void> {
    return usersApi
      .getUser(id)
      .then((res) => res.response)
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
}

const userAPI = new UserAPI();
export { userAPI };
