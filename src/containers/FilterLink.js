import { Link, useParams } from "react-router-dom";

function FilterLink({ filter, children }) {
  const { filter: selectedFilter = "all" } = useParams();

  if (filter === selectedFilter) {
    return <strong>{children}</strong>;
  }

  return <Link to={filter === "all" ? "/" : filter}>{children}</Link>;
}

export default FilterLink;
