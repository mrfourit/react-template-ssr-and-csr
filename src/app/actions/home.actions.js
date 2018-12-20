import { homeConstants } from '../constants';
import { testAPI } from '../api/test';
import asyncAction from '../lib/asyncAction';

class HomeActions {
  homeTestRenderServer(data) {
    return (dispatch) => {
      dispatch({
        type: homeConstants.TEST
      });

      asyncAction.wrapperAction(async () => {
        await testAPI.testPost({ 'asd': 324 }).then(
          (res) => {
            dispatch(this.testSuccess(data));
          },
          () => {
            dispatch(this.testFail());
          }
        );
      });
    }
  }

  testSuccess(data) {
    return (dispatch) => {
      dispatch({
        type: homeConstants.TEST_SUCCESS,
        data: "SUCCESS" + data
      });
    }
  }

  testFail() {
    return (dispatch) => {
      dispatch({
        type: homeConstants.TEST_FAIL,
        data: "FAIL"
      });
    }
  }
}

export default HomeActions;
