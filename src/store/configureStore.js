import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}
