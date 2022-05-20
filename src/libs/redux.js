export const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listener = listeners.filter((l) => l !== listener);
    };
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  dispatch({});

  return {
    getState,
    dispatch,
    subscribe
  };
};

export const combineReducers = (reducers) => (state = {}, action) =>
  Object.keys(reducers).reduce((acc, key) => {
    acc[key] = reducers[key](state[key], action);
    return acc;
  }, {});
