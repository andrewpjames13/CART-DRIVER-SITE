/*jshint esversion: 6 */
import { combineReducers } from 'redux';
import Storyblok from './StoryblokReducer';
import Theme from './setThemeReducer';

const rootReducer = combineReducers({
  Storyblok,
  Theme,
});

export default rootReducer;
