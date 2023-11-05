import { useContext, useState } from "react";
import "./App.css";
import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from "./components/BudgetsModal";
import { BudgetsContext } from "./context/BudgetsContext";

function App() {
  // let a = 345;
  // let firstNum = (a - (a % 100)) / 100;
  // let thirdNum = a % 10;
  // let secondNum = ((a % 100) - thirdNum) / 10;

  // let f=(a-a%10)%100
  // let t=a%10
  // // console.log(parseInt(t));
  // // console.log(t);

  // let sumNumbers = firstNum + secondNum + thirdNum;
  // let multiplyNumbers = firstNum * secondNum * thirdNum;
  // let averageNumbers = (firstNum + secondNum + thirdNum) / 3;
  // for (let i = 0; i <=10; i++) {
  //   console.log(`${i}*${i}=${i*i}`);
  // }

  // const [open, setOpen] = useState(false);
  // const [modalType, setModalType] = useState("");
  const { open, setOpen, modalType, setModalType, budgets, setBudgetId } =
    useContext(BudgetsContext);

  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };
  const handleOpenBudgetForm = () => {
    open ? setOpen(false) : setOpen(true);
    setModalType("addBudget");
  };
  const handleOpenExpenseForm = () => {
    open ? setOpen(false) : setOpen(true);
    setModalType("addExpense");
    setBudgetId(null);
  };
  return (
    <>
      <div className={darkMode ? "dark-mode" : undefined}>
        <div className="container">
          <div className="title">
            <h1>Budgets</h1>
            <button onClick={handleDarkMode}>
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 dark-mode"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="add-buttons">
            <button onClick={handleOpenBudgetForm}>Add Budget</button>
            <button onClick={handleOpenExpenseForm}>Add Expense</button>
          </div>
          {budgets.map((budget) => {
            return <BudgetCard darkMode={darkMode} budget={budget} />;
          })}
        </div>
      </div>
      <AddBudgetModal open={open} setOpen={setOpen} type={modalType} />
    </>
  );
}

export default App;
