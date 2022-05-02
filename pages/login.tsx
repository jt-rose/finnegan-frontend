import useSWR from "swr";
import axios from "axios";
import { useState } from "react";

const fetcher = (url: string, body: any) => axios.post(url, body);

const Login = () => {
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const { data, error } = useSWR(
    shouldSubmit
      ? [
          "http://localhost:8080/login",
          { username: "user", password: "password" },
        ]
      : null,
    fetcher
  );
  if (error) {
    return <p>{`${error}`}</p>;
  }
  if (!shouldSubmit) {
    return <button onClick={() => setShouldSubmit(true)}>submit</button>;
  }
  if (shouldSubmit && !data) {
    return <p>...loading</p>;
  } else {
    //console.log(data.headers.authorization.replace("Bearer ", ""));
    return <div>{`${data?.status}`}</div>;
  }
};

export default Login;
