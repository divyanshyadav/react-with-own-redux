import { v4 } from "node-uuid";

export const addTodoAction = (text) => ({
  type: "ADD_TODO",
  id: v4(),
  text
});

export const toggleTodoAction = (id) => ({ type: "TOGGLE_TODO", id });
export const deleteTodoAction = (id) => ({ type: "DELETE_TODO", id });
