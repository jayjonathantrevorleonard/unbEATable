import React, { Component } from 'react';
import clouds from '../Images/clouds.jpg';

const Login = (props) => {
      // if (this.state.login === 'false') {
    return (
      <div align='center'>
        <h1>Logo</h1>
        <img src={clouds} width='100' height='100'/>
        {/* <input type='text' id='username'></input>
        <input type='text' id='password'></input>
        <input type='submit' value='Login'></input> */}
        <form>
          <label> Username <input type='username'/> </label>
          <br/>
          <label> Password <input type='password'/> </label>
          <br/>
          <label> <button type='submit'>Signup</button> <button type='submit'>Login</button> </label>  
        </form>
      </div>
    );
    // }
    // else {
    //   return (
    //     <div>
    //       <Search/>
    //     </div>
    //   );
};

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       login: false, //changes to true/false from backend
//       error: null
//     };
//   }

//   render() {

//     // login === 'false' may change
//     if (this.state.login === 'false') {
//     return (
//       <div>
//         <h1>Logo</h1>
//         <input type='text' id='username'></input>
//         <input type='text' id='password'></input>
//         <input type='submit' value='Login'></input>
//         {/* <form>
//           <label>
//             <p>Username</p>
//             <input type='username'/>
//           </label>
//           <label>
//             <p>Password</p>
//             <input type='password'/>
//           </label>
//           <button type='submit'>Login</button>
//         </form> */}
//       </div>
//     );
//     }
//     else {
//       return (
//         <div>
//           <Search/>
//         </div>
//       );
//     }
//   }

// }
// taking back and goin to localhost8080.api/login
// const Login = props => (
//   <div className='Login'>


//   </div>
// );

export default Login;