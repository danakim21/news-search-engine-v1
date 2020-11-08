import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import newsReducer from './newsReducer';

const store = createStore(
  newsReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
