import * as types from '../constants/actionTypes';


const searchInitialState = {
    login: false,
    searchSuccess: false,
    restaurantInfo: {},
    // showFavourites: false,
    acceptButton: false,
    favouritesButton: false,
    showFavourites: false,
    favouritesList: []
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
            //             searchSuccess: true,
            //             restaurantInfo: data //TODO: data will be an object so this needs to be changed
            //         }
            //     })
            return {
                ...state,
                searchSuccess: true,
                restaurantInfo: action.payload //TODO: data will be an object so this needs to be changed
            }
        }

        case types.LOG_IN: {
            console.log('reached');
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
                login: true
            }
        }

        case types.REJECT_BUTTON: {
            fetch('http://localhost:8080/api') // TODO: need to fix url
                .then((received) => received.json())
                .then((data) => {
                    return {
                        ...state,
                        restaurantInfo: data,
                    }
                })
        }

        case types.ACCEPT_BUTTON: {
            return {
                ...state,
                acceptButton: true
            }
        }

        case types.FAVOURITES_BUTTON: {
            fetch('http://localhost:8080/api', { //TODO: fix url
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    searchBar: action.payload //TODO: fix payload
                })
            })
                .then((received) => received.json())
                .then((data) => {
                    return {
                        ...state,
                        favouritesButton: true //TODO: data will be an object so this needs to be changed
                    }
                })
        }

        case types.FAVOURITES_LIST: {
            // TODO: 

            return {
                ...state,
                showFavourites: true,
                favouritesList: 'need to change' //TODO: add list
            }
        }

        case types.HOME: {
            // change state.search to true to return to home page
            return {
                ...state,
                searchSuccess: false
            }
        }

        default: {
            return state;
        }
    } 
}

export default searchReducers;