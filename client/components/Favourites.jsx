import React from 'react';


const Favourites = (props) => {
    
    const list = []
    for (let i = 0; i < props.favouritesList.length; i ++) {
        list.push(<p>
            {props.favouritesList[i].name}
        </p>)
    }

    return(
        <div>
            <h2>Favouite Restaurants</h2>
            {list}
        </div>
    )
}







export default Favourites;