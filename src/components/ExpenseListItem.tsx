import { useDispatch } from "react-redux";
import { Expense, removeExpense } from "../ducks/expenses-slice";
import moment from "moment";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

interface ExpenseListItemProps extends Expense {}

export default function ExpenseListItem({
  id,
  description,
  amount,
  createdAt,
}: ExpenseListItemProps) {
  const dispatch = useDispatch();
  return (
    <div className="flex space-x-4 items-center w-1/3 justify-between">
      <h3 className="text-lg font-bold">{description}</h3>
      <p>{amount}€</p>
      <p>{moment(createdAt).format("DD-MM-YYYY")}</p>
      <button>
        <Link to={`/edit/${id}`}>
          <FaEdit />
        </Link>
      </button>
      <button
        onClick={() => {
          if (id) {
            dispatch(removeExpense(id));
          }
        }}
      >
        <FaTrash />
      </button>
    </div>
  );
}
