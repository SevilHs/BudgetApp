import { Alert, Button, Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import { BudgetsContext } from "../context/BudgetsContext";

const AddBudgetForm = ({ setOpen }) => {
  const [newBudgetValues, setNewBudgetValues] = useState({});
  //   const {budgets}=useContext(BudgetsContext)
  const { addBudget, budgets } = useContext(BudgetsContext);
  const checkBudget = budgets.find(
    (budget) => budget.budgetName == newBudgetValues.budgetName
  );
  const handleAddBudget = () => {
    !checkBudget && (addBudget(newBudgetValues), setOpen(false));
  };
  return (
    <>
      {checkBudget && (
        <Alert severity="warning">This Budget name already exists</Alert>
      )}
      <h3>New Budget</h3>
      <form>
        <label htmlFor="budget-name">Budget Name</label>
        <br />
        <input
          type="text"
          name=""
          id="budget-name"
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
          onChange={(e) =>
            setNewBudgetValues({
              ...newBudgetValues,
              maxSpending: e.target.value,
            })
          }
        />
        <br />
        <Button variant="contained" onClick={handleAddBudget}>
          Add Budget
        </Button>
      </form>
    </>
  );
};

export default AddBudgetForm;
