export default function Counter({ value, onClickIncrement, onClickDecrement }) {
  return (
    <div>
      <button onClick={onClickIncrement}>+</button>
      <div
        style={{
          display: "inline-block",
          margin: "10px"
        }}
      >
        {value}
      </div>
      <button onClick={onClickDecrement}>-</button>
    </div>
  );
}
