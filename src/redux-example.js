import redux from './redux';
import reducer, { actions } from './reducer';

const initialState = {
  counter: 100
};

const store = redux.createStore([reducer], initialState);

const unSubscribe = store.subscribe(state => {
  console.log('state changed: ', state);
});

store.dispatch(actions.increment(1));
store.dispatch(actions.decrement(1));
unSubscribe();
console.log(store.getState());
store.dispatch(actions.decrement(1));
console.log(store.getState());
