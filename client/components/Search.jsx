import React from 'react';
import logo from '../assets/unbeatable.png';

const Search = (props) => {
//  const location = document.getElementById('searchBox').value;

  // Access to fetch at 'https://api.yelp.com/v3/businesses/search?location=yo' from origin 'http://localhost:8080' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access - Control - Allow - Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

  return (
    <div className="search">
      <img src={logo} alt="logo1" height="100" />
      <br />
      <input type="text" id="searchBox" placeholder="what city do you want to eat in?"></input>
      <br />
      <button
        id="searchButton"
        type="submit"
        value="Search"
        onClick={() => props.sendSearch(document.getElementById('searchBox').value)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;

//   event.preventDefault();
//   const content = document.getElementById('searchBox').value;
//   document.getElementById('searchBox').value = '';
//   return props.sendSearch(content);
// }}
