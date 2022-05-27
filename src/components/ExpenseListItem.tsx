import { useDispatch } from "react-redux";
import { Expense, removeExpense } from "../ducks/expenses-slice";

interface ExpenseListItemProps extends Expense {}

export default function ExpenseListItem({
  id,
  description,
  amount,
  createdAt,
}: ExpenseListItemProps) {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{description}</h3>
      <p>
        {amount} {createdAt}
      </p>
      <button
        onClick={() => {
          if (id) {
            dispatch(removeExpense(id));
          }
        }}
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Remove
      </button>
    </div>
  );
}
