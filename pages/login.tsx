import axios from "axios";
import { post } from "query/fetchers";
import { LOGIN_ROUTE, useLoginMutation } from "query/userController";
import { useMutation } from "react-query";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const loginMutation = useMutation(
    (config: { username: string; password: string }) =>
      axios.post(LOGIN_ROUTE, config),
    {
      onSuccess: (data) => {
        console.log(data.headers.authorization);
        router.push("/");
      },
    }
  );

  const handleLogin = () => {
    loginMutation.mutate({ username: "user", password: "password" });
  };
  return <p onClick={handleLogin}>login</p>;
};

export default Login;
