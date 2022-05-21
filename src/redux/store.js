import throttle from "lodash/throttle";
import { loadState, saveState } from "../libs/local-storage";
import { createStore, combineReducers, applyMiddleware } from "../libs/redux";
import logger from "./middlewares/logger";
import promise from "./middlewares/promise";
import todos from "./reducers/todos";

export function configureStore() {
  const initialState = loadState();
  const middlewares = [promise];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
  }

  const store = createStore(
    combineReducers({ todos }),
    applyMiddleware(...middlewares),
    initialState
  );

  store.subscribe(
    throttle(
      () =>
        saveState({
          todos: store.getState().todos
        }),
      1000
    )
  );

  return store;
}
