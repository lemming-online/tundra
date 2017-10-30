import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.devToolsExtension() && window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f,
    ),
  );
}
