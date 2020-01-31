import axios from 'axios';
import { FETCH_STORYBLOK_CACHE_VERSION } from '../constants/ActionTypes';
import setTheme from './SetTheme';

function fetchRequest(requestAction) {
  return { type: requestAction };
}

function fetchSuccess(successAction, body) {
  return { type: successAction, body };
}

function fetchFailure(failureAction, error) {
  return { type: failureAction, error };
}

function fetchCacheVersionSuccess(cacheVersion) {
  return { type: FETCH_STORYBLOK_CACHE_VERSION, cacheVersion };
}

export default function fetchStoryblok(
  pageName, preview = false,
) {
  return (dispatch, getState) => {
    const token = preview
      ? process.env.REACT_APP_STORYBLOK_PREVIEW_KEY
      : process.env.REACT_APP_STORYBLOK_PUBLIC_KEY;
    const version = preview ? 'draft' : 'published';
    const url = `https://api.storyblok.com/v1/cdn/stories/${pageName}?token=${token}&version=${version}`;
    const bigPage = pageName.toUpperCase();
    const requestAction = `FETCH_STORYBLOK_${bigPage}_REQUEST`;
    const successAction = `FETCH_STORYBLOK_${bigPage}_SUCCESS`;
    const failureAction = `FETCH_STORYBLOK_${bigPage}_FAILURE`;
    const { cacheVersion } = getState().Storyblok;
    dispatch(fetchRequest(requestAction));

    if (cacheVersion) {
      return axios.get(
        `${url}&cv=${cacheVersion}`,
        { headers: { 'Content-Type': 'application/json' } },
      ).then((resp) => {
        const results = [...resp.data.story.content.body];
        const [data] = results.filter(item => item.component === 'Theme');
        dispatch(fetchSuccess(successAction, results));
        if (data) dispatch(setTheme(data));
      }).catch(error => dispatch(fetchFailure(failureAction, error)));
    }

    return axios.get(
      `https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`,
      { headers: { 'Content-Type': 'application/json' } },
    ).then((resp) => {
      const cv = resp.data.space.version;
      dispatch(fetchCacheVersionSuccess(cv));
      return cv;
    }).then(cv => (
      axios.get(`${url}&cv=${cv}`, { headers: { 'Content-Type': 'application/json' } })
        .then((resp) => {
          const results = [...resp.data.story.content.body];
          const [data] = results.filter(item => item.component === 'Theme');
          dispatch(fetchSuccess(successAction, results));
          if (data) dispatch(setTheme({ ...data, name: resp.data.story.name }));
        }).catch(error => dispatch(fetchFailure(failureAction, error)))
    )).catch(error => dispatch(fetchFailure(failureAction, error)));
  };
}
