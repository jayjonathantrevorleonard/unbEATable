import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search.jsx';
import Favourites from '../components/Favourites.jsx';
import Results from '../components/Results.jsx';
import * as actions from '../actions/actions.js';

const mapStateToProps = (store) => ({
  searchSuccess: store.state.searchSuccess,
  favouritesButton: store.state.favouritesButton,
  favouritesList: store.state.favouritesList,
  showFavourites: store.state.showFavourites,
  restaurantInfo: store.state.restaurantInfo,
  pastRestaurants: store.state.pastRestaurants,
  randomNumber: store.state.randomNumber,
});

const mapDispatchToProps = (dispatch) => ({
  sendSearch: (location) => {
    fetch(`/api/search/${location}`) // sending location to server
      // .then((res) => res.json())
      .then((res) => res.json())
      .then((res) => {
        console.log('this is the response sent to the client: ', res);
        dispatch(actions.sendSearchActionCreator(res));
      })
      .catch((err) => {
        console.log(err);
      });
  },

  rejectOption: (prevRestaurantIndex) => {
    dispatch(actions.rejectButtonActionCreator(prevRestaurantIndex));
  },

  favouritesButton: (currentRestaurant) => {
    
    dispatch(actions.favouritesButtonActionCreator(currentRestaurant))
  },

  favouritesListButton: () => {
    dispatch(actions.favouritesListActionCreator())
  },

  homeButton: () => {
    dispatch(actions.homeActionCreator())
  },

  returnToResultsButton: () => {
    dispatch(actions.returnToResultsPageActionCreator())
  }
});

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (
      this.props.searchSuccess === false &&
      this.props.showFavourites === false
    ) {
      return (
        <div>
          <Search sendSearch={this.props.sendSearch} />
        </div>
      );
    } else if (
      this.props.searchSuccess === true &&
      this.props.showFavourites === false
    ) {
      return (
        <div>
          <Results
            restaurantInfo={this.props.restaurantInfo}
            rejectOption={this.props.rejectOption}
            pastRestaurants={this.props.pastRestaurants}
            favouritesButton={this.props.favouritesButton}
            favouritesListButton={this.props.favouritesListButton}
            homeButton={this.props.homeButton}
            randomNumber={this.props.randomNumber}
          />
        </div>
      );
    } else if (this.props.showFavourites === true) {
      return (
        <div>
          <Favourites 
          favouritesList={this.props.favouritesList}
          homeButton={this.props.homeButton}
          returnToResultsButton={this.props.returnToResultsButton} 
          />
        </div>
      );
    }
  }
}

// export default HomeContainer;
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
