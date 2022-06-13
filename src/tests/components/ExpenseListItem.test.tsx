import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import ExpenseListItem from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";
import { store } from "../../app/store";
import { BrowserRouter } from "react-router-dom";

test("should render ExpenseListItem correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <ExpenseListItem {...expenses[0]} />
        </Provider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
