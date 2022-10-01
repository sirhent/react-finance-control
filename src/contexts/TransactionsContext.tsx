import { createContext, ReactNode, useEffect, useState } from "react";

interface Transaction {
  id: number;
  title: string;
  value: number;
  type: "income" | "outcome";
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[];
}

export const TransactionsContext = createContext({} as TransactionContextType);

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider(props: TransactionsProviderProps) {
  const [ transactions, setTransactions ] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch("http://localhost:3999/transactions");
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {props.children}
    </TransactionsContext.Provider>
  );
}