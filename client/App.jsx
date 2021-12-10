import React, { Component } from 'react';
import Login from './components/Login.jsx';
import HomeContainer from './containers/HomeContainer.jsx';
import * as actions from './actions/actions.js';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  loginStatus: store.state.loginStatus,
});

const mapDispatchToProps = dispatch => ({
  sendLoginStatus:
    (loginStatus) => dispatch(actions.LOGIN(loginStatus)),
});

// import Login from './components/Login.jsx';
class App extends Component {
  constructor(props) {
    super(props);
  };


  render() {
    // console.log('log-in status:', this.props.loginStatus) // logs the function definition of sendLoginStatus
    if (!this.props.loginStatus) {
      return (
        <div className='loginBackground'>
          <Login sendLoginStatus={this.props.sendLoginStatus}/>
        </div>
      );
    } else { 
    return(
      <div className='background'>
        <div>
          <HomeContainer />
        </div>
      </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);