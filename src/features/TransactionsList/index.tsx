import * as Styled from "./styles";

export interface TransactionItemVariants {
  themeColor: "success" | "error";
}

export interface TransactionItemData {
  id: number;
  title: string;
  value: number;
  type: "income" | "outcome";
  category: string;
  createdAt: string;
}
interface TransactionsListProps {
  transactions: TransactionItemData[];
}

export function TransactionsList(props: TransactionsListProps) {
  return (
    <Styled.TransactionsListContainer>
      {props.transactions.map((transaction) => {
        return (
          <Styled.TransactionItem
            key={transaction.id}
            themeColor={
              transaction.type === "income" ? "success" : "error"
            }
          >
            <Styled.ItemLeftBar
              themeColor={
                transaction.type === "income" ? "success" : "error"
              }
            />

            <Styled.TransactionTitle>
              {transaction.title}
            </Styled.TransactionTitle>

            <Styled.TransactionValue
              themeColor={
                transaction.type === "income" ? "success" : "error"
              }
            >
              {transaction.type === "income"
                ? `+ R$ ${transaction.value.toFixed(2)}`
                : `- R$ ${transaction.value.toFixed(2)}`
              }
            </Styled.TransactionValue>

            <Styled.TransactionType>
              {transaction.category}
            </Styled.TransactionType>

            <Styled.TransactionDate>
              {transaction.createdAt}
            </Styled.TransactionDate>
          </Styled.TransactionItem>
        );
      })}
    </Styled.TransactionsListContainer>
  );
}