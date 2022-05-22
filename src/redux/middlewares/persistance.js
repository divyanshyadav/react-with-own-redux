const persistance = (fn = (state) => state) => (store) => (next) => (
  action
) => {
  fn(store.getState());
  return next(action);
};

export default persistance;
