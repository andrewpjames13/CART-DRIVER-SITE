/*jshint esversion: 6 */
import { FETCH_DATA_SUCCESS } from '../constants/ActionTypes';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      const menuArray = [
        [action.payload.pizzaMenu, action.payload.antipastiMenu],
        [action.payload.drinksMenu, action.payload.happyHourMenu]
      ];
      console.log(menuArray,'menuArray');
      return action.payload.sections;
    default:
      return state;
  }
}
