import deepFreeze from "deep-freeze";
import { todos } from "./todos";

describe("todos reducer", () => {
  test("add todo", () => {
    const stateBefore = [];

    const action = {
      type: "ADD_TODO",
      id: 0,
      text: "homework"
    };

    const stateAfter = [
      {
        id: 0,
        text: "homework",
        completed: false
      }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todos(stateBefore, action)).toEqual(stateAfter);
  });

  test("remove todo at index", () => {
    const stateBefore = [{ id: 0, text: "homework", complted: false }];

    const action = {
      type: "REMOVE_TODO",
      id: 0
    };

    const stateAfter = [];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todos(stateBefore, action)).toEqual(stateAfter);
  });

  test("toggle todo", () => {
    const stateBefore = [{ id: 0, text: "homework", completed: false }];
    const action = { type: "TOGGLE_TODO", id: 0 };
    const stateAfter = [{ id: 0, text: "homework", completed: true }];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todos(stateBefore, action)).toEqual(stateAfter);
  });
});
