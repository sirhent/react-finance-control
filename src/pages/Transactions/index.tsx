import { SearchForm } from "../../features/SearchForm";
import { Summary } from "../../features/Summary";
import { TransactionItemData, TransactionsList } from "../../features/TransactionsList";
import { DefaultPageLayout } from "../../layouts/DefaultPageLayout";

const transactionsData_dummy: TransactionItemData[] = [
  {
    transactionTitle: "Desenvolvimento de site",
    transactionValue: "+ R$ 12.000,00",
    transactionType: "income",
    transactionCategory: "Venda",
    transactionDate: "13/04/2022",
  },
  {
    transactionTitle: "Hamburguer",
    transactionValue: "- R$ 59,90",
    transactionType: "outcome",
    transactionCategory: "Alimentação",
    transactionDate: "10/04/2022",
  },
];

export function Transactions() {
  return (
    <DefaultPageLayout>
      <Summary />

      <SearchForm />
      <TransactionsList list={transactionsData_dummy} />
    </DefaultPageLayout>
  );
}