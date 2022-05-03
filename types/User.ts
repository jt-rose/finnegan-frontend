export type User = {
  username: string;
  // password
  role: string;
  goal: number;
  goalDate: Date;
};
// import { AxiosResponse } from "axios";
// import { Fetchers, get, post, put } from "query/fetchers";
// import useSWRUntyped from "swr";

// export const useSWRWithoutBody = <T>(
//   urlWithCredentials: [url: string, cred: string],
//   fetcher: typeof get
// ) =>
//   useSWRUntyped<AxiosResponse<T, any>, any, [string, string]>(
//     urlWithCredentials,
//     fetcher
//   );

//   export const useSWRWithLogin = (fetcher: typeof post) => <T>(
//     url: string,
//     body: any
//   ) =>
//   useSWRUntyped<AxiosResponse<T, any>, any, ([string, string] | null)>(
//     [url,
//     body],
//     fetcher
//   )

// useSWR(get, credentials)(url)
// useSWR(post, credentials)(url, body)
