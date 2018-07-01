import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from './redux';
import { Provider } from './react-redux';

import reducer from './reducer';
import loggerMiddleware from './logger';
import errorLoggerMiddleware from './error-logger';
import Counter from './Counter';

import './styles.css';

const store = createStore(
  [reducer],
  undefined,
  applyMiddleware([loggerMiddleware, errorLoggerMiddleware])
);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Provider store={store}>
          <Counter />
        </Provider>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
