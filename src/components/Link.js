export default function Link({ active, children, onClick }) {
  if (active) return <span>{children}</span>;

  return <button onClick={onClick}>{children}</button>;
}
