import { useDispatch } from "react-redux";
import { useAppSelector } from "../app/hooks";
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../ducks/filter-slice";

export default function ExpenseListFilter() {
  const filterState = useAppSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <div className="flex space-x-3">
      <input
        type="text"
        className="text-base font-normal border-black border-2 rounded pl-5"
        value={filterState.text}
        placeholder="filter"
        onChange={(e) => {
          dispatch(setTextFilter(e.target.value));
        }}
      />
      <select
        className="
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border-2 border-solid border-gray-300
        rounded
        transition
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="order by amount or date"
        value={filterState.sortBy}
        onChange={(e) => {
          e.target.value === "amount"
            ? dispatch(sortByAmount())
            : dispatch(sortByDate());
        }}
      >
        <option value="amount">amount</option>
        <option value="date">date</option>
      </select>

      <div>
        From:{" "}
        <input
          onChange={(e) => dispatch(setStartDate(e.target.valueAsNumber))}
          type="date"
          className="
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border-2 border-solid border-gray-300
        rounded
        transition
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div>
        To:{" "}
        <input
          onChange={(e) => dispatch(setEndDate(e.target.valueAsNumber))}
          type="date"
          className="
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border-2 border-solid border-gray-300
        rounded
        transition
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
    </div>
  );
}
