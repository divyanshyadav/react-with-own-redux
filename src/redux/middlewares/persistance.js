import throttle from "lodash/throttle";

const STORE_KEY = "APP_STORE";

export const loadState = (key = STORE_KEY) => {
  try {
    const state = localStorage.getItem(key);
    if (state === null) {
      return undefined;
    }

    return JSON.parse(state);
  } catch {
    return undefined;
  }
};

export const saveState = (state, key = STORE_KEY) => {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (err) {
    console.log(`unable to save state for ${key}`, err);
  }
};

const persistance = (fn = (state) => state, delay) => {
  const saveFn = throttle((state) => {
    saveState(fn(state));
  }, delay);

  return (store) => (next) => (action) => {
    const returnValue = next(action);
    saveFn(store.getState());
    return returnValue;
  };
};

export default persistance;
