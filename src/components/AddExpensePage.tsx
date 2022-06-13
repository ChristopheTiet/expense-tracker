import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { addExpense } from "../ducks/expenses-slice";
import ExpenseForm from "./ExpenseForm";

const AddExpensePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      description: { value: string };
      note: { value: string };
      amount: { value: number };
      date: { valueAsNumber: number };
    };
    const description = target.description.value;
    const amount = target.amount.value;
    const date = target.date.valueAsNumber;
    const note = target.note.value;
    const expenseToAdd = {
      description,
      amount,
      createdAt: date,
      note,
    };
    dispatch(addExpense(expenseToAdd));
    navigate("/");
  };
  return (
    <div className="p-4">
      <ExpenseForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddExpensePage;
