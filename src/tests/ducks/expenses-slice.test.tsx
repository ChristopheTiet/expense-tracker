import {
  addExpense,
  editExpense,
  removeExpense,
} from "../../ducks/expenses-slice";

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

test('should setup add expense action object with provided values', () => {
    const expense = {
        description: 'Food',
        amount: 30,
        note: '',
        createdAt: 1000
    }
    const action = addExpense(expense);
    expect(action).toEqual({
        type: 'expenses/addExpense',
        payload: {
            ...expense
        }
    })
})