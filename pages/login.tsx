import axios from "axios";
import { post } from "query/fetchers";
import { LOGIN_ROUTE, useLoginMutation } from "query/userController";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { useStore } from "store/store";
import { Layout } from "components/Layout";

const Login = () => {
  const setToken = useStore((state) => state.setToken);
  const router = useRouter();
  const loginMutation = useMutation(
    (config: { username: string; password: string }) =>
      axios.post(LOGIN_ROUTE, config),
    {
      onSuccess: (data) => {
        const token = data.headers.authorization;
        console.log(token);
        sessionStorage.setItem("token", token);
        setToken(token);
        router.push("/");
      },
    }
  );

  const handleLogin = () => {
    loginMutation.mutate({ username: "user", password: "password" });
  };
  return (
    <Layout>
      <p onClick={handleLogin}>login</p>
    </Layout>
  );
};

export default Login;
