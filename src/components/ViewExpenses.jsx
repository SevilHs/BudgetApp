import { Box, Button, Modal } from "@mui/material";
import React, { useContext } from "react";
import { BudgetsContext } from "../context/BudgetsContext";

const ViewExpenses = ({ viewExpenses, setViewExpenses }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "rgb(255 247 247 / 96%)",
    // border: "2px solid #000",
    borderRadius:"10px",
    boxShadow: 24,
    p: 4,
  };

  const { expenses, budgetId,deleteExpense } = useContext(BudgetsContext);
  const filteredExpenses = expenses.filter(
    (expense) => expense.budgetId == budgetId && expense
  );
  console.log(filteredExpenses);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setViewExpenses(false);
  const handleDeleteExpense=()=>{

  }
  return (
    <Modal
      open={viewExpenses}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {filteredExpenses?.map((item) => {
          return (
            <div className="view-expenses">
              <div>
                <h4>
                  Expense Title: <span>{item.title}</span>
                </h4>
                <h4>
                  Amount: <span>${item.amount}</span>
                </h4>
              </div>
              <Button onClick={()=>deleteExpense(item.expenseId)} variant="outlined" color="error">
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
