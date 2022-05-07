import { useGetUserQuery } from "../queries/userController";

const Index = () => {
  //const token = useStore((state) => state.token);
  const token = sessionStorage.getItem("token") || "";

  const { isLoading, error, data } = useGetUserQuery(
    //"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjUxNTU1MjMwfQ.PkIW-csxAM_YhLX-VKR_Xd-se9845vSrZz-PQpLiloLPwwx_4_h4F7bi7pH3NlnV0aEDbU7fxitov_32P6Ir3g"
    token
  );

  console.log(isLoading);
  console.log("data: ", data);
  console.log("error: ", error);
  return <p>Index page</p>;
};

export default Index;
