export const createStore = (
  reducer,
  initialState = {},
  dispatchEnhancer = () => {}
) => {
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
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const store = {
    getState,
    dispatch,
    subscribe
  };

  dispatchEnhancer(store);
  dispatch({});

  return store;
};

export const combineReducers =
  (reducers) =>
  (state = {}, action) =>
    Object.keys(reducers).reduce((acc, key) => {
      acc[key] = reducers[key](state[key], action);
      return acc;
    }, {});

export const applyMiddleware =
  (...middlewares) =>
  (store) => {
    middlewares
      .slice()
      .reverse()
      .forEach((middleware) => {
        store.dispatch = middleware(store)(store.dispatch);
      });
  };
