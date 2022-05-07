import { Transaction } from "./Transaction";

export interface RecurringTransaction extends Transaction {
  startDate: Date;
  endDate?: Date;
  cycle: string;
}
