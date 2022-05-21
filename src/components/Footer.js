import FilterLink from "../containers/FilterLink";

export function Footer() {
  return (
    <div>
      <FilterLink filter="SHOW_ALL">All</FilterLink>
      <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
      <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    </div>
  );
}
