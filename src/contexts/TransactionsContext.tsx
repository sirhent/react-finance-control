import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  title: string;
  value: number;
  type: "income" | "outcome";
  category: string;
  createdAt: string;
}

interface CreateTransactionInput {
  title: string;
  value: number;
  category: string;
  type: "income" | "outcome";
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionContextType);

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider(props: TransactionsProviderProps) {
  const [ transactions, setTransactions ] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      }
    });

    setTransactions(response.data);
  }

  async function createTransaction(data: CreateTransactionInput) {
    const response = await api.post("/transactions", {
      title: data.title,
      value: data.value,
      category: data.category,
      type: data.type,
      createdAt: new Date(),
    });

    setTransactions((state) => [response.data, ...state]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransactions,
      createTransaction
    }}>
      {props.children}
    </TransactionsContext.Provider>
  );
}