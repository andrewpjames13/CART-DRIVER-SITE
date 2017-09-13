/*jshint esversion: 6 */
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import MenuItemsReducer from './reducer_menus';
import PressItemsReducer from './reducer_press';
import PhotosReducer from './reducer_photos';
import LoadReducer from './reducer_load';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  menuItems: MenuItemsReducer,
  pressItems: PressItemsReducer,
  photos: PhotosReducer,
  currentItem: LoadReducer,
});

export default rootReducer;
