import * as types from '../constants/actionTypes';

export const sendSearchActionCreator = (data) => ({
  type: types.SEND_SEARCH,
  payload: data,
});

export const LOGIN = (loginStatus) => ({
  type: types.LOG_IN,
  payload: loginStatus
});

export const acceptButtonActionCreator = () => ({
  type: types.ACCEPT_BUTTON,
});

export const rejectButtonActionCreator = (prevRestaurantIndex) => ({
  type: types.REJECT_BUTTON,
  payload: prevRestaurantIndex,
});

export const favouritesButtonActionCreator = () => ({
  type: types.FAVOURITES_BUTTON,
});

export const favouritesListActionCreator = () => ({
  type: types.FAVOURITES_LIST,
});
