import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  text: string;
  sortBy: "date" | "amount";
  startDate?: number;
  endDate?: number;
}

const initialState: FilterState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTextFilter: {
      reducer: (state, action: PayloadAction<string>) => {
        action ? (state.text = action.payload) : (state.text = "");
      },
      prepare: (value?: string) => ({ payload: value || "" }),
    },
    sortByAmount(state) {
      state.sortBy = "amount";
    },
    sortByDate(state) {
      state.sortBy = "date";
    },
    setStartDate(state, action: PayloadAction<number>) {
      state.startDate = action.payload;
    },
    setEndDate(state, action: PayloadAction<number>) {
      state.endDate = action.payload;
    },
  },
});

export const {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} = filterSlice.actions;
export default filterSlice.reducer;
