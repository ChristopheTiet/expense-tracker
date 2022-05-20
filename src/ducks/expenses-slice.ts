import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface Expense {
  id: string;
  description: string;
  note: string;
  amount: number;
  createdAt: number;
}

const initialState: Expense[] = [];

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense(state, action: PayloadAction<Expense>) {
      let expense: Expense = { ...action.payload, id: uuidv4() };
      state.push(expense);
    },
    removeExpense(state, action: PayloadAction<string>) {
      return state.filter(({ id }) => id !== action.payload);
    },
    editExpense(
      state,
      action: PayloadAction<{ id: string; expense: Expense }>
    ) {
      return state.map((expense) => {
        if (expense.id === action.payload.id) {
          return {
            ...expense,
            ...action.payload.expense,
          };
        } else {
          return expense;
        }
      });
    },
  },
});

export const { addExpense, removeExpense, editExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
