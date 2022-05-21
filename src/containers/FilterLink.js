import { withStore } from "../libs/react-redux";
import Link from "../components/Link";

function FilterLink({ filter, children, dispatch, state }) {
  const { visibilityFilter } = state;

  return (
    <Link
      active={filter === visibilityFilter}
      onClick={(e) => {
        e.preventDefault();
        dispatch({
          type: "SET_VISIBILITY_FILTER",
          filter
        });
      }}
    >
      {children}
    </Link>
  );
}

export default withStore(FilterLink);
