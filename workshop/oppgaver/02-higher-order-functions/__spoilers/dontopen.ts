import { Currency } from "../../constants";
import { Transaction } from "../../../createMockData";

export const isCurrency = (currency: Currency, transaction: Transaction) =>
  transaction.currency === currency;

export const nullableProducts = <T>(it: T | null): it is T => it != null
