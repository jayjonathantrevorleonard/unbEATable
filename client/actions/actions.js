import * as types from '../constants/actionTypes';

export const sendSearchActionCreator = (city) => ({
    type: types.SEND_SEARCH,
    payload: city
});

