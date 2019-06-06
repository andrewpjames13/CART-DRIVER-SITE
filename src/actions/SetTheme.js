import { SET_THEME } from '../constants/ActionTypes';

function setThemeSuccess(data) {
  return { type: SET_THEME, data };
}

export default function setTheme(data) {
  return (dispatch, getState) => {
    dispatch(setThemeSuccess(data));
  }
}
