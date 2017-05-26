import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation title="navigation" />
      </Provider>
    );
  }
}
ReactDom.render(<App />, document.getElementById('root'));
