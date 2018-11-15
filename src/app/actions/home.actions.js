import { homeConstants } from '../constants';
import { testAPI } from '../api/test';

export function homeTest() {
  return (dispatch) => {
    dispatch({
      type: homeConstants.TEST
    });

    return testAPI.testPost({ 'asd': 324 }).then(
      async (res) => {
        await testSuccess();
      },
      async () => {
        await testFail();
      }
    );
  }
}

function testSuccess() {
  console.log("Success");
}

function testFail() {
  console.log("fail");
}