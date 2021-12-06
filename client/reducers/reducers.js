import * as types from '../constants/actionTypes';

const searchInitialState = {
    search: false,
    showFavourites: false,
    acceptButton: false,
    rejectButton: {},
    favouritesButton: false,
    login: false
};

const searchReducers = (state = searchInitialState, action) => {

    switch (action.type) {
        case types.SEND_SEARCH: {
            // fetch('http://localhost:8080/api', { //TODO: fix url
            //     method: 'POST',
            //     headers: {'Content-Type': 'application/json'},
            //     body: JSON.stringify({
            //         searchBar: action.payload
            //     })
            // })
            //     .then((received) => received.json())
            //     .then((data) => {
            //         return {
            //             ...state,
            //             search: data //TODO: data will be an object so this needs to be changed
            //         }
            //     })
            return {
                ...state
            }
        }

        case types.LOG_IN: {
            // fetch('http://localhost:8080/api', { //TODO: fix url
            //     method: 'POST',
            //     headers: {'Content-Type': 'application/json'},
            //     body: JSON.stringify({
            //         Login: action.payload
            //     })
            // })
            //     .then((received) => received.json())
            //     .then((data) => {
            //         return {
            //             ...state,
            //             search: data //TODO: data will be an object so this needs to be changed
            //         }
            //     })
            return {
                ...state,
                Login: true
            }
        }

        case types.REJECT_BUTTON: {

            return {
                ...state
            }
        }

        case types.ACCEPT_BUTTON: {

            return {
                ...state
            }
        }

        case types.FAVOURITES_BUTTON: {

            return {
                ...state
            }
        }

        case types.HOME: {
            // change state.search to true to return to home page
            return {
                ...state
            }
        }

        default: {
            return state;
        }
    } 
}

export default searchReducers;