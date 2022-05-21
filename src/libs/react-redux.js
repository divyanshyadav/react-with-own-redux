import React, { useContext, useEffect, useState } from "react";

const ReduxContext = React.createContext({});

export const withStore = (Component) => {
  class MyClass extends React.Component {
    componentDidMount() {
      const store = this.context;
      this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      const store = this.context;
      return (
        <Component
          {...this.props}
          dispatch={store.dispatch}
          state={store.getState()}
        />
      );
    }
  }

  MyClass.contextType = ReduxContext;

  return MyClass;
};

export function useDispatch() {
  const { dispatch } = useContext(ReduxContext);
  return dispatch;
}

export function useSelector(selectorFn) {
  const { getState, subscribe } = useContext(ReduxContext);
  const [state, setState] = useState(() => selectorFn(getState()));

  useEffect(() => {
    const unsubscribe = subscribe(() => setState(selectorFn(getState())));
    return () => unsubscribe();
  }, [subscribe, getState, selectorFn]);

  return state;
}

export const Provider = ({ store, children }) => (
  <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
);
