import { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState("2021");
  const yearSelectedHandler = (year) => {
    console.log(year);
    setSelectedYear(year);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onYearSelected={yearSelectedHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
}
