import { Button } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import { BudgetsContext } from "../context/BudgetsContext";

const AddExpenseForm = () => {
  const [expenseValues, setExpenseValues] = useState({});
  const { budgetId, budgets, addExpense, setBudgetId } =
    useContext(BudgetsContext);
  const selecetBudgetRef = useRef();
  const budget = budgets.find((budget) => budget.budgetId == budgetId);

  const handleAddExpense = () => {
    setBudgetId(selecetBudgetRef.current.value);
    addExpense(expenseValues);
  };
  return (
    <>
      <h3>New Expense</h3>
      <form>
        <label htmlFor="">Description Expense</label>
        <br />
        <input
          type="text"
          onChange={(e) =>
            setExpenseValues({
              ...expenseValues,
              title: e.target.value,
            })
          }
        />{" "}
        <br />
        <label htmlFor="">Amount</label>
        <br />
        <input
          type="number"
          name=""
          id=""
          onChange={(e) =>
            setExpenseValues({
              ...expenseValues,
              amount: e.target.value,
            })
          }
        />{" "}
        <br />
        <label htmlFor="">Budget Name</label>
        <br />
        <select
          name=""
          id=""
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
                <option value={budget.budgetId}>{budget.budgetName}</option>
              );
            })
          )}
        </select>{" "}
        <br />
        <Button variant="contained" onClick={() => handleAddExpense()}>
          Add Expense
        </Button>
      </form>
    </>
  );
};

export default AddExpenseForm;
