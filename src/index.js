import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";
import { Provider } from "./libs/react-redux";
import { configureStore } from "./redux/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = configureStore();

root.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Route path="/:filter?">
          <App />
        </Route>
      </Router>
    </Provider>
  </StrictMode>
);
