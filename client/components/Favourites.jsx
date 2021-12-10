import React from 'react';


const Favourites = (props) => {
    
    const list = []
    for (let i = 0; i < props.favouritesList.length; i ++) {
        list.push(<div>
            <img
          src={props.favouritesList[i].image_url}
          alt="restaurant picture"
          height="100"
            />
            <span>
            {props.favouritesList[i].name}
            </span>
            <span>
            Rating: {props.favouritesList[i].rating}
            </span>
        </div>)
    }

    return(
        <div>
            <button onClick={() => props.homeButton()}>Return to Search</button>
            <button onClick={() => props.returnToResultsButton()}>Return to Results</button>
            <h2>Favourite Restaurants</h2>
            {list}
        </div>
    )
}







export default Favourites;