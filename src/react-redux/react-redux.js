import React from 'react';
import { actionCreator } from './utils';
const Context = React.createContext();
const ReduxConsumer = Context.Consumer;
const ReduxProvider = Context.Provider;

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    props.store.dispatch({ type: '@INIT' });
    this.state = {
      store: {
        dispatch: props.store.dispatch,
        state: props.store.getState()
      }
    };
  }
  unsubscribe = null;
  componentDidMount() {
    const { subscribe } = this.props.store;
    this.unsubscribe = subscribe(state => {
      this.setState({ store: { state, dispatch: this.props.store.dispatch } });
    });
  }
  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
  render() {
    return (
      <ReduxProvider value={this.state.store}>
        {this.props.children}
      </ReduxProvider>
    );
  }
}
export const connect = (
  propsMapper,
  actionsMapper
) => BaseComponent => baseProps => (
  <ReduxConsumer>
    {({ state, dispatch }) => {
      const props = propsMapper(state, baseProps);
      const actions = actionCreator(dispatch)(actionsMapper);
      return <BaseComponent {...props} {...actions} />;
    }}
  </ReduxConsumer>
);

/**
 * connect in more simpler format
 */
// export function connect(propsMapper, actionsMapper) {
//   return BaseComponent => {
//     class WrapperComponent extends React.Component {
//       render() {
//         const baseProps = this.props;
//         return (
//           <Consumer>
//             {({ state, dispatch }) => {
//               const props = propsMapper(state, baseProps);
//               const actions = actionCreator(dispatch)(actionsMapper);
//               return <BaseComponent {...props} {...actions} />;
//             }}
//           </Consumer>
//         );
//       }
//     }
//     WrapperComponent.displayName = `connect${BaseComponent.name}`
//     return WrapperComponent;
//   };
// }
