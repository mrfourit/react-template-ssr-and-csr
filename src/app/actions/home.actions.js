import { homeConstants } from '../constants';

export function homeTest() {
  return (dispatch) => {
    dispatch({
      type: homeConstants.TEST
    });
  }
}