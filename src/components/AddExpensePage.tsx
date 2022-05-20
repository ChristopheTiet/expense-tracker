import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setTextFilter } from "../ducks/filter-slice";
import { selecteExpenses } from "../app/selectors";

const AddExpensePage = () => {
  const dispatch = useAppDispatch();
  const expenses = useAppSelector(selecteExpenses);
  console.log("filtered expenses");
  console.log(expenses);
  const handleClick = () => {
    dispatch(setTextFilter("hello"));
  };
  return (
    <div>
      <button onClick={handleClick}> add expense</button>
    </div>
  );
};

export default AddExpensePage;
