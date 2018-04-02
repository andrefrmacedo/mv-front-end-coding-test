import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

export default () => {
  const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
  const store = createStoreWithMiddleware(reducers);

  return store;
}
