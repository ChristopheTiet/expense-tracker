import reducer, {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../../ducks/filter-slice";

// Actions test
test("should generate set start date action", () => {
  const action = setStartDate(0);
  expect(action).toEqual({
    type: "filter/setStartDate",
    payload: 0,
  });
});

test("should generate set end date action", () => {
  const action = setEndDate(0);
  expect(action).toEqual({
    type: "filter/setEndDate",
    payload: 0,
  });
});

test("should generate text filter action with provided value", () => {
  const action = setTextFilter("rent");
  expect(action).toEqual({
    type: "filter/setTextFilter",
    payload: "rent",
  });
});

test("should generate text filter action with default value", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "filter/setTextFilter",
    payload: "",
  });
});

test("should generate sort by amount action", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "filter/sortByAmount",
  });
});

test("should generate sort by date action", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "filter/sortByDate",
  });
});

// Reducer test

test("should return the initial state", () => {
  expect(
    reducer(undefined, {
      type: undefined,
    })
  ).toEqual({
    endDate: undefined,
    sortBy: "date",
    startDate: undefined,
    text: "",
  });
});

test("should set sort by date", () => {
  expect(reducer(undefined, sortByDate())).toEqual({
    endDate: undefined,
    sortBy: "date",
    startDate: undefined,
    text: "",
  });
});

test("should set sort by amount", () => {
  expect(reducer(undefined, sortByAmount())).toEqual({
    endDate: undefined,
    sortBy: "amount",
    startDate: undefined,
    text: "",
  });
});

test("should set start date", () => {
  expect(reducer(undefined, setStartDate(1000))).toEqual({
    endDate: undefined,
    sortBy: "date",
    startDate: 1000,
    text: "",
  });
});

test("should set end date", () => {
  expect(reducer(undefined, setEndDate(1000))).toEqual({
    endDate: 1000,
    sortBy: "date",
    startDate: undefined,
    text: "",
  });
});

test("should set text filter", () => {
  expect(reducer(undefined, setTextFilter("hello"))).toEqual({
    endDate: undefined,
    sortBy: "date",
    startDate: undefined,
    text: "hello",
  });
});
