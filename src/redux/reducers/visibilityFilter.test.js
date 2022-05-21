import deepFreeze from "deep-freeze";
import { visibilityFilter } from "./visibilityFilter";

describe("visibility filter", () => {
  test("set visibility filter", () => {
    const beforeState = "";
    const action = {
      type: "SET_VISIBILITY_FILTER",
      filter: "active"
    };
    const stateAfter = "active";

    deepFreeze(beforeState);
    deepFreeze(action);

    expect(visibilityFilter(beforeState, action)).toEqual(stateAfter);
  });
});
