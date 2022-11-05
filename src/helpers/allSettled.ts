import authAPI from "utils/api/AuthApi";
import { chatsAPI } from "utils/api/ChatApi";

async function allSettled(): Promise<void> {
  const promises: Promise<any>[] = [
    authAPI
      .me()
      .then((res) => res)
      .catch((err) => err),
  ];

  const result = await Promise.all(
    promises.map((value) =>
      value
        .then((val) => {
          if (val.status >= 300) {
            throw val;
          } else {
            return { status: "resolved", value: val };
          }
        })
        .catch((err) => ({ status: "rejected", reason: err }))
    )
  ).then((value) => value);

  const resultRequest = Promise.resolve(result);
  return resultRequest.then((res) => {
    res.map((promis: any): Promise<void> => {
      if (promis.status !== "resolved") {
        const isAuth: string | null = localStorage.getItem("isAuth");
        if (isAuth) {
          localStorage.removeItem("isAuth");
          authAPI.logout();
        }
        return promis;
      }
      chatsAPI.getChats();
      window.store?.dispatch({ user: JSON.parse(promis.value.response) });
      return promis;
    });
  });
}

export default allSettled;
