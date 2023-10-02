import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onSaveNewExpense }) => {
  const [isEnteringExpense, setIsEnteringExpense] = useState(false);

  const saveExpenseDataHandler = (expenseData) => {
    const newExpense = { ...expenseData, id: Math.random().toString() };
    setIsEnteringExpense(false);
    onSaveNewExpense(newExpense);
  };

  const cancelEnteringExpenseHandler = () => {
    setIsEnteringExpense(false);
  };

  return (
    <div className="new-expense">
      {isEnteringExpense ? (
        <ExpenseForm
          onCancelEnteringExpense={cancelEnteringExpenseHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={() => setIsEnteringExpense(true)}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
