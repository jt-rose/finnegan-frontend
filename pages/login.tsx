import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string, body: any) => axios.post(url, body);

const Login = () => {
  const { data, error } = useSWR(
    ["http://localhost:8080/login", { username: "user", password: "password" }],
    fetcher
  );
  if (error) {
    return <p>{`${error}`}</p>;
  }
  if (!data) {
    return <p>...loading</p>;
  }
  console.log(data.headers.authorization.replace("Bearer ", ""));
  return <div>{`${data.status}`}</div>;
};

export default Login;
