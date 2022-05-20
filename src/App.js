import "./styles.css";

import { withStore } from "./libs/react-redux";
import store from "./redux/store";
import Counter from "./components/Counter";

function App({ state, dispatch }) {
  return (
    <div className="App">
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Counter
        value={state.counter}
        onClickIncrement={() => dispatch({ type: "INCREMENT" })}
        onClickDecrement={() => dispatch({ type: "DECREMENT" })}
      />
    </div>
  );
}

export default withStore(store)(App);
