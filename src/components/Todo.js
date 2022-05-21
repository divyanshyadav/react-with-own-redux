export default function Todo({ text, completed, onClick, onClickDelete }) {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none",
        cursor: "pointer"
      }}
    >
      {text}
      <button onClick={onClickDelete}>X</button>
    </li>
  );
}
