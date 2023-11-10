import React, { useContext } from "react";
import { Box, Button, Modal } from "@mui/material";
import { BudgetsContext } from "../context/BudgetsContext";
import { v4 as uuid } from "uuid";


const ViewExpenses = ({ viewExpenses, setViewExpenses }) => {
  const { expenses, budgetId, deleteExpense } = useContext(BudgetsContext);
  const filteredExpenses = expenses.filter(
    (expense) => expense.budgetId == budgetId && expense
  );
  const handleClose = () => setViewExpenses(false);
  return (
    <Modal
      open={viewExpenses}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        {filteredExpenses?.map((item) => {
          return (
            <div className="view-expenses" key={uuid()}>
              <div>
                <h4>
                  Expense Title: <span>{item.title}</span>
                </h4>
                <h4>
                  Amount: <span>${item.amount}</span>
                </h4>
              </div>
              <Button
                onClick={() => deleteExpense(item.expenseId)}
                variant="outlined"
                color="error"
              >
                Delete
              </Button>
            </div>
          );
        })}
      </Box>
    </Modal>
  );
};

export default ViewExpenses;
