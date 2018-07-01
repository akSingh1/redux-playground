export const actionCreator = dispatch => actions => {
  if (actions instanceof Function) {
    return actions(dispatch);
  } else {
    const _actions = {};
    Object.keys(actions).forEach(key => {
      const actionFn = actions[key];
      _actions[key] = (...args) => dispatch(actionFn(...args));
    });
    return _actions;
  }
};
