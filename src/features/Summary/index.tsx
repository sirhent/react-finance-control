import { SummaryCard } from "./Components/SummaryCard";
import * as Styled from "./styles";

export function Summary() {
  return (
    <Styled.SummaryContainer>
      <SummaryCard
        themeColor="success"
        iconName="ArrowCircleUp"
        summaryTitle="Recebidos"
        currencyValue="R$ 17.400,00"
      />

      <SummaryCard
        themeColor="error"
        iconName="ArrowCircleDown"
        summaryTitle="Gastos"
        currencyValue="R$ 1.259,00"
      />

      <SummaryCard
        themeColor="progress"
        iconName="CurrencyDollar"
        summaryTitle="Lucros"
        currencyValue="R$ 16.141,00"
      />
    </Styled.SummaryContainer>
  );
}