import React from "react";
import { useDispatch } from "../libs/react-redux";
import { addTodoAction } from "../redux/actions";

const delay = (sec) => new Promise((res, rej) => setTimeout(res, sec));

function AddTodo() {
  const dispatch = useDispatch();
  const textFieldRef = React.useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // dispatch(addTodoAction(textFieldRef.current.value));
        const value = textFieldRef.current.value;
        dispatch(delay(500).then(() => addTodoAction(value)));
        textFieldRef.current.value = "";
      }}
    >
      <input ref={textFieldRef} />
      <button type="submit">Add todo</button>
    </form>
  );
}

export default AddTodo;
