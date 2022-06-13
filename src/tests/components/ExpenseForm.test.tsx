import renderer from "react-test-renderer";
import ExpenseForm from "../../components/ExpenseForm";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import { Provider } from "react-redux";
import expenses from "../fixtures/expenses";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("should render ExpenseForm correctly with no data", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <ExpenseForm
            onSubmit={() => {
              console.log("test");
            }}
          />
        </Provider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render ExpenseForm correctly with data", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <ExpenseForm
            onSubmit={() => {
              console.log("test");
            }}
            expense={expenses[0]}
          />
        </Provider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render that description input is invalid if empty form submission", () => {
  render(
    <ExpenseForm
      onSubmit={(e) => {
        e.preventDefault();
      }}
    />
  );
  userEvent.click(screen.getByText("Add expense"));
  expect(screen.getByPlaceholderText("description")).toBeInvalid;
});
