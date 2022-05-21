import React from "react";
import { useDispatch } from "../libs/react-redux";

function AddTodo() {
  const dispatch = useDispatch();
  const textFieldRef = React.useRef();

  return (
    <div>
      <input ref={textFieldRef} />
      <button
        onClick={() => {
          dispatch({
            type: "ADD_TODO",
            id: Date.now().toString(),
            text: textFieldRef.current.value
          });

          textFieldRef.current.value = "";
        }}
      >
        Add todo
      </button>
    </div>
  );
}

export default AddTodo;
