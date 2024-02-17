/* 
  createStore has been deprecated and the recommended way to do it is with configureStore() from RTK
  I'm doing this just for experimenting with Redux without RTK 
*/
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import reducers from './reducers';

export const store = createStore(reducers, {}, applyMiddleware(thunk));
