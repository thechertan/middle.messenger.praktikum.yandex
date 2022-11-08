import { Message } from "../types";
import { httpFetch } from "../../HTTPTransport";

export interface Chat {
  id: number;
  title: string;
  avatar: string;
  created_by: number;
  unread_count: number;
  last_message: Message;
  token?: string;
}

class ChatApi {
  _checkAnswer(res: XMLHttpRequest): Promise<any> | {} {
    if (res.response) {
      return JSON.parse(res.response);
    }
    return res;
  }

  async getChats() {
    const result: XMLHttpRequest = await httpFetch.get("/chats", {
      headers: {
        "content-type": "application/json",
      },
    });

    return this._checkAnswer(result);
  }

  createChat(titleId: string): Promise<any> {
    const data = JSON.stringify({ title: titleId });
    return httpFetch.post("/chats", {
      data,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  deleteChat(id: number): Promise<any> {
    const data = JSON.stringify({ chatId: id });
    return httpFetch.delete("/chats", {
      data,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  async getChatUsers(id: number): Promise<any> {
    return httpFetch.get(`/chats/${id}/users`, {
      headers: {
        "content-type": "application/json",
      },
    });
  }

  addUsersToChat(users: number[], chatId: number): Promise<any> {
    const data = JSON.stringify({ users, chatId });
    return httpFetch.put(`/chats/users`, {
      data,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  deleteUserFromChat(users: number[], chatId: number): Promise<any> {
    return httpFetch.delete(`/chats/users`, {
      data: {
        users,
        chatId,
      },
      headers: {
        "content-type": "application/json",
      },
    });
  }

  async getChatToken(chatId: number): Promise<any> {
    const result: XMLHttpRequest = await httpFetch.post(
      `/chats/token/${chatId}`,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    return this._checkAnswer(result);
  }

  changeChatAvatar(file: FormData): Promise<any> {
    const data = file;
    return httpFetch.put("/chats/avatar", {
      data,
      headers: {
        accept: "application/json",
      },
    });
  }
}

export default ChatApi;
