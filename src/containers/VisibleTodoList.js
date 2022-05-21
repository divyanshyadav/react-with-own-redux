import TodoList from "../components/TodoList";
import { withStore } from "../libs/react-redux";
import store from "../redux/store";

function getTodosByFilter(todos, filter) {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return todos.filter((t) => !t.completed);
    case "SHOW_COMPLETED":
      return todos.filter((t) => t.completed);
    default:
      return todos;
  }
}

function VisibleTodoList({ state, dispatch }) {
  return (
    <TodoList
      todos={getTodosByFilter(state.todos, state.visibilityFilter)}
      onTodoClick={(id) => {
        dispatch({
          type: "TOGGLE_TODO",
          id
        });
      }}
      onTodoDeleteClick={(id) =>
        dispatch({
          type: "DELETE_TODO",
          id
        })
      }
    />
  );
}

export default withStore(store)(VisibleTodoList);
