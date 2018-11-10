import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers/index.js';
import history from '../history.js';

export default function configStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history)
      )
    )
  );
}