import { createStore, combineReducers } from "../libs/redux";
import { counter } from "./reducers/counter";
import { todos } from "./reducers/todos";
import { visibilityFilter } from "./reducers/visibilityFilter";

const store = createStore(
  combineReducers({ todos, counter, visibilityFilter })
);

export default store;
