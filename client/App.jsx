import React, { Component } from 'react';
<<<<<<< HEAD
// import HomeContainer from './containers/HomeContainer.jsx';
import Login from './components/Login.jsx';
=======
import HomeContainer from './containers/HomeContainer.jsx';
// import Login from './components/Login.jsx';
>>>>>>> 294f58f901e92f58f750ac5c6bf22fa6ca269817
class App extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
<<<<<<< HEAD
        {/* <HomeContainer/> */}
        <Login/>
=======
        <h1>App rendering</h1>
        <HomeContainer/>
>>>>>>> 294f58f901e92f58f750ac5c6bf22fa6ca269817
      </div>
    );
  }
}

export default App;