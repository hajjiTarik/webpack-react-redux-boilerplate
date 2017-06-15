import { createStore } from 'redux';
import reducer from './reducers';

export function configStore() {
  console.log(module.hot);

  const store = createStore(reducer, {});
  return store;
}
