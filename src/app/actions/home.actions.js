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
        console.log("ASYNC FUNCTION Home action");
        await testAPI.testPost({ 'asd': 324 }).then(
          (res) => {
            console.log("Home action");
            dispatch(this.testSuccess(data));
          },
          () => {
            dispatch(this.testFail());
          }
        );
      });
    }
    // return async (dispatch) => {
    //   await dispatch(asyncAction.wrapperAction(this.homeTest.bind(this, data)));
    // }
  }

  // homeTest(data) {
  //   return (dispatch) => {
  //     dispatch({
  //       type: homeConstants.TEST
  //     });

  //     (async () => {
  //       await testAPI.testPost({ 'asd': 324 }).then(
  //         (res) => {
  //           console.log("Home action");
  //           dispatch(this.testSuccess(data));
  //         },
  //         () => {
  //           dispatch(this.testFail());
  //         }
  //       );
  //     })();
  //   }
  // }


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

// export function homeTest() {
//   return (dispatch) => {
//     dispatch({
//       type: homeConstants.TEST
//     });

//     return testAPI.testPost({ 'asd': 324 }).then(
//       (res) => {
//         dispatch(testSuccess());
//       },
//       () => {
//         dispatch(testFail());
//       }
//     );
//   }
// }

// function testSuccess() {
//   return (dispatch) => {
//     dispatch({
//       type: homeConstants.TEST_SUCCESS,
//       data: "SUCCESS"
//     });
//   }
// }

// function testFail() {
//   return (dispatch) => {
//     dispatch({
//       type: homeConstants.TEST_FAIL,
//       data: "FAIL"
//     });
//   }
// }