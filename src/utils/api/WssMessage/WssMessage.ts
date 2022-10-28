import { isEqual } from "helpers/isEqual";

class WssMessage {
  socket!: WebSocket;

  interval: any;

  offset!: number;

  public open(token: string, currentChatId: string) {
    const userId: number | null = window.store.getState().user.id;
    if (!userId) {
      console.log("Ошибка userID не найден!");
      return;
    }
    if (this.socket) {
      this.close();
    }
    this.socket = new WebSocket(
      `wss://ya-praktikum.tech/ws/chats/${userId}/${currentChatId}/${token}`
    );

    this.initEventOpen();
    this.initEventMessage();
    this.initEventClose();
    this.initEventError();
  }

  public close() {
    this.socket?.close();
    setTimeout(() => {
      clearInterval(this.interval);
    }, 5000);
  }

  private initEventOpen() {
    this.socket.addEventListener("open", () => {
      this.offset = 0;

      this.socket.send(
        JSON.stringify({
          content: this.offset,
          type: "get old",
        })
      );
    });

    this.interval = setInterval(() => {
      this.socket.send(
        JSON.stringify({
          type: "ping",
        })
      );
    }, 5000);
  }

  private initEventMessage() {
    this.socket.addEventListener("message", (event) => {
      const result: boolean = isEqual(
        window.store.state.listMessages,
        JSON.parse(event.data)
      );

      if (JSON.parse(event.data).type !== "pong") {
        if (!result) {
          window.store.dispatch({ listMessages: JSON.parse(event.data) });
        }
      }
    });
  }

  private initEventClose() {
    this.socket.addEventListener("close", (event) => {
      this.offset = 0;

      if (event.wasClean) {
        console.log("Соединение закрыто чисто");
      } else {
        console.log("Обрыв соединения");
      }
    });
  }

  private initEventError() {
    this.socket.addEventListener("error", (event) => {
      console.log("Ошибка", (event as ErrorEvent).message);
    });
  }

  sendMessage(message: string) {
    if (!message.trim()) return;

    this.socket.send(
      JSON.stringify({
        content: message,
        type: "message",
      })
    );
  }

  // TODO addEventListenerScroll
  // loadMoreMessages() {
  //   this.offset += 20;

  //   this.socket.send(
  //     JSON.stringify({
  //       content: this.offset,
  //       type: "get old",
  //     })
  //   );
  // }
}
export { WssMessage };
