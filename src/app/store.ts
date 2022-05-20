import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "../ducks/expenses-slice";
import filterReducer from "../ducks/filter-slice";

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    filter: filterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
