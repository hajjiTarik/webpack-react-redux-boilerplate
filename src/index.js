import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { configStore } from './store';

const store = configStore();
export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <h1>Hello am fucking toto 5 </h1>
      </Provider>
    );
  }
}
ReactDom.render(<App />, document.getElementById('root'));
