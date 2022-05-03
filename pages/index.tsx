//import useSWR from "swr";
import { useGetUserQuery, USER_ROUTE } from "../query/routes";
import { get } from "../query/fetchers";
import { User } from "types/User";
import { useQuery } from "react-query";

const Index = () => {
  const { isLoading, error, data } = useGetUserQuery();
  //   const { data, error } = useSWR<User>(
  //     [
  //       USER_ROUTE,
  //       "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjUxNTU1MjMwfQ.PkIW-csxAM_YhLX-VKR_Xd-se9845vSrZz-PQpLiloLPwwx_4_h4F7bi7pH3NlnV0aEDbU7fxitov_32P6Ir3g",
  //     ],
  //     get
  //   );
  console.log(isLoading);
  console.log("data: ", data);
  console.log("error: ", error);
  return <h1>Hello Finnegan!</h1>;
};

export default Index;
