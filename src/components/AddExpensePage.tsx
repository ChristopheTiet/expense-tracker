import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setTextFilter } from "../ducks/filter-slice";

const AddExpensePage = () => {
  const dispatch = useAppDispatch();
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
