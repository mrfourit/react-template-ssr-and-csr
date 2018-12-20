import { homeConstants } from '../constants';
import { testAPI } from '../api/test';
import asyncAction from '../lib/asyncAction';

export function homeTestRenderServer(data) {
  return (dispatch) => {
    dispatch({
      type: homeConstants.TEST
    });

    asyncAction.wrapperAction(async () => {
      await testAPI.testPost({ 'asd': 324 }).then(
        (res) => {
          dispatch({
            type: homeConstants.TEST_SUCCESS,
            data: "SUCCESS" + data
          });
        },
        () => {
          dispatch({
            type: homeConstants.TEST_FAIL,
            data: "FAIL" + data
          });
        }
      );
    });
  }
}
