import "./styles.css";

import { withStore } from "./libs/react-redux";
import store from "./redux/store";
import Counter from "./components/Counter";
import Todos from "./components/Todos";

function App({ state, dispatch }) {
  return (
    <div className="App">
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <Counter
        value={state.counter}
        onClickIncrement={() => dispatch({ type: "INCREMENT" })}
        onClickDecrement={() => dispatch({ type: "DECREMENT" })}
      />
      <Todos
        todos={state.todos}
        onClickAddTodo={(text) => {
          dispatch({
            type: "ADD_TODO",
            id: Date.now(),
            text
          });
        }}
        onClickDeleteTodo={(id) =>
          dispatch({
            type: "DELETE_TODO",
            id
          })
        }
      />
    </div>
  );
}

export default withStore(store)(App);
