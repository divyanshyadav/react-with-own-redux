import store from "../redux/store";
import { withStore } from "../libs/react-redux";
import Link from "../components/Link";

function FilterLink({ state, dispatch, filter, children }) {
  return (
    <Link
      active={filter === state.visibilityFilter}
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

export default withStore(store)(FilterLink);
