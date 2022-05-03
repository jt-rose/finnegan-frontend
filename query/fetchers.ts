import axios from "axios";

// set up headers for passing jwt
const getTokenHeader = (credentials: string) => ({
  headers: { Authorization: "Bearer " + credentials },
});

// set up fetchers for CRUD
export const get = (url: string, credentials: string) => {
  return axios.get(url, getTokenHeader(credentials)).then((res) => res.data);
};

export const post = (url: string, body: any, credentials: string) => {
  axios.post(url, body, getTokenHeader(credentials)).then((res) => res.data);
};

export const put = (url: string, body: any, credentials: string) => {
  axios.put(url, body, getTokenHeader(credentials)).then((res) => res.data);
};

export const remove = (url: string, credentials: string) => {
  return axios.delete(url, getTokenHeader(credentials));
};
