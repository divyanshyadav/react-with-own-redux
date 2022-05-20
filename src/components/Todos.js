import React from "react";

export default function Todos({ todos, onClickAddTodo, onClickDeleteTodo }) {
  const textFieldRef = React.useRef();

  return (
    <div>
      <input ref={textFieldRef} />
      <button
        onClick={() => {
          onClickAddTodo(textFieldRef.current.value);
          textFieldRef.current.value = "";
        }}
      >
        Add todo
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => onClickDeleteTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
