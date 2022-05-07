import { useMutation } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../queries/userController";

function Login() {
  const navigate = useNavigate();
  const loginMutation = useMutation(
    (config: { username: string; password: string }) =>
      axios.post(LOGIN_ROUTE, config),
    {
      onSuccess: (data) => {
        console.log(data);
        const token = data.headers.authorization;
        console.log(token);
        sessionStorage.setItem("token", token);
        navigate("/");
      },
    }
  );

  const handleLogin = () => {
    loginMutation.mutate({ username: "user", password: "password" });
  };

  return <p onClick={handleLogin}>login</p>;
}

export default Login;
