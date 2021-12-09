import React, { Component } from 'react';
import logo from '../assets/unbeatable.png';
// import { Text, View, Stylesheet, Image } from 'react-native';
// import { Container } from 'react-bootstrap';

const Login = (props) => {
  console.log('props: ', props);

  function handleLogin() {
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        username: document.getElementById('usernameBar').value,
        password: document.getElementById('passwordBar').value,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        return props.sendLoginStatus(data); // true
      })
      .catch((err) => {
        console.log(err);
        return; // false
      });
  }

  return (
    <div className="login">
      <img src={logo} height="100" />
      {/* <img src={clouds} width='auto' height='auto'/> */}
      {/* <ImageBackground source={clouds} style={{width: 300, height: 300}} resizeMode={'cover'} /> */}
      <label htmlFor="usernameBar"> Username </label>
      <input id="usernameBar" type="text" name="username" />
      <br />
      <label htmlFor="passwordBar"> Password </label>
      <input id="passwordBar" type="text" name="pw" />
      <br />
      <button id="loginButton" type="submit" onClick={() => handleLogin()}> Login </button>
    </div>
  );
};

export default Login;
