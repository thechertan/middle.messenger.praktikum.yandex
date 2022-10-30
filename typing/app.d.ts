declare global {
  export type Nullable<T> = T | null;
  declare module "*.svg";
  declare module "*.png";
  declare module "*.jpg";

  export type Keys<T extends Record<string, unknown>> = keyof T;
  export type Values<T extends Record<string, unknown>> = T[Keys<T>];

  interface Window {
    store: Store<AppState>;
    router: Store<AppState>;
  }

  export type AppState = {
    isLoading: boolean;
    user: User | null;
    chats: Chat | null;
    isActivChat: isActivChat | null;
    listMessages: [{}];
  };

  export type User = {
    id: number;
    login: string;
    first_name: string;
    second_name: string;
    display_name: string;
    avatar: string;
    phone: string;
    email: string;
  };

  type lastMessage = {};

 
  export type Chat = {
    id: number;
    title: string;
    avatar: string | null;
    created_by: number;
    unread_count: number;
    last_message: null | lastMessage;
  };

  export type isActivChat = {
    chatId: number;
    isChat: boolean;
  };
}

export {};
