import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { homeReducers } from './home.reducers.js';
import history from '../history.js';

const rootReducer = combineReducers({
  router: connectRouter(history),
  homeReducers: homeReducers
});

export default rootReducer;
