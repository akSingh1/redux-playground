export default (reducers, initailState, enhancer) => {
  let state = initailState;
  let listeners = [];
  const store = {
    dispatch: action => {
      state = reducers.reduce((_state, reducer) => {
        const reducedState = reducer(_state, action);
        return reducedState;
      }, state);
      listeners.forEach(listener => listener(state));
    },
    getState: () => state,
    subscribe: listener => {
      listeners.push(listener);
      return () => (listeners = listeners.filter(l => l !== listener));
    }
  };
  return enhancer ? enhancer(store) : store;
};
