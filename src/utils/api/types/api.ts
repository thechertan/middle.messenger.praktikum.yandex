export interface UserDefault extends Record<string, any> {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  phone: string;
}

export interface SignupOptions extends UserDefault {
  password: string;
}

export interface User extends UserDefault {
  avatar: string;
  display_name: string;
  id: number;
}

export interface MessageDefault {
  chat_id: number;
  content: string;
  file: any;
  id: number;
  is_read: boolean;
  time: string;
  type: string;
  user_id: number;
}

export interface Message extends MessageDefault {
  userName: string;
  isCurrentUserMessage: boolean;
}
