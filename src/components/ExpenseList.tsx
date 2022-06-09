import { useAppSelector } from "../app/hooks";
import { selectExpenses } from "../app/selectors";
import ExpenseListItem from "./ExpenseListItem";

export default function ExpenseList() {
  const expenses = useAppSelector(selectExpenses);
  return (
    <div className="space-y-2 py-4">
      {expenses.map((expenseItem) => {
        return <ExpenseListItem key={expenseItem.id} {...expenseItem} />;
      })}
    </div>
  );
}
