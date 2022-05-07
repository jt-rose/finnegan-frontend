import { get } from "../queries/fetchers";
import { useQuery } from "react-query";
import { RECURRING_TRANSACTIONS_ROUTE } from "./routes";
import { RecurringTransaction } from "../types/Recurring";

export const useGetRecurringTransactionsQuery = (credentials: string) => {
  return useQuery<RecurringTransaction, Error>("recurring", () =>
    get(RECURRING_TRANSACTIONS_ROUTE, credentials)
  );
};

// useCreateTransactionMutation

// useEditTransactionMutation

// useDeleteTransactionMutation
