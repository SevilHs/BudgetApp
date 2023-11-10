import { Alert, Button, Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import { BudgetsContext } from "../context/BudgetsContext";

const AddBudgetForm = ({ setOpen }) => {
  const [newBudgetValues, setNewBudgetValues] = useState({});
  const { addBudget, budgets } = useContext(BudgetsContext);
  const checkBudget = budgets.find(
    (budget) => budget?.budgetName?.toLocaleLowerCase() == newBudgetValues?.budgetName?.toLocaleLowerCase()
  );
  const handleAddBudget = (e) => {
    e.preventDefault()
    !checkBudget && (addBudget(newBudgetValues), setOpen(false));
  };
  return (
    <div className="form-div">
      {checkBudget && (
        <Alert severity="warning">This Budget name already exists</Alert>
      )}
      <h2>New Budget📌</h2>
      <form onSubmit={handleAddBudget}>
        <label htmlFor="budget-name">Budget Name</label>
        <br />
        <input
          type="text"
          id="budget-name"
          required
          onChange={(e) =>
            setNewBudgetValues({
              ...newBudgetValues,
              budgetName: e.target.value,
            })
          }
        />
        <br />
        <label htmlFor="max-spending">Maximum Spending</label>
        <br />
        <input
          id="max-spending"
          type="number"
          required
          onChange={(e) =>
            setNewBudgetValues({
              ...newBudgetValues,
              maxSpending: e.target.value,
            })
          }
        />
        <br />
        <Button variant="contained" type="submit">
          Add Budget
        </Button>
      </form>
    </div>
  );
};

export default AddBudgetForm;
