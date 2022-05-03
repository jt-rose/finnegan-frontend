import axios from "axios";
import { User } from "types/User";

export const get = <T>(url: string, credentials: string) => {
  return axios.get<T>(url, {
    headers: { Authorization: "Bearer " + credentials },
  });
};

export const post = (url: string, body: any, credentials: string) => {
  return axios.post(url, body, {
    headers: { Authorization: "Bearer " + credentials },
  });
};

export const put = (url: string, body: any, credentials: string) => {
  return axios.put(url, body, {
    headers: { Authorization: "Bearer " + credentials },
  });
};

export const remove = (url: string, credentials: string) => {
  return axios.delete(url, {
    headers: { Authorization: "Bearer " + credentials },
  });
};

export type Fetchers = typeof get | typeof post | typeof put | typeof remove;
