export const TYPES = { INCREMENT: 'increment', DECREMENT: 'decrement' };

const reducers = {
  [TYPES.INCREMENT]: (state, payload) => {
    const counter = state.counter + payload;
    return {
      ...state,
      counter
    };
  },
  [TYPES.DECREMENT]: (state, payload) => {
    const counter = state.counter - payload;
    return {
      ...state,
      counter
    };
  }
};
export const actions = {
  increment: payload => ({ type: TYPES.INCREMENT, payload }),
  decrement: payload => ({ type: TYPES.DECREMENT, payload })
};
const initialState = {
  counter: 100
};
export default function reducer(state = initialState, { type, payload }) {
  return reducers[type] ? reducers[type](state, payload) : state;
}
