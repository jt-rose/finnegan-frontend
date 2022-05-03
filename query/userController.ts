import { get, post } from "../query/fetchers";
import { User } from "types/User";
import { useQuery, useMutation } from "react-query";
import { BASE_ROUTE } from "./baseRoute";

const USER_ROUTE = BASE_ROUTE + "/user";

const SET_USER_GOAL_ROUTE = USER_ROUTE + "/setgoal";

export const LOGIN_ROUTE = BASE_ROUTE + "/login";

export const useGetUserQuery = (credentials: string) => {
  return useQuery<User, Error>("user", () => get(USER_ROUTE, credentials));
};

// useCreateUserMutation

// useEditUserMutation

// useDeleteUserMutation

// useSetUserGoalMutation

// useLoginMutation
export const useLoginMutation = (username: string, password: string) => {
  return useMutation<string, Error>("login", () =>
    post(LOGIN_ROUTE, { username, password }, "")
  );
};
