export const BASE_URL = 'https://127.0.0.1:8080';

// APIエンドポイントの一覧
export const API_URLS = {
  LOGIN: '/api/auth/login',
  REGISTER: '/api/auth/register',
  GOOGLE_LOGIN: '/api/auth/google',
  LOGOUT: '/api/auth/logout',
  GET_USER: '/api/user',
  UPDATE_USER: '/api/user',
  DELETE_USER: '/api/user',
  START_CHAT: '/api/chats',
  GET_CHAT_LIST: '/api/chats',
  GET_CHAT_BY_ID: (id) => `/api/chats/${id}`,
  UPDATE_CHAT_BY_ID: (id) => `/api/chats/${id}`,
  DELETE_CHAT_BY_ID: (id) => `/api/chats/${id}`,
  ADD_MESSAGE: (id) => `/api/chats/${id}/messages`,
  UPDATE_MESSAGE: (id, messageId) => `/api/chats/${id}/messages/${messageId}`,
  ADD_DICTIONARY: '/api/dictionary',
  GET_DICTIONARY_LIST: '/api/dictionary',
  GET_DICTIONARY_BY_ID: (id) => `/api/dictionary/${id}`,
  UPDATE_DICTIONARY_BY_ID: (id) => `/api/dictionary/${id}`,
  DELETE_DICTIONARY_BY_ID: (id) => `/api/dictionary/${id}`,
  SEARCH_DICTIONARY: '/api/dictionary/search',
  HEALTH_CHECK: '/api/health',
};