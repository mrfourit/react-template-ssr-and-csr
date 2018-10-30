import { homeConstants } from '../constants/index.js';

const initState = {
  isTest: false
};

export function homeReducers(state = initState, action) {
  switch(action.type) {
    case homeConstants.TEST:
      return {
        ...state,
        isTest: !state.isTest
      };
    
    default:
      return state;
  }
}
