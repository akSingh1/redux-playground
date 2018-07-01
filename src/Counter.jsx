import React from 'react';
import { actions } from './reducer';
import { connect } from './react-redux';

const Counter = props => {
  return (
    <div className="container">
      <div>Counter : {props.counter}</div>
      <div className="btn-wrapper">
        <button className="btn increment" onClick={() => props.increment(1)}>
          +
        </button>
        <button className="btn decrement" onClick={() => props.decrement(1)}>
          -
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
const CounterContainer = connect(mapStateToProps, actions)(Counter);
class Wapper extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return <CounterContainer />;
  }
}
export default Wapper;
