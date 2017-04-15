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
    firebase.database().ref(`/${menu}/menuItems`).push(
      {items: [menuItem.items], name: menuItem.name, price: menuItem.price}
    );
  };
}

export function deleteMenuItem(menu, key) {
  return dispatch => firebase.database().ref(
    `/${menu}/menuItems/${key}`
  ).remove();
}

export function updateMenuItem(menu, menuItem) {
  return dispatch => firebase.database().ref(
    `/${menu}/menuItems/${menuItem.index}`
  ).update(
    {items: [menuItem.items], name: menuItem.name, price: menuItem.price}
  );
}

export function updateMenuItemPositions(menu, newMenuOrder) {
  return dispatch => firebase.database().ref(
    `/${menu}/`
  ).update(
    {menuItems: newMenuOrder}
  );
}

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
