import { selectExpenses } from "../../app/selectors";
import expenses from "../fixtures/expenses";
import { FilterState } from "../../ducks/filter-slice";

test("should filter by startDate", () => {
  const filter: FilterState = {
    text: "",
    sortBy: "date",
    startDate: 1000,
  };
  const result = selectExpenses({ expenses, filter });
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test("should filter by endDate", () => {
  const filter: FilterState = {
    text: "",
    sortBy: "date",
    endDate: 1000,
  };
  const result = selectExpenses({ expenses, filter });
  expect(result).toEqual([expenses[1], expenses[0]]);
});

test("should sort by Date", () => {
  const filter: FilterState = {
    text: "",
    sortBy: "date",
  };
  const result = selectExpenses({ expenses, filter });
  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});

test("should sort by Amount", () => {
  const filter: FilterState = {
    text: "",
    sortBy: "amount",
  };
  const result = selectExpenses({ expenses, filter });
  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});
