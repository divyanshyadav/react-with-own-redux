import throttle from "lodash/throttle";
import { loadState, saveState } from "../libs/local-storage";
import { createStore, combineReducers } from "../libs/redux";
import { todos } from "./reducers/todos";

export function configureStore() {
  const initialState = loadState();
  const store = createStore(combineReducers({ todos }), initialState);

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
