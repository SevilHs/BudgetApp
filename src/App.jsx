import { useContext, useState } from "react";
import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from "./components/BudgetsModal";
import { BudgetsContext } from "./context/BudgetsContext";
import { v4 as uuid } from "uuid";
import TitleBudget from "./components/TitleBudget";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { open, setOpen, modalType, budgets } = useContext(BudgetsContext);
  
  return (
    <>
      <div className={darkMode ? "dark-mode" : undefined}>
        <div className="container">
          <TitleBudget darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="budget-cards">
            {budgets.map((budget) => {
              return (
                <BudgetCard key={uuid()} darkMode={darkMode} budget={budget} />
              );
            })}
          </div>
        </div>
      </div>
      <AddBudgetModal open={open} setOpen={setOpen} type={modalType} />
    </>
  );
}

export default App;
