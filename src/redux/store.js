import { createStore, combineReducers } from "../libs/redux";
import { todos } from "./reducers/todos";
import { visibilityFilter } from "./reducers/visibilityFilter";

const store = createStore(combineReducers({ todos, visibilityFilter }));

export default store;
