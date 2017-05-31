import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
<<<<<<< HEAD
        <Root />
=======
        <Navigation title="navigation" />
>>>>>>> 82b8c16d6539b0722def605409d79eaae0a8723d
      </Provider>
    );
  }
}
ReactDom.render(<App />, document.getElementById('root'));
