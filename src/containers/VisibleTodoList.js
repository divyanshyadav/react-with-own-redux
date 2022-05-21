import { useParams } from "react-router-dom";
import TodoList from "../components/TodoList";
import { useDispatch, useSelector } from "../libs/react-redux";
import { deleteTodoAction, toggleTodoAction } from "../redux/actions";

function getVisibleTodos(todos, filter) {
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

function VisibleTodoList() {
  const dispatch = useDispatch();
  const { filter = "all" } = useParams();
  const todos = useSelector((state) => state.todos);
  const visibleTodos = getVisibleTodos(todos, filter);

  return (
    <TodoList
      todos={visibleTodos}
      onTodoClick={(id) => dispatch(toggleTodoAction(id))}
      onTodoDeleteClick={(id) => dispatch(deleteTodoAction(id))}
    />
  );
}

export default VisibleTodoList;
