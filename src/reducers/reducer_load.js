/*jshint esversion: 6 */
import { LOAD } from '../constants/ActionTypes';

export default function(state = [], action) {
  switch (action.type) {
    case LOAD:
      return {
        data: action.data
      }
    default:
      return state
  }
}
