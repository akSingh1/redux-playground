export const TYPES = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  ROTATEHAND: 'rotateHand'
};
const HANDS = ['👆', '👉', '👇', '👈'];
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
  },
  [TYPES.ROTATEHAND]: (state, payload) => {
    const hand = payload;
    return {
      ...state,
      hand
    };
  }
};
export const actions = {
  increment: payload => ({ type: TYPES.INCREMENT, payload }),
  decrement: payload => ({ type: TYPES.DECREMENT, payload }),
  rotateHand: payload => ({ type: TYPES.ROTATEHAND, payload })
};

export const asyncActions = {
  asyncIncrement: payload => dispatch => {
    let i = 12;
    const id = setInterval(() => {
      dispatch(actions.increment(payload));
      dispatch(actions.rotateHand(HANDS[i % 4]));
      if (i > 1) {
        i--;
      } else {
        clearTimeout(id);
      }
    }, 250);
  },
  asyncDecrement: payload => dispatch => {
    let i = 1;
    const id = setInterval(() => {
      dispatch(actions.decrement(payload));
      dispatch(actions.rotateHand(HANDS[i % 4]));
      if (i < 12) {
        i++;
      } else {
        clearTimeout(id);
      }
    }, 250);
  }
};
const initialState = {
  counter: 400,
  hand: HANDS[0]
};
export default function reducer(state = initialState, { type, payload }) {
  return reducers[type] ? reducers[type](state, payload) : state;
}
