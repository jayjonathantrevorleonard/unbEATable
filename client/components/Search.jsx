import React from 'react';
import logo from '../assets/unbeatable.png';

const Search = (props) => {
  const handleSearch = () => {
    const location = document.getElementById('searchBox').value;

    // fetch('/api', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     city: city
    //   }),
    //   headers: {"Content-Type": "application/json"},
    // }).then((response) => response.json())
    //   .then((data) => {
    //    return props.send(data); // true
    // }).catch((err) => {
    //   console.log(err);
    //   return; // false
    // })
    fetch(`/api/search/${location}`) // sending location to server
      // .then((res) => res.json())
      .then((res) => {
        console.log('this is the response sent to the client: ', res);
        console.log('search results: ', res.locals.resultsFromDB); // could be from mongodb or from yelp api
      });
  };

  // Access to fetch at 'https://api.yelp.com/v3/businesses/search?location=yo' from origin 'http://localhost:8080' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access - Control - Allow - Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

  return (
    <div>
      <img src={logo} alt="logo1" height="100" />
      <input type="text" id="searchBox"></input>
      <button
        id="searchButton"
        type="submit"
        value="Search"
        onClick={() => {
          handleSearch();
        }}
      >
        {' '}
        Search{' '}
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
