import { createStore, combineReducers } from "../libs/redux";
import { counter } from "./reducers/counter";
import { todos } from "./reducers/todos";

const store = createStore(combineReducers({ todos, counter }));

export default store;
