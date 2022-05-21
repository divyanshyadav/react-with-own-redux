export default function Todo({ text, completed, onClick, onClickDelete }) {
  return (
    <li
      style={{
        textDecoration: completed ? "line-through" : "none",
        cursor: "pointer"
      }}
    >
      <span onClick={onClick}>{text}</span>
      <button onClick={onClickDelete}>X</button>
    </li>
  );
}
