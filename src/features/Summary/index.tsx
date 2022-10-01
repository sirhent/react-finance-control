import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SummaryCard } from "./Components/SummaryCard";
import * as Styled from "./styles";

export function Summary() {
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

  return (
    <Styled.SummaryContainer>
      <SummaryCard
        themeColor="success"
        iconName="ArrowCircleUp"
        summaryTitle="Recebidos"
        currencyValue={`R$ ${totalIncome.toFixed(2)}`}
      />

      <SummaryCard
        themeColor="error"
        iconName="ArrowCircleDown"
        summaryTitle="Gastos"
        currencyValue={`R$ ${totalOutcome.toFixed(2)}`}
      />

      <SummaryCard
        themeColor="progress"
        iconName="CurrencyDollar"
        summaryTitle="Lucros"
        currencyValue={`R$ ${totalProfit.toFixed(2)}`}
      />
    </Styled.SummaryContainer>
  );
}