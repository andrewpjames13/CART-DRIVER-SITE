/*jshint esversion: 6 */
import axios from 'axios';
import { FETCH_DATA_SUCCESS } from '../constants/ActionTypes';

function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  };
}

export function fetchData() {
  return dispatch => {
    axios.get('/data.json')
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
      });
  };
}
