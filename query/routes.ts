// define routes

import axios from "axios";
import { useQuery } from "react-query";
import { get } from "../query/fetchers";
import { User } from "types/User";

export const useGetUserQuery = (credentials: string) =>
  useQuery<User, Error>("user", () => get(USER_ROUTE, credentials));

// add prod endpoint later
const BASE_ROUTE = "http://localhost:8080";

export const USER_ROUTE = BASE_ROUTE + "/user";

export const SET_USER_GOAL_ROUTE = USER_ROUTE + "/setgoal";

export const TRANSACTION_ROUTE = BASE_ROUTE + "/transactions";

export const PAGINATED_TRANSACTIONS_ROUTE = TRANSACTION_ROUTE + "/paginated";

export const TRANSACTIONS_SUM_ROUTE = TRANSACTION_ROUTE + "/sum";

export const RECURRING_TRANSACTIONS_ROUTE = BASE_ROUTE + "/recurring";
