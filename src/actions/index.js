/*jshint esversion: 6 */
import * as firebase from 'firebase';
import { FETCH_DATA_SUCCESS } from '../constants/ActionTypes';

firebase.initializeApp({
  apiKey: "AIzaSyDQqxKxGV_0cxpi0AxStdMJ2xQV0wBRMhk",
  authDomain: "cart-driver.firebaseapp.com",
  databaseURL: "https://cart-driver.firebaseio.com",
  storageBucket: "cart-driver.appspot.com",
  messagingSenderId: "781002909952"
});

const Data = firebase.database().ref();

export function fetchData() {
  return dispatch => {
    Data.on('value', snapshot => {
      console.log(snapshot.val(), 'snapshot');
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: snapshot.val()
      });
    });
  };
}
