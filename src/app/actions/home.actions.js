import { homeConstants } from '../constants';
import { testAPI } from '../api/test';

export function homeTest() {
  return (dispatch) => {
    dispatch({
      type: homeConstants.TEST
    });

    return testAPI.testPost({ 'asd': 324 }).then(
      (res) => {
        dispatch(testSuccess());
      },
      () => {
        dispatch(testFail());
      }
    );
  }
}

function testSuccess() {
  return (dispatch) => {
    dispatch({
      type: homeConstants.TEST_SUCCESS,
      data: "SUCCESS"
    });
  }
}

function testFail() {
  return (dispatch) => {
    dispatch({
      type: homeConstants.TEST_FAIL,
      data: "FAIL"
    });
  }
}