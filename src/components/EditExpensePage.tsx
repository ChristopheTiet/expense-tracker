import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { editExpense } from "../ducks/expenses-slice";
import ExpenseForm from "./ExpenseForm";

const EditExpensePage = () => {
  let { id } = useParams();
  const dispatch = useAppDispatch();
  const expense = useAppSelector(({ expenses }) => {
    return expenses.find((expense) => expense.id === id);
  });
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
    const expenseToEdit = {
      description,
      amount,
      createdAt: date,
      note,
    };
    if (id) {
      dispatch(editExpense({ id, expense: expenseToEdit }));
      navigate("/");
    }
  };
  return (
    <div className="p-4">
      <ExpenseForm expense={expense} onSubmit={handleSubmit} />
    </div>
  );
};
export default EditExpensePage;
