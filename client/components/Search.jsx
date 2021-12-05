import React from 'react';


const Search = (props) => {

    console.log(props);
    return(
        <div>
            {/* TODO: <img /> */}
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