/*jshint esversion: 6 */
import { combineReducers } from 'redux';
import MenuItemsReducer from './reducer_menus';
import PressItemsReducer from './reducer_press';
import PhotosReducer from './reducer_photos';

const rootReducer = combineReducers({
  menuItems: MenuItemsReducer,
  pressItems: PressItemsReducer,
  photos: PhotosReducer
});

export default rootReducer;
