import reducer, {
  addExpense,
  editExpense,
  removeExpense,
} from "../../ducks/expenses-slice";
import expenses from "../fixtures/expenses";

// Actions

test("should setup remove expense action object", () => {
  const action = removeExpense("123abc");
  expect(action).toEqual({
    type: "expenses/removeExpense",
    payload: "123abc",
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense({
    id: "123",
    expense: { description: "", amount: 100, note: "", createdAt: 1000 },
  });
  expect(action).toEqual({
    type: "expenses/editExpense",
    payload: {
      expense: {
        amount: 100,
        createdAt: 1000,
        description: "",
        note: "",
      },
      id: "123",
    },
  });
});

test("should setup add expense action object with provided values", () => {
  const expense = {
    description: "Food",
    amount: 30,
    note: "",
    createdAt: 1000,
  };
  const action = addExpense(expense);
  expect(action).toEqual({
    type: "expenses/addExpense",
    payload: {
      ...expense,
    },
  });
});

// Reducer

test("should remove expense by id", () => {
  expect(reducer(expenses, removeExpense(expenses[1].id))).toEqual([
    expenses[0],
    expenses[2],
  ]);
});

test("should not remove expense if id not found", () => {
  expect(reducer(expenses, removeExpense("undefinedId"))).toEqual(expenses);
});

test("should add expense", () => {
  const expense = {
    description: "hello",
    amount: 10,
    note: "",
    createdAt: 1000,
  };
  expect(reducer(expenses, addExpense(expense))).toEqual([
    ...expenses,
    {
      ...expense,
      id: expect.any(String),
    },
  ]);
});

test("should edit expense by id", () => {
  const editedExpense = {
    id: expenses[0].id,
    description: "editedExpense",
    amount: 100,
    note: "",
    createdAt: 1000,
  };
  expect(
    reducer(
      expenses,
      editExpense({ id: expenses[0].id, expense: editedExpense })
    )
  ).toEqual([editedExpense, expenses[1], expenses[2]]);
});

test("should not edit expense if id not found", () => {
  const editedExpense = {
    id: expenses[0].id,
    description: "editedExpense",
    amount: 100,
    note: "",
    createdAt: 1000,
  };
  expect(
    reducer(
      expenses,
      editExpense({ id: "undefinedId", expense: editedExpense })
    )
  ).toEqual(expenses);
});
