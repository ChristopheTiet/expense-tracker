import renderer from "react-test-renderer";
import ExpenseDashboardPage from "../../components/ExpenseDashboardPage";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import { Provider } from "react-redux";

test("should render ExpenseDashBoard correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <ExpenseDashboardPage />
        </Provider>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
