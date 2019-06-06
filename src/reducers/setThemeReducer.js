/*jshint esversion: 6 */
import { SET_THEME } from '../constants/ActionTypes';

export default function(state = { loading: true }, action) {
  switch (action.type) {
    case SET_THEME:
      return { ...action.data, loading: false }
    default:
      return state
  }
}
