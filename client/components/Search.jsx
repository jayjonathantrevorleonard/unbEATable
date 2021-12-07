import React from 'react';
import logo from '../assets/unbeatable.png';


const Search = (props) => {
    return(
        <div>
            <img src={logo} alt='logo1' height='100' />
            <input type='text' id='searchBox'></input>
            <input id='searchButton' type='submit' value='Search' onClick={(event) => {
                event.preventDefault();
                const content = document.getElementById('searchBox').value;
                document.getElementById('searchBox').value = '';
                return props.sendSearch(content);
            }}></input>
        </div>
    )
}








export default Search;