import { useGetRecurringTransactionsQuery } from "../queries/recurringTransactionController";
import { useGetTransactionsQuery } from "../queries/transactionController";
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

  const res = useGetTransactionsQuery(token);
  console.log("transaction: ", res.isLoading);
  console.log("transaction data: ", res.data);
  console.log("transaction error: ", res.error);

  const res2 = useGetRecurringTransactionsQuery(token);
  console.log("recurring: ", res2.isLoading);
  console.log("recurring data: ", res2.data);
  console.log("recurring error: ", res2.error);

  return <p>Index page</p>;
};

export default Index;
