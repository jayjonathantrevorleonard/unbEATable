import React, { Component } from 'react';
import logo from '../assets/unbeatable.png';
// import { Text, View, Stylesheet, Image } from 'react-native';
// import { Container } from 'react-bootstrap';

const Login = (props) => {
  console.log(props);
    return (
      <div className='loginBackground' align='center'>
          <img src={logo} height='100'/>
        {/* <img src={clouds} width='auto' height='auto'/> */}
        {/* <ImageBackground source={clouds} style={{width: 300, height: 300}} resizeMode={'cover'} /> */}
          <label id='username'> Username </label>
          <input id='usernameBar' type='text'/>
          <br/>
          <label id='password'> Password </label>
          <input id='passwordBar' type='text'/>
          <br/>
          <button id='loginButton' onClick={() => {
            // const user = document.getElementById('usernameBar').value;
            // const pass = document.getElementById('passwordBar').value;
            // return props.sendLogin({username: user, password: pass});
            console.log(props.sendLogin)
            return props.sendLogin();
          }
          }>Login</button> 
      </div>
    );
};


export default Login;