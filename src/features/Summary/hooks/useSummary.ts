import { useContext } from "react";
import { TransactionsContext } from "../../../contexts/TransactionsContext";

export function useSummary() {
  const { transactions } = useContext(TransactionsContext);

  let totalIncome = 0;
  let totalOutcome = 0;
  let totalProfit = 0;

  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].type === "income") {
      totalIncome += transactions[i].value;
    } else {
      totalOutcome += transactions[i].value;
    }
  }

  totalProfit = totalIncome - totalOutcome;

  return {
    totalIncome: totalIncome,
    totalOutcome: totalOutcome,
    totalProfit: totalProfit,
  };
}