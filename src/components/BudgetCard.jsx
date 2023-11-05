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
import React, { useContext, useState } from "react";
import { BudgetsContext } from "../context/BudgetsContext";
import ViewExpenses from "./ViewExpenses";

const BudgetCard = ({ darkMode, budget }) => {
  const { open, setOpen, modalType, setModalType, setBudgetId, deleteBudget } =
    useContext(BudgetsContext);
  const [viewExpenses, setViewExpenses] = useState(false);

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#ddd",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#308fe8",
    },
  }));
  const handleOpenExpenseForm = () => {
    open ? setOpen(false) : setOpen(true);
    setModalType("addExpense");
    setBudgetId(budget.budgetId);
  };
  const handleDeleteBudget = () => {
    deleteBudget(budget.budgetId);
  };
  const handleOpenViewExpenses = () => {
    viewExpenses ? setViewExpenses(false) : setViewExpenses(true);
    setBudgetId(budget.budgetId)
  };
  return (
    <>
      <Card sx={{ maxWidth: 375 }}>
        <CardContent className={`${darkMode ? "dark-mode" : undefined} `}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Budget Name
          </Typography>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8} variant="h5" component="div">
              &52
            </Grid>
            <Grid item xs={8} variant="h5" component="div">
              &5000
            </Grid>
          </Grid>
          <BorderLinearProgress variant="determinate" value={50} />
        </CardContent>
        <CardActions className={`${darkMode ? "dark-mode" : undefined} `}>
          <Button size="small" onClick={handleOpenExpenseForm}>
            Add Expense
          </Button>
          <Button size="small" onClick={handleOpenViewExpenses}>
            View Expenses
          </Button>
          <Button size="small" onClick={handleDeleteBudget}>
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
