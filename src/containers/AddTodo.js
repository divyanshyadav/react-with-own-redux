import React from "react";
import { useDispatch } from "../libs/react-redux";
import { addTodoAction } from "../redux/actions";

function AddTodo() {
  const dispatch = useDispatch();
  const textFieldRef = React.useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodoAction(textFieldRef.current.value));
        textFieldRef.current.value = "";
      }}
    >
      <input ref={textFieldRef} />
      <button type="submit">Add todo</button>
    </form>
  );
}

export default AddTodo;
