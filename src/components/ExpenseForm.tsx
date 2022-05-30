import { Expense } from "../ducks/expenses-slice";
import moment from "moment";

interface ExpenseFormProps {
  expense?: Expense;
  onSubmit: (e: React.FormEvent) => void;
}

export default function ExpenseForm({ onSubmit, expense }: ExpenseFormProps) {
  return (
    <form
      onSubmit={(e) => {
        onSubmit(e);
      }}
    >
      <div className="flex space-x-2 items-baseline">
        <input
          type="text"
          name="description"
          required
          className="form-control block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="description"
          defaultValue={expense ? expense.description : ""}
        />
        <input
          type="number"
          name="amount"
          required
          step={0.01}
          className="form-control  block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="amount"
          defaultValue={expense ? expense.amount : ""}
        />
        <textarea
          name="note"
          rows={1}
          className="form-control align-center items-center block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Note"
          defaultValue={expense ? expense.note : ""}
        />
        <input
          type="date"
          name="date"
          className="form-control align-center items-center block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          defaultValue={
            expense ? moment(expense.createdAt).format("YYYY-MM-DD") : ""
          }
        />
        <button
          type="submit"
          className="inline-block px-6 py-2.5 mb-6 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          {expense ? "Edit Expense" : "Add expense"}
        </button>
      </div>
    </form>
  );
}
