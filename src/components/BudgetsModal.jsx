import React from "react";
import { Box, Modal } from "@mui/material";
import AddBudgetForm from "./AddBudgetForm";
import AddExpenseForm from "./AddExpenseForm";

const BudgetsModal = ({ open, setOpen, type }) => {
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          {type == "addBudget" ? (
            <AddBudgetForm setOpen={setOpen} />
          ) : (
            <AddExpenseForm setOpen={setOpen} />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default BudgetsModal;
