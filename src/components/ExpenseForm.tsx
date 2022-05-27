interface ExpenseFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

export default function ExpenseForm({ onSubmit }: ExpenseFormProps) {
  return (
    <form
      onSubmit={(e) => {
        // e.preventDefault();
        // const target = e.target as typeof e.target & {
        //   description: { value: string };
        //   note: { value: string };
        //   amount: { value: number };
        //   date: { value: Date };
        // };

        // const description = target.description.value;
        // const amount = target.amount.value;
        // const date = target.date.value;
        onSubmit(e);
      }}
    >
      <div className="flex space-x-2 items-baseline">
        <input
          type="text"
          name="description"
          className="form-control block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="description"
        />
        <input
          type="number"
          name="amount"
          step={0.01}
          className="form-control  block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="amount"
        />
        <textarea
          name="note"
          rows={1}
          className="form-control align-center items-center block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Note"
        />
        <input
          type="date"
          name="date"
          className="form-control  block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
        <button
          type="submit"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-2.5 mb-6 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Add expense
        </button>
      </div>
    </form>
  );
}
