import renderer from "react-test-renderer";
import Header from "../../components/Header";
import { BrowserRouter } from "react-router-dom";

test("should render Header correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
