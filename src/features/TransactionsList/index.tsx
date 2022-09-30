import * as Styled from "./styles";

export interface TransactionItemVariants {
  themeColor: "success" | "error";
}

export interface TransactionItemData {
  transactionTitle: string;
  transactionValue: string;
  transactionType: "income" | "outcome";
  transactionCategory: string;
  transactionDate: string;
}
interface TransactionsListProps {
  list: TransactionItemData[];
}

export function TransactionsList(props: TransactionsListProps) {
  return (
    <Styled.TransactionsListContainer>
      {props.list.map((transaction) => {
        return (
          <Styled.TransactionItem
            key={transaction.transactionTitle}
            themeColor={
              transaction.transactionType === "income" ? "success" : "error"
            }
          >
            <Styled.ItemLeftBar
              themeColor={
                transaction.transactionType === "income" ? "success" : "error"
              }
            />

            <Styled.TransactionTitle>
              {transaction.transactionTitle}
            </Styled.TransactionTitle>

            <Styled.TransactionValue
              themeColor={
                transaction.transactionType === "income" ? "success" : "error"
              }
            >
              {transaction.transactionValue}
            </Styled.TransactionValue>

            <Styled.TransactionType>
              {transaction.transactionCategory}
            </Styled.TransactionType>

            <Styled.TransactionDate>
              {transaction.transactionDate}
            </Styled.TransactionDate>
          </Styled.TransactionItem>
        );
      })}
    </Styled.TransactionsListContainer>
  );
}