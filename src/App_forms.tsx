import { useState } from "react";

import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  const [category, setCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Burger", amount: 10, category: "Food" },
    { id: 2, description: "Phone", amount: 10, category: "Tech" },
    { id: 3, description: "Table", amount: 10, category: "Home" },
  ]);
  const onDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };
  const onSelectedCategory = (category: string) => setCategory(category);
  const visibleExpenses = category
    ? expenses.filter((e) => e.category === category)
    : expenses;

  return (
    <div>
      <div className="mb-3">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectedCategory={onSelectedCategory} />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={onDelete} />
    </div>
  );
}
export default App;
