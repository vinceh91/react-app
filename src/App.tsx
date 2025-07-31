import { useState } from "react";
import Button from "./components/Button/Button";
import DismissingAlert from "./components/DismissingAlert";
import Like from "./components/Like";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import { Expense } from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Burger", amount: 10, category: "Food" },
    { id: 2, description: "Phone", amount: 10, category: "Tech" },
    { id: 3, description: "Table", amount: 10, category: "Home" },
  ]);
  const onDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };
  return (
    <div>
      <ExpenseList expenses={expenses} onDelete={onDelete} />
    </div>
  );
}
export default App;
