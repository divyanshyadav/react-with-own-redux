import { createStore, combineReducers, applyMiddleware } from "../libs/redux";
import logger from "./middlewares/logger";
import promise from "./middlewares/promise";
import persistance, { loadState } from "./middlewares/persistance";
import todos from "./reducers/todos";

export function configureStore() {
  const initialState = loadState();
  const middlewares = [promise];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
  }

  middlewares.push(persistance((state) => ({ todos: state.todos }), 500));

  const store = createStore(
    combineReducers({ todos }),
    initialState,
    applyMiddleware(...middlewares)
  );

  return store;
}
