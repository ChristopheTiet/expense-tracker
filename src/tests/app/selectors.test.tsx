import { selectExpenses } from "../../app/selectors";
import { Expense } from "../../ducks/expenses-slice";
import { FilterState } from "../../ducks/filter-slice";

const expenses: Expense[] = [
  {
    id: "1",
    description: "cake",
    note: "",
    amount: 15,
    createdAt: 0,
  },
  {
    id: "2",
    description: "rent",
    note: "",
    amount: 1000,
    createdAt: 1000,
  },
  {
    id: "3",
    description: "computer",
    note: "",
    amount: 2000,
    createdAt: 2000,
  },
];

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
