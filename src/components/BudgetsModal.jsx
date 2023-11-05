import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddBudgetForm from "./AddBudgetForm";
import AddExpenseForm from "./AddExpenseForm";
import ViewExpenses from "./ViewExpenses";

const BudgetsModal = ({ open, setOpen, type }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    borderRadius:"10px",
    boxShadow: 24,
    p: 4,
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {type == "addBudget" ? (
            <AddBudgetForm setOpen={setOpen} />
          ) : (
            <AddExpenseForm setOpen={setOpen} />
          )}
          {/* {(() => {
            if ((type = "addBudget")) {
              return  <AddBudgetForm setOpen={setOpen} />;
            } else if (type == "addExpense") {
             return <AddExpenseForm setOpen={setOpen} />;
            } else {
             return <ViewExpenses />;
            }
          })()} */}
        </Box>
      </Modal>
    </div>
  );
};

export default BudgetsModal;
