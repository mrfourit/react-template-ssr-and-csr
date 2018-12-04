import { homeConstants } from '../constants/index.js';

const initState = {
  isTest: false,
  data: ''
};

export function homeReducers(state = initState, action) {
  switch (action.type) {
    case homeConstants.TEST:
      return {
        ...state,
        isTest: true
      };

    case homeConstants.TEST_SUCCESS:
      console.log("HOME REDUCER SUCCESS", (new Date).getTime());
      return {
        ...state,
        data: action.data,
        isTest: false
      };

    case homeConstants.TEST_FAIL:
      console.log("HOME REDUCER FAIL", (new Date).getTime());
      return {
        ...state,
        data: action.data,
        isTest: false
      };

    default:
      return state;
  }
}
