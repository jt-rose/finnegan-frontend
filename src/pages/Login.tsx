import { useMutation } from "react-query";
import axios from "axios";

function Login() {
  //const router = useRouter();
  const loginMutation = useMutation(
    (config: { username: string; password: string }) =>
      axios.post("http://localhost:8080/login", config),
    {
      onSuccess: (data) => {
        const token = data.headers.authorization;
        console.log(token);
        //sessionStorage.setItem("token", token);
        //router.push("/");
      },
    }
  );

  const handleLogin = () => {
    loginMutation.mutate({ username: "user", password: "password" });
  };

  return <p onClick={handleLogin}>login</p>;
}

export default Login;
