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
    restaurantInfo: store.state.restaurantInfo
})

const mapDispatchToProps = dispatch => ({
    sendSearch:
        (city) => dispatch(actions.sendSearchActionCreator(city))
});

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.searchSuccess === false && this.props.showFavourites === false) {
            return(
                <div>
                    <Search sendSearch={this.props.sendSearch}/>
                </div>
            )
        } else if (this.props.searchSuccess === true && this.props.showFavourites === false) {
            return(
                <div>
                    <Results restaurantInfo={this.props.restaurantInfo} />
                </div>
            )
        } else if (this.props.showFavourites === true) {
            <div>
                <Favourites favouritesList={this.props.favouritesList} />
            </div>
        }
    }
}

// export default HomeContainer;
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);