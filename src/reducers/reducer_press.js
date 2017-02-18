/*jshint esversion: 6 */
import { FETCH_DATA_SUCCESS } from '../constants/ActionTypes';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return action.payload.press;
    default:
      return state;
  }
}
