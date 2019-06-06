/*jshint esversion: 6 */
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import MenuItemsReducer from './reducer_menus';
import PressItemsReducer from './reducer_press';
import PhotosReducer from './reducer_photos';
import LoadReducer from './reducer_load';
import Storyblok from './StoryblokReducer';
import Theme from './setThemeReducer';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  menuItems: MenuItemsReducer,
  pressItems: PressItemsReducer,
  photos: PhotosReducer,
  currentItem: LoadReducer,
  Storyblok,
  Theme,
});

export default rootReducer;
