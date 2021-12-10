import * as types from '../constants/actionTypes';

const searchInitialState = {
  loginStatus: false,
  searchSuccess: false,
  restaurantInfo: {},
  // showFavourites: false,
  pastRestaurants: [],
  acceptButton: false,
  favouritesButton: false,
  showFavourites: false,
  favouritesList: [],
  randomNumber: 19
};

const searchReducers = (state = searchInitialState, action) => {
  switch (action.type) {
    case types.SEND_SEARCH: {
      console.log('sending search: city');
      return {
        ...state,
        searchSuccess: true,
        restaurantInfo: action.payload, //TODO: data will be an object so this needs to be changed
      };
    }

    case types.LOG_IN: {
      console.log('user logged in: ', action.payload);
      return {
        ...state,
        loginStatus: action.payload,
      };
    }

    case types.REJECT_BUTTON: {
      const newPastRestaurants = [...state.pastRestaurants];
      newPastRestaurants.push(action.payload);
      let random = Math.floor(Math.random() * 19);
      let noMore = 0
      while (state.pastRestaurants.includes(random) && noMore < 18 ) {
        noMore = state.pastRestaurants.length
        random = Math.floor(Math.random() * 19);
      }
      return {
        ...state,
        pastRestaurants: newPastRestaurants,
        randomNumber: random
      };
    }

    case types.ACCEPT_BUTTON: {
      return {
        ...state,
        acceptButton: true,
      };
    }

    case types.FAVOURITES_BUTTON: {
      const favourited = [...state.favouritesList];
      if(!state.favouritesList.includes(action.payload)) {
        favourited.push(action.payload)
      }
      return {
        ...state,
        favouritesButton: true, //TODO: data will be an object so this needs to be changed
        favouritesList: favourited,
      };
    }

    case types.FAVOURITES_LIST: {
      return {
        ...state,
        showFavourites: true
      };
    }

    case types.HOME: {
      // change state.search to true to return to home page
      return {
        ...state,
        searchSuccess: false,
        showFavourites: false,
        randomNumber: 19
      };
    }

    case types.RESULTS_PAGE: {
      return {
        ...state,
        searchSucess: true,
        showFavourites: false
      }
    }

    default: {
      return state;
    }
  }
};

export default searchReducers;
