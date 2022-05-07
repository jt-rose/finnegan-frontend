import { User } from "./User";

export interface Transaction {
  id: number;
  amount: number;
  category: string;
  date: Date;
  note?: string;
  owner: User;
}
