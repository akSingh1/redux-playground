function createStore(reducers, initailState, applyMiddlewareFn) {
  let state = initailState;
  let listeners = [];
  const store = {
    dispatch: action => {
      state = reducers.reduce((_state, reducer) => {
        const reducedState = reducer(_state, action);
        listeners.forEach(listener => listener(reducedState));
        return reducedState;
      }, state);
    },
    getState: () => {
      return state;
    },
    subscribe: listener => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter(l => l !== listener);
      };
    }
  };
  return applyMiddlewareFn(store);
}

export default createStore;
