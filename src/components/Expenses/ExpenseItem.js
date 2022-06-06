import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTile] = useState(props.title);

  const clickHandler = () => {
    setTile("updated!!!!");
    console.log("clicked!!!!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {title}</h2>
        <div className="expense-item__price"> {props.amount}</div>
      </div>
      <button onClick={clickHandler}>change item</button>
    </Card>
  );
}

export default ExpenseItem;
