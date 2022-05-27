import React from "react";
import ExpenseForm from "./ExpenseForm";

const AddExpensePage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      description: { value: string };
      note: { value: string };
      amount: { value: number };
      date: { value: Date };
    };

    const description = target.description.value;
    const amount = target.amount.value;
    const date = target.date.value;
    console.log(amount);
  };
  return (
    <div className="p-4">
      <ExpenseForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddExpensePage;
