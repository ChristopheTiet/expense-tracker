import ExpenseList from "./ExpenseList";
import { useDispatch } from "react-redux";
import { addExpense } from "../ducks/expenses-slice";
import ExpenseListFilter from "./ExpenseListFilter";

export default function ExpenseDashboardPage() {
  const dispatch = useDispatch();
  dispatch(
    addExpense({
      description: "test1",
      note: "note",
      amount: 50,
      createdAt: 100,
    })
  );
  dispatch(
    addExpense({
      description: "test2",
      note: "note2",
      amount: 100,
      createdAt: 50,
    })
  );
  dispatch(
    addExpense({
      description: "test3",
      note: "note3",
      amount: 150,
      createdAt: 0,
    })
  );
  return (
    <div className="p-4">
      <ExpenseListFilter />
      <ExpenseList />
    </div>
  );
}
