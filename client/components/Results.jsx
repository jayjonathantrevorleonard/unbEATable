import React from 'react';
import star from '../assets/star.png';

const Results = (props) => {
  let stars = [];
  for (let i = 0; i < props.restaurantInfo.rating; i++) {
    stars.push(<img src={star} alt="star" height="10" />);
  }

  let random = Math.floor(Math.random() * 20);
  let noMore = 0;
  while (props.pastRestaurants.includes(random) && noMore < 19) {
    noMore = props.pastRestaurants.length
    random = Math.floor(Math.random() * 20);
  }

  
  return (
    <div>
      <div>
        <img
          src={props.restaurantInfo.businesses[random].image_url}
          alt="restaurant picture"
          height="500"
        />
        <label>{props.restaurantInfo.businesses[random].name}</label>
        <div>{stars}</div>
        <span>{props.restaurantInfo.location}</span>
        <button onClick={() => props.rejectOption(random)}>X</button>
        <button>♥</button>
        {/* onClick = {window.location.href = props.restaurantInfo.url[0]} */}
        <button
          onClick={() => window.location.href = props.restaurantInfo.businesses[random].url}
        >
          ✔️
        </button>
      </div>
    </div>
  );
};

export default Results;
