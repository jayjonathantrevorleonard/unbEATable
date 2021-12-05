import * as types from '../constants/actionTypes';

const searchInitialState = {
    search: false,
    favouites: false
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
        default: {
            return state;
        }
    } 
}

export default searchReducers;