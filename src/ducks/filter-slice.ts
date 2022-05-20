import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
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
    setTextFilter(state, action: PayloadAction<string>) {
      state.text = action.payload;
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
