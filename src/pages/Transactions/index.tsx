import { useContext, useEffect, useState } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "../../features/SearchForm";
import { Summary } from "../../features/Summary";
import { TransactionItemData, TransactionsList } from "../../features/TransactionsList";
import { DefaultPageLayout } from "../../layouts/DefaultPageLayout";

const transactionsData_dummy: TransactionItemData[] = [
  {
    id: 1,
    title: "Desenvolvimento de site",
    value: 12000.00,
    type: "income",
    category: "Venda",
    createdAt: "13/04/2022",
  },
  {
    id: 2,
    title: "Hamburguer",
    value: 59.90,
    type: "outcome",
    category: "Alimentação",
    createdAt: "10/04/2022",
  },
];

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <DefaultPageLayout>
      <Summary />

      <SearchForm />
      <TransactionsList transactions={transactions} />
    </DefaultPageLayout>
  );
}