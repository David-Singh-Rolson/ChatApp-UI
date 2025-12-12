export const API = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    REFRESH: "/auth/refresh",
    LOGOUT: "/auth/logout",
  },

  USERS: {
    PROFILE: "/users/profile",
    UPDATE: "/users/update",
  },

  CHAT: {
    SEND_MESSAGE: (chatId: string) => `/chat/${chatId}/send`,
    GET_MESSAGES: (chatId: string) => `/chat/${chatId}/messages`,
    GET_CHATS: "/chat",
  },

  WEBSOCKET: {
    CHAT: process.env.NEXT_PUBLIC_SOCKET_URL || "",
  },
};
