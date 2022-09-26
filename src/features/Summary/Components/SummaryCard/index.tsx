import { InsertIcon } from "../../../../components/InsertIcon";
import * as Styled from "./styles";

export interface SummaryCardVariants {
  themeColor: "success" | "progress" | "error";
}

interface SummaryCardProps extends SummaryCardVariants {
  summaryTitle: string;
  iconName: "ArrowCircleUp" | "ArrowCircleDown" | "CurrencyDollar";
  currencyValue: string;
}

export function SummaryCard(props: SummaryCardProps) {
  return (
    <Styled.SummaryCardContainer themeColor={props.themeColor}>
      <Styled.LeftBar themeColor={props.themeColor} />

      <Styled.Content>
        <Styled.Title>
          {props.summaryTitle}
        </Styled.Title>

        <Styled.CurrencyValue>
          {props.currencyValue}
        </Styled.CurrencyValue>
      </Styled.Content>

      <Styled.IconContainer themeColor={props.themeColor}>
        <InsertIcon iconName={props.iconName} iconWeight="light" iconSize={32} />
      </Styled.IconContainer>
    </Styled.SummaryCardContainer>
  );
}