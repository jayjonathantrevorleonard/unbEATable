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
      <div>
        <h1>App rendering</h1>
        <HomeContainer/>
      </div>
      );
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;