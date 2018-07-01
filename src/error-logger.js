const logger = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.log('error occured while dispatching action: ', action.type);
  }
};
export default logger;
