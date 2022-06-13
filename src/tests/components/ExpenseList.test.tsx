import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import ExpenseList from "../../components/ExpenseList";
import { store } from "../../app/store";
import { BrowserRouter } from "react-router-dom";

test("should render ExpenseList correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <ExpenseList />
        </Provider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
