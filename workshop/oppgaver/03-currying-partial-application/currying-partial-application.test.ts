import { it, expect, describe } from "vitest";

import { transactions } from "../../data/transactions";
import { EUR_TO_NOK } from "../constants";
import { currencyFilter, toAmount } from "./__spoilers/dontopen";

import { dkkToSek, ninetyDkkInNok } from "./currying-partial-application";
import * as CPA from "./currying-partial-application";

describe("OPPGAVE 3.1", () => {
  it("converts EUR to NOK", () => {
    const convertToNOK = CPA.convertCurrency(EUR_TO_NOK);

    const result = transactions
      .filter(currencyFilter("EUR"))
      .map(toAmount)
      .map(convertToNOK)
      .slice(0, 5);

    expect(result).toEqual([
      -257428.55039999998, -196997.9808, -132428.892, -317771.92559999996, -290271.84959999996,
    ]);
  });
});

describe("OPPGAVE 3.2", () => {
  it("tell if transaction is the given currency", () => {
    const isCurrency = CPA.isCurrencyCurried("NOK");

    expect(isCurrency(transactions[0])).toBe(false);
    expect(isCurrency(transactions[1])).toBe(true);
  });
});

describe("OPPGAVE 3.3", () => {
  it("convert from DKK to SEK", () => {
    expect(dkkToSek(100)).toBe(154);
  });

  it("should have the correct NOK", () => {
    expect(Number(ninetyDkkInNok.toFixed(1))).toBe(136.2);
  });
});
