// define routes

import axios from "axios";
import { useQuery } from "react-query";
import { User } from "types/User";

export const useGetUserQuery = () =>
  useQuery<User, Error>("user", () =>
    axios.get(USER_ROUTE).then((res) => res.data)
  );

// add prod endpoint later
const BASE_ROUTE = "http://localhost:8080";

export const USER_ROUTE = BASE_ROUTE + "/user";

export const SET_USER_GOAL_ROUTE = USER_ROUTE + "/setgoal";

export const TRANSACTION_ROUTE = BASE_ROUTE + "/transactions";

export const PAGINATED_TRANSACTIONS_ROUTE = TRANSACTION_ROUTE + "/paginated";

export const TRANSACTIONS_SUM_ROUTE = TRANSACTION_ROUTE + "/sum";

export const RECURRING_TRANSACTIONS_ROUTE = BASE_ROUTE + "/recurring";
