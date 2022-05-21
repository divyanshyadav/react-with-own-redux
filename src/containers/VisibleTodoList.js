import TodoList from "../components/TodoList";
import { useDispatch, useSelector } from "../libs/react-redux";

function selectVisibleTodos(state) {
  const { todos, visibilityFilter } = state;

  switch (visibilityFilter) {
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

function VisibleTodoList() {
  const dispatch = useDispatch();
  const visibleTods = useSelector(selectVisibleTodos);

  return (
    <TodoList
      todos={visibleTods}
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

export default VisibleTodoList;
