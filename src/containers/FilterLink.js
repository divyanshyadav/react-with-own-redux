import { withStore } from "../libs/react-redux";
import Link from "../components/Link";
import { setVisibilityFilterAction } from "../redux/actions";

function FilterLink({ filter, children, dispatch, state }) {
  const { visibilityFilter } = state;

  return (
    <Link
      active={filter === visibilityFilter}
      onClick={(e) => {
        e.preventDefault();
        dispatch(setVisibilityFilterAction(filter));
      }}
    >
      {children}
    </Link>
  );
}

export default withStore(FilterLink);
