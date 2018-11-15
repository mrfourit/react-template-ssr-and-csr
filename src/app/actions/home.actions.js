import { push } from 'react-router-redux';
import { homeConstants } from '../constants';
import { testAPI } from '../api/test';

export function homeTest() {
  return (dispatch) => {
    dispatch(push('/about'));
    dispatch({
      type: homeConstants.TEST
    });

    return testAPI.testPost({ 'asd': 324 }).then(
      (res) => {
        console.log("Success");
      },
      () => {
        console.log("false");
      }
    );
  }
}