//import useSWR from "swr";
import { useGetUserQuery, USER_ROUTE } from "../query/routes";
import { get } from "../query/fetchers";
import { User } from "types/User";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { useStore } from "store/store";
import { Layout } from "components/Layout";

// const Wrapper = () => {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => setLoaded(true), []);
//   if (!loaded) {
//     return <p>loading...</p>;
//   }
//   return <Index />;
// };

const Index = () => {
  const token = useStore((state) => state.token);

  const { isLoading, error, data } = useGetUserQuery(
    //"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjUxNTU1MjMwfQ.PkIW-csxAM_YhLX-VKR_Xd-se9845vSrZz-PQpLiloLPwwx_4_h4F7bi7pH3NlnV0aEDbU7fxitov_32P6Ir3g"
    token
  );
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
  return (
    <Layout>
      <h1>Hello Finnegan!</h1>
    </Layout>
  );
};

export default Index;
