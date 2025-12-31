const isDev = false; // set to true for local development
const localhost = "http://localhost:4000/"
const live = import.meta.env.VITE_LIVE_HOST

export const baseUrl = isDev
  ? localhost
  : live;