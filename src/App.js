import "./styles.css";

import { withStore } from "./libs/react-redux";
import store from "./redux/store";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { Footer } from "./components/Footer";

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

function App({ state, dispatch }) {
  return (
    <div className="App">
      <AddTodo
        onAddClick={(text) => {
          dispatch({
            type: "ADD_TODO",
            id: Date.now().toString(),
            text
          });
        }}
      />
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
      <Footer />
    </div>
  );
}

export default withStore(store)(App);
