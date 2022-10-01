import { priceFormatter } from "../../helpers/formatter";
import { useSummary } from "./hooks/useSummary";
import { SummaryCard } from "./Components/SummaryCard";
import * as Styled from "./styles";

export function Summary() {
  const { totalIncome, totalOutcome, totalProfit } = useSummary();

  return (
    <Styled.SummaryContainer>
      <SummaryCard
        themeColor="success"
        iconName="ArrowCircleUp"
        summaryTitle="Recebidos"
        currencyValue={priceFormatter.format(totalIncome)}
      />

      <SummaryCard
        themeColor="error"
        iconName="ArrowCircleDown"
        summaryTitle="Gastos"
        currencyValue={priceFormatter.format(totalOutcome)}
      />

      <SummaryCard
        themeColor="progress"
        iconName="CurrencyDollar"
        summaryTitle="Lucros"
        currencyValue={priceFormatter.format(totalProfit)}
      />
    </Styled.SummaryContainer>
  );
}