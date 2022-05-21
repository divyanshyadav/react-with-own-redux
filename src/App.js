import "./styles.css";

import { Footer } from "./components/Footer";
import VisibleTodoList from "./containers/VisibleTodoList";
import AddTodo from "./containers/AddTodo";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
