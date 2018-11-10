import { push } from 'react-router-redux';
import { homeConstants } from '../constants';

export function homeTest() {
  return (dispatch) => {
    dispatch(push('/about'));
    dispatch({
      type: homeConstants.TEST
    });
  }
}