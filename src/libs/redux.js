export const createStore = (reducer, initialState = {}) => {
  let state = initialState;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listener = listeners.filter((l) => l !== listener);
    };
  };

  const dispatch = (action) => {
    console.log(action);
    state = reducer(state, action);
    console.log(state);
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
