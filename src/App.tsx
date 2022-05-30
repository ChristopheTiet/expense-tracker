import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import AppRouter from "./routers/AppRouter";

const App = () => (
  <StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </StrictMode>
);

export default App;
