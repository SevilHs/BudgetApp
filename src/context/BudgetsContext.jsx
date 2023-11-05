import React, { createContext, useEffect, useState } from "react";
import useLocalStorage from "../service/useLocalStorage";
import { v4 as uuid } from "uuid";

export const BudgetsContext = createContext();

const BudgetsProvider = ({ children }) => {
  // useEffect(() => {
  //   localStorage.setItem("Budgets",JSON.stringify([]))
  //   localStorage.setItem("Expenses",JSON.stringify([]))
  // }, [])

  const [budgets, setBudgets] = useLocalStorage("budgets", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);
  const [budgetId, setBudgetId] = useState(null);
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const getBudgetExpense = (budgetId) => {
    return expenses.filter((expense) => expense.budgetId == budgetId);
  };

  const addBudget = ({ budgetName, maxSpending }) => {
    setBudgets((prevBudgets) => [
      ...prevBudgets,
      { budgetId: uuid(), budgetName, maxSpending },
    ]);
  };

  const addExpense = ({ title, amount, budgetId }) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { expenseId: uuid(), title, amount, budgetId },
    ]);
  };

  const deleteBudget = (budgetId) => {
    setBudgets((prevBudgets) =>
      prevBudgets.filter((budget) => budget.budgetId != budgetId)
    );
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.budgetId != budgetId)
    );
  };

  const deleteExpense = (expenseId) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.expenseId != expenseId)
    );
  };

  const providerValue = {
    budgets,
    expenses,
    budgetId,
    setBudgetId,
    open,
    setOpen,
    modalType,
    setModalType,
    getBudgetExpense,
    addBudget,
    addExpense,
    deleteBudget,
    deleteExpense,
  };
  return (
    <BudgetsContext.Provider value={providerValue}>
      {children}
    </BudgetsContext.Provider>
  );
};

export default BudgetsProvider;
