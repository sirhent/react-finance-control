import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../../../contexts/TransactionsContext";

export function useSummary() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.transactions;
    }
  );

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