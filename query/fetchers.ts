import axios from "axios";

export const get = (url: string, credentials: string) => {
  return axios.get(url, {
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
