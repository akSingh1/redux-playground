import React from 'react';
import { actions, asyncActions } from './reducer';
import { connect } from './react-redux';

const Counter = props => {
  return (
    <div className="container">
      <h2>
        Counter : {props.counter} {props.hand}
      </h2>
      <div>Sync Actions</div>
      <div className="btn-wrapper">
        <button className="btn increment" onClick={() => props.increment(1)}>
          👍
        </button>
        <button className="btn decrement" onClick={() => props.decrement(1)}>
          👎
        </button>
      </div>
      <div>Async Actions</div>
      <div className="btn-wrapper">
        <button
          className="btn increment"
          onClick={() => props.asyncIncrement(10)}
        >
          👍x(100)
        </button>
        <button
          className="btn decrement"
          onClick={() => props.asyncDecrement(10)}
        >
          👎x(100)
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state, baseProps) => {
  return {
    ...baseProps,
    ...state
  };
};

export default connect(mapStateToProps, { ...asyncActions, ...actions })(
  Counter
);
