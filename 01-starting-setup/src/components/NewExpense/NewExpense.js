import React from "react";
import "./ExpenseForm.css";

const NewExpense = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
      </div>
    </form>
  );
};
export default NewExpense;
