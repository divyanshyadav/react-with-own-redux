import React from "react";

export const withStore = (store) => (Component) => {
  return class extends React.Component {
    componentDidMount() {
      this.unSubscribe = store.subscribe(this.forceUpdate.bind(this));
    }

    componentWillUnmount() {
      this.unSubscribe();
    }

    render() {
      return (
        <Component
          {...this.props}
          dispatch={store.dispatch}
          state={store.getState()}
        />
      );
    }
  };
};
