import React, { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
  linearProgressClasses,
} from "@mui/material";
import { BudgetsContext } from "../context/BudgetsContext";
import ViewExpenses from "./ViewExpenses";

const BudgetCard = ({ darkMode, budget }) => {
  const { open, setOpen, setModalType, setBudgetId, deleteBudget, expenses } =
    useContext(BudgetsContext);

  const [viewExpenses, setViewExpenses] = useState(false);
  const [budgetAmount, setBudgetAmount] = useState(0);
  const linearValue = (budgetAmount / budget.maxSpending) * 100;
  const selectExpenses = expenses?.map((item) =>
    item.budgetId == budget.budgetId ? item.amount : 0
  );

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    marginTop: 20,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: linearValue >= 100 ? "rgb(189, 46, 46)" : "#ddd",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: linearValue >= 100 ? "rgb(189, 46, 46)" : "#514e66",
    },
  }));

  const handleOpenExpenseForm = () => {
    open ? setOpen(false) : setOpen(true);
    setBudgetId(budget.budgetId);
    setModalType("addExpense");
  };
  const handleDeleteBudget = () => {
    deleteBudget(budget.budgetId);
  };
  const handleOpenViewExpenses = () => {
    if (expenses?.find((item) => item.budgetId == budget.budgetId)) {
      viewExpenses ? setViewExpenses(false) : setViewExpenses(true);
      setBudgetId(budget.budgetId);
    } else {
      alert("Please add expense !");
    }
  };

  useEffect(() => {
    setBudgetAmount(selectExpenses?.reduce((a, b) => a + b, 0));
  }, [expenses]);
  return (
    <>
      <Card sx={{ maxWidth: 475 }} className="budget-card">
        <CardContent className={`${darkMode ? "dark-mode" : undefined} `}>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            {budget.budgetName}
          </Typography>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8} variant="h5" component="div">
              ${budgetAmount}
            </Grid>
            <Grid item xs={8} variant="h5" component="div">
              ${budget.maxSpending}
            </Grid>
          </Grid>
          <BorderLinearProgress variant="determinate" value={linearValue} />
        </CardContent>
        <CardActions className={`${darkMode ? "dark-mode" : undefined} `}>
          <Button
            size="small"
            style={{ color: `${darkMode ? "#ddd" : "#000"} ` }}
            onClick={handleOpenExpenseForm}
          >
            Add Expense
          </Button>
          <Button
            size="small"
            style={{ color: `${darkMode ? "#ddd" : "#000"} ` }}
            onClick={handleOpenViewExpenses}
          >
            View Expenses
          </Button>
          <Button
            size="small"
            style={{ color: `${darkMode ? "#ddd" : "#000"} ` }}
            onClick={handleDeleteBudget}
          >
            Delete Budget
          </Button>
        </CardActions>
      </Card>
      <ViewExpenses
        viewExpenses={viewExpenses}
        setViewExpenses={setViewExpenses}
      />
    </>
  );
};

export default BudgetCard;
