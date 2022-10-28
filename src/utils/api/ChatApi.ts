import { chatApi } from "./chat/index";

class ChatAPI {
  getChats(): Promise<any> {
    return chatApi
      .getChats()
      .then((res) => {
        window.store.dispatch({ chats: res });
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  createChat(title: string): Promise<void> {
    return chatApi
      .createChat(title)
      .then(() => {
        this.getChats();
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  getChatToken(chatId: number): Promise<string> {
    return chatApi
      .getChatToken(chatId)
      .then((data) => data.token)
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  deleteChat(chatId: number) {
    return chatApi
      .deleteChat(chatId)
      .then(() => {
        this.getChats();
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  getChatUsers(id: number): Promise<void> {
    return chatApi
      .getChatUsers(id)
      .then((users) => {
        console.log(users);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  changeChatAvatar(file: any): Promise<any> {
    return chatApi.changeChatAvatar(file).then((res) => {
      this.getChats();
      return res;
    });
  }

  addUserToChat(idUser: number, id: number): void {
    chatApi
      .addUsersToChat([idUser], id)
      .then((res) => res)
      .catch((err) => {
        console.log("Произошла ошибка при добавлении юзера в чат: ", err);
      });
  }

  deleteUserFromChat(userId: number, id: number): void {
    chatApi
      .deleteUserFromChat([userId], id)
      .then((data) => data)
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
}

const chatsAPI = new ChatAPI();
export { chatsAPI };
