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
      () => dispatch(actions.LOGIN())
});

// import Login from './components/Login.jsx';
class App extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    console.log(this.props.login);
    console.log(this.props.sendLogin);
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
          <HomeContainer/>
        </div>
      </div>
      );
}
  }}


  
export default connect(mapStateToProps, mapDispatchToProps)(App);