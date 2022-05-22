import throttle from "lodash/throttle";
import { loadState, saveState } from "../libs/local-storage";
import { createStore, combineReducers, applyMiddleware } from "../libs/redux";
import logger from "./middlewares/logger";
import promise from "./middlewares/promise";
import persistance from "./middlewares/persistance";
import todos from "./reducers/todos";

export function configureStore() {
  const initialState = loadState();
  const middlewares = [promise];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
  }

  // middlewares.push(
  //   persistance(throttle((state) => saveState({ todos: state.todos }), 100))
  // );

  const store = createStore(
    combineReducers({ todos }),
    initialState,
    applyMiddleware(...middlewares)
  );

  return store;
}
