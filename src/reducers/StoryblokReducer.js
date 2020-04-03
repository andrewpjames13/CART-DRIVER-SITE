import { FETCH_STORYBLOK_CACHE_VERSION } from '../constants/ActionTypes';

export const initialState = { cacheVersion: null };

export default function fetchStoryblokReducer(state = initialState, action) {
  if (action && action.type === FETCH_STORYBLOK_CACHE_VERSION) {
    return {
      ...state,
      cacheVersion: action.cacheVersion,
    };
  }

  const theMatches = action && action.type ? action.type.match(/FETCH_STORYBLOK_([A-Z]*)_([A-Z]*)/) : null;
  if (theMatches) {
    const page = theMatches[1];
    const type = theMatches[2];
    switch (type) {
      case 'SUCCESS':
        return {
          ...state,
          [page.toLowerCase()]: {
            loading: false,
            content: action.body,
          },
        };
      case 'REQUEST':
        return {
          ...state,
          [page.toLowerCase()]: {
            loading: true,
            content: [],
          },
        };
      case 'FAILURE':
        return {
          ...state,
          [page.toLowerCase()]: {
            loading: false,
            content: action.body,
          },
        };
      default:
        return state;
    }
  }
  return state;
}
