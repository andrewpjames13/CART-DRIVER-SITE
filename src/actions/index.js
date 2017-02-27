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

export function createMenuItem(menu, menuItem) {
  return dispatch => {
    firebase.database().ref('/pizzaMenu/menuItems').push({items: ['this is a menu item'], name: 'menuItem', price: '0'});
  };
}

export function deleteMenuItem(key) {
  return dispatch => firebase.database().ref('/test/here').remove();
}

export function updateMenuItem(key) {
  return dispatch => firebase.database().ref('/test/another').update({items: ['this is a menu item'], name: 'menuItem', price: '2'});
}

export function fetchData() {
  const data = [];
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
