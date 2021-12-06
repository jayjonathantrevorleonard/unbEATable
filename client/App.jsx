import React, { Component } from 'react';
import Login from './components/Login.jsx';
import HomeContainer from './containers/HomeContainer.jsx';
import * as actions from './actions/actions.js';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  Login: store.state.login,
});

const mapDispatchToProps = dispatch => ({
  sendLogin:
      (user, pass) => dispatch(actions.LOGIN(user, pass))
});

import HomeContainer from './containers/HomeContainer.jsx';
// import Login from './components/Login.jsx';
class App extends Component {
  constructor() {
    super();
  };

  render() {
    if (!this.props.login) {
      return (
      <div>
      <Login Login={this.props.sendLogin}/>
      </div>
      );
    } else { 
    return(
      <div className='background'>
        <div>
          <h1>App rendering</h1>
          <HomeContainer/>
        </div>

      </div>
      );
}
  }}
export default connect(mapStateToProps, mapDispatchToProps)(App);