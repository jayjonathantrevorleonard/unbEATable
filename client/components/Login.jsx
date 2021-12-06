import React, { Component } from 'react';
import clouds from '../Images/clouds.jpg';
// import { Text, View, Stylesheet, Image } from 'react-native';
// import { Container } from 'react-bootstrap';

const Login = (props) => {
    return (
      <div align='center'>
          <img src={clouds} style={{width: 300, height: 300}}/>
        <h1>Logo</h1>
        {/* <img src={clouds} width='auto' height='auto'/> */}
        {/* <ImageBackground source={clouds} style={{width: 300, height: 300}} resizeMode={'cover'} /> */}
        <form>
          <label> Username <input type='text' id='username'/> </label>
          <br/>
          <label> Password <input type='text' id='password'/> </label>
          <br/>
          <label> <button type='submit' onClick={() => {
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;
            return props.sendLogin({username: user, password: pass});
          }
          }>Signup</button> <button type='submit'>Login</button> </label>  
        </form>
      </div>
    );
};


export default Login;