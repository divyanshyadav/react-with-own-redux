import { combineReducers } from "../../libs/redux";
import todo from "./todo";

const byId = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TODO":
    case "TOGGLE_TODO":
      return {
        ...state,
        [action.id]: todo(state[action.id], action)
      };
    case "DELETE_TODO":
      return Object.entries(state).reduce((acc, [id, todo]) => {
        if (action.id === id) return acc;
        acc[id] = todo;
        return acc;
      }, {});
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.id];
    case "DELETE_TODO":
      return state.filter((id) => id !== action.id);
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  allIds
});

function getAllTodos(state) {
  return state.allIds.map((id) => state.byId[id]);
}

export function getVisibleTodos(state, filter) {
  const todos = getAllTodos(state);

  switch (filter) {
    case "all":
      return todos;
    case "active":
      return todos.filter((t) => !t.completed);
    case "completed":
      return todos.filter((t) => t.completed);
    default:
      throw new Error("unknown filter");
  }
}
