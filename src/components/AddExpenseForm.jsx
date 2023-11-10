import { Button } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import { BudgetsContext } from "../context/BudgetsContext";

const AddExpenseForm = ({ setOpen }) => {
  const [expenseValues, setExpenseValues] = useState({});
  const { budgetId, budgets, addExpense, setBudgetId } =
    useContext(BudgetsContext);
  const selecetBudgetRef = useRef();
  const budget = budgets.find((budget) => budget.budgetId == budgetId);

  const handleAddExpense = (e) => {
    e.preventDefault();
    setBudgetId(selecetBudgetRef.current.value);
    addExpense(expenseValues);
    setOpen(false);
  };
  return (
    <div className="form-div">
      <h2>New Expense📌</h2>
      <form onSubmit={handleAddExpense}>
        <label htmlFor="description">Description Expense</label>
        <br />
        <input
          type="text"
          id="description"
          required
          onChange={(e) =>
            setExpenseValues({
              ...expenseValues,
              title: e.target.value,
            })
          }
        />{" "}
        <br />
        <label htmlFor="amount">Amount</label>
        <br />
        <input
          type="number"
          id="amount"
          required
          onChange={(e) =>
            setExpenseValues({
              ...expenseValues,
              amount: e.target.value,
            })
          }
        />{" "}
        <br />
        <label>Budget Name</label>
        <br />
        <select
          required
          ref={selecetBudgetRef}
          onChange={(e) =>
            setExpenseValues({
              ...expenseValues,
              budgetId: e.target.value,
            })
          }
        >
          {budgetId ? (
            <option value={budgetId}>{budget.budgetName}</option>
          ) : (
            budgets?.map((budget) => {
              return (
                <option key={budget.budgetId} value={budget.budgetId}>
                  {budget.budgetName}
                </option>
              );
            })
          )}
        </select>{" "}
        <br />
        <Button type="submit" variant="contained">
          Add Expense
        </Button>
      </form>
    </div>
  );
};

export default AddExpenseForm;
