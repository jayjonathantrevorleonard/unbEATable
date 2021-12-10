import React from 'react';
import star from '../assets/star.png';

const Results = (props) => {
  let stars = [];
  for (let i = 1; i < props.restaurantInfo.businesses[props.randomNumber].rating; i += 1) {
    stars.push(<img src='../assets/ratingStar.png' alt="star" height="30" />);
  }
  
  // let random = Math.floor(Math.random() * 20);
  // let noMore = 0;
  // while (props.pastRestaurants.includes(random) && noMore < 19) {
  //   noMore = props.pastRestaurants.length
  //   random = Math.floor(Math.random() * 20);
  // }
  
  return (
    <div>
      <div className="results">
        <img
          src={props.restaurantInfo.businesses[props.randomNumber].image_url}
          alt="restaurant picture"
          height="400"
        />
        {/* <br /> */}
        <label id="rLabel">{props.restaurantInfo.businesses[props.randomNumber].name}</label>
        {/* <br /> */}
        <div>{stars}</div>
        {/* reject button */}
        <button onClick={() => props.rejectOption(props.randomNumber)}>Next</button>
        {/* favourites button */}
        <button onClick={() => props.favouritesButton(props.restaurantInfo.businesses[props.randomNumber])} id="heart">♥</button>
        <button
          onClick={() => window.open(props.restaurantInfo.businesses[props.randomNumber].url, '_blank')}
        >
          ✔️
        </button>
        <button onClick={() => props.favouritesListButton()}>Favourites List</button>
        <button onClick={() => props.homeButton()}>Home Page</button>
      </div>
    </div>
  );
};

export default Results;


// window.location.href = 