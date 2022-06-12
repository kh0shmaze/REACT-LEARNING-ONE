import { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No Expenses Found!</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id} //                                   "key" is a special feature
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
