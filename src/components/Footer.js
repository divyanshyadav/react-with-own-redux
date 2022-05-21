import FilterLink from "../containers/FilterLink";

export function Footer() {
  return (
    <div>
      <FilterLink filter="all">All</FilterLink>{" "}
      <FilterLink filter="active">Active</FilterLink>{" "}
      <FilterLink filter="completed">Completed</FilterLink>
    </div>
  );
}
