import { useCallback } from "react";
import { useParams } from "react-router-dom";
import TodoList from "../components/TodoList";
import { useDispatch, useSelector } from "../libs/react-redux";
import { deleteTodoAction, toggleTodoAction } from "../redux/actions";
import { getVisibleTodos } from "../redux/reducers/todos";

function VisibleTodoList() {
  const dispatch = useDispatch();
  const { filter = "all" } = useParams();

  const selectVisibleTodos = useCallback(
    (state) => getVisibleTodos(state.todos, filter),
    [filter]
  );

  const visibleTodos = useSelector(selectVisibleTodos);

  return (
    <TodoList
      todos={visibleTodos}
      onTodoClick={(id) => dispatch(toggleTodoAction(id))}
      onTodoDeleteClick={(id) => dispatch(deleteTodoAction(id))}
    />
  );
}

export default VisibleTodoList;
