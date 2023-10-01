import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState(2021);
  const yearSelectedHandler = (year) => {
    console.log(year);
    setSelectedYear(year);
  };

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter onYearSelected={yearSelectedHandler} />
        {expenses
          .filter((expense) => expense.date.getFullYear() == selectedYear)
          .map((expense, i) => (
            <ExpenseItem key={i} {...expense} />
          ))}
      </Card>
    </>
  );
}
