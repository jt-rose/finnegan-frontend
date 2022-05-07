import { get } from "../queries/fetchers";
import { useQuery } from "react-query";
import { TRANSACTION_ROUTE } from "./routes";
import { Transaction } from "../types/Transaction";

export const useGetTransactionsQuery = (credentials: string) => {
  return useQuery<Transaction, Error>("transactions", () =>
    get(TRANSACTION_ROUTE, credentials)
  );
};

// useCreateTransactionMutation

// useEditTransactionMutation

// useDeleteTransactionMutation
