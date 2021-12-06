import React from 'react';
import logo from '../assets/unbeatable.png';
// import logo1 from '../assets/f.png';
// import logo2 from '../assets/eat.png';
// import logo3 from '../assets/ture.png';

const Search = (props) => {

    return(
        <div>
            <img src={logo} alt='logo1' height='100' />
            <input type='text' id='searchBox'></input>
            <input type='submit' value='Send' onClick={() => {
                const content = document.getElementById('searchBox').value;
                document.getElementById('searchBox').value = '';
                // call action here
                return props.sendSearch(content);
            }}></input>
        </div>
    )
}








export default Search;