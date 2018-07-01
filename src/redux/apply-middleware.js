function applyMiddleware(middlewares) {
  return store => {
    middlewares = middlewares.slice();
    middlewares.reverse();
    let dispatch = store.dispatch;
    middlewares.forEach(middleware => (dispatch = middleware(store)(dispatch)));
    return { ...store, dispatch };
  };
}
export default applyMiddleware;
