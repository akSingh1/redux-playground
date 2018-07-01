export default store => next => actionCreator => {
  if (actionCreator instanceof Function) {
    actionCreator(action => next(action));
  } else {
    return next(actionCreator);
  }
};
