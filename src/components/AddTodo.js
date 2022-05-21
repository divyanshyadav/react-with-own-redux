import React from "react";

export default function AddTodo({ onAddClick }) {
  const textFieldRef = React.useRef();

  return (
    <div>
      <input ref={textFieldRef} />
      <button
        onClick={() => {
          onAddClick(textFieldRef.current.value);
          textFieldRef.current.value = "";
        }}
      >
        Add todo
      </button>
    </div>
  );
}
