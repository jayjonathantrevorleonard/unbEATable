import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search.jsx';
import Favourites from '../components/Favourites.jsx';
import * as actions from '../actions/actions.js';

const mapStateToProps = (store) => ({
    search: store.state.search,
    favourites: store.state.favourites
});

const mapDispatchToProps = dispatch => ({
    sendSearch:
        (city) => dispatch(actions.sendSearchActionCreator(city))
});

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <div>
            <h2>Home container rendering</h2>
            <Search sendSearch={this.props.sendSearch}/>
        </div>
        )
    }

    // render() {
    //     if (favourites === true) {
    //         return(
    //             <div>
    //                 <Favourites />
    //             </div>
    //         )
    //     } else {
    //         return(
    //             <div>
    //                 <Search />
    //             </div>
    //         )
    //     }
        
    // }
}

// export default HomeContainer;
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);