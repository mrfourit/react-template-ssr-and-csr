import { homeConstants } from '../constants/index.js';

const initState = {
  isTest: false,
  data: ''
};

export function homeReducers(state = initState, action) {
  switch(action.type) {
    case homeConstants.TEST:
      return {
        ...state,
        isTest: !state.isTest
      };

    case homeConstants.TEST_SUCCESS:
    console.log("HOME REDUCER SUCCESS");
      return {
        ...state,
        data: action.data
      };

    case homeConstants.TEST_FAIL:
    console.log("HOME REDUCER FAIL");
      return {
        ...state,
        data: action.data
      };
    
    default:
      return state;
  }
}
