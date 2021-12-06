import React, { Component } from 'react';
// import HomeContainer from './containers/HomeContainer.jsx';
import Login from './components/Login.jsx';
class App extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        {/* <HomeContainer/> */}
        <Login/>
      </div>
    );
  }
}

export default App;