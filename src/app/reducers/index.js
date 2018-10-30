import { combineReducers } from 'redux';
import { homeReducers } from './home.reducers.js';

const rootReducer = combineReducers({
  homeReducers: homeReducers
});

export default rootReducer;
