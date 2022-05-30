import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";

export default function ExpenseDashboardPage() {
  return (
    <div className="p-4">
      <ExpenseListFilter />
      <ExpenseList />
    </div>
  );
}
