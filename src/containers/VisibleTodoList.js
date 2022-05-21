import TodoList from "../components/TodoList";
import { useDispatch, useSelector } from "../libs/react-redux";
import { deleteTodoAction, toggleTodoAction } from "../redux/actions";
import { selectVisibleTodos } from "../redux/selectors";

function VisibleTodoList() {
  const dispatch = useDispatch();
  const visibleTods = useSelector(selectVisibleTodos);

  return (
    <TodoList
      todos={visibleTods}
      onTodoClick={(id) => dispatch(toggleTodoAction(id))}
      onTodoDeleteClick={(id) => dispatch(deleteTodoAction(id))}
    />
  );
}

export default VisibleTodoList;
