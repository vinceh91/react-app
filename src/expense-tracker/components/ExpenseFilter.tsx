import React from "react";

interface Props {
  onSelectedCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectedCategory }: Props) => {
  return (
    <select
      className="select-form"
      onChange={(event) => onSelectedCategory(event.target.value)}
    >
      <option value="">All categories</option>
      <option key="Groceries" value="Groceries">
        Groceries
      </option>
      <option key="Tech" value="Tech">
        Tech
      </option>
      <option key="Home" value="Home">
        Home
      </option>
    </select>
  );
};

export default ExpenseFilter;
