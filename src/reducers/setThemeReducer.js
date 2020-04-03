/*jshint esversion: 6 */
import { SET_THEME } from '../constants/ActionTypes';

const initialState = {
  loading: true,
  black: '#3e4548',
  white: '#f4f3ed',
  primary: '#eb2426',
  secondary: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_THEME:
      return { ...action.data, loading: false }
    default:
      return state
  }
}
