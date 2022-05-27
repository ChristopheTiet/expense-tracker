import { useAppSelector } from "../app/hooks";
import { selecteExpenses } from "../app/selectors";
import ExpenseListItem from "./ExpenseListItem";

export default function ExpenseList() {
  const expenses = useAppSelector(selecteExpenses);
  return (
    <>
      <h1>Expense List</h1>
      {expenses.map((expenseItem) => {
        return <ExpenseListItem key={expenseItem.id} {...expenseItem} />;
      })}
    </>
  );
}
