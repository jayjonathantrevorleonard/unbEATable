import React from 'react';
import star from '../assets/star.png';

const Results = (props) => {
  let stars = [];
  for (let i = 0; i < props.restaurantInfo.rating; i++) {
    stars.push(<img src={star} alt="star" height="10" />);
  }

  return (
    <div>
      <div>
        <img
          src={props.restaurantInfo.image_url}
          alt="restaurant picture"
          height="100"
        />
        <label>{props.restaurantInfo.name}</label>
        <div>{stars}</div>
        <span>{props.restaurantInfo.address1}</span>
        <button>X</button>
        <button>♥</button>
        <button>✔️</button>
      </div>
    </div>
  );
};

export default Results;
