import React from "react";
import { withStore } from "../libs/react-redux";
import store from "../redux/store";

function AddTodo({ dispatch }) {
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

export default withStore(store)(AddTodo);
