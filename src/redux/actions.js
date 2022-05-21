export const addTodoAction = (text) => ({
  type: "ADD_TODO",
  id: Date.now().toString(),
  text
});

export const setVisibilityFilterAction = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const toggleTodoAction = (id) => ({ type: "TOGGLE_TODO", id });
export const deleteTodoAction = (id) => ({ type: "DELETE_TODO", id });
