import React from "react";
import { categories } from "../../App";

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
      {categories.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
