import React from 'react';

const Favourites = (props) => {
  const list = [];
  for (let i = 0; i < props.favouritesList.length; i++) {
    list.push(
      <div id="favItem">
        <img
          src={props.favouritesList[i].image_url}
          alt="restaurant picture"
          height="100"
          onClick={() => {window.open(props.favouritesList[i].url, '_blank')}}
        />
        <div id='favItemName'>
          <span>{props.favouritesList[i].name}</span>
          </div>
          <div>
          <span>Rating: {props.favouritesList[i].rating}</span>
        </div>
        <br/>
      </div>
      
    );
  }

  return (
    <div>
      <button onClick={() => props.homeButton()}>Return to Search</button>
      <button onClick={() => props.returnToResultsButton()}>
        Return to Results
      </button>
      <h2>Favourite Restaurants</h2>
      {list}
    </div>
  );
};

export default Favourites;
