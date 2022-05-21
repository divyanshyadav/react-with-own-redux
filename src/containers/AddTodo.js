import React from "react";
import { useDispatch } from "../libs/react-redux";
import { addTodoAction } from "../redux/actions";

function AddTodo() {
  const dispatch = useDispatch();
  const textFieldRef = React.useRef();

  return (
    <div>
      <input ref={textFieldRef} />
      <button
        onClick={() => {
          dispatch(addTodoAction(textFieldRef.current.value));
          textFieldRef.current.value = "";
        }}
      >
        Add todo
      </button>
    </div>
  );
}

export default AddTodo;
