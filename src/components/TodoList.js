import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, onTodoDeleteClick, onTodoClick }) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
          onClickDelete={() => onTodoDeleteClick(todo.id)}
        />
      ))}
    </ul>
  );
}
