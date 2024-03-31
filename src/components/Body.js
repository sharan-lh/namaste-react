import ResturantCard from "./ResturantCard";
import data from "../utils/data";
import { useState } from "react";

const Body =() => {
    // normal JS variable
    //let listOfResturants = data;

    //State Variable
    const [listOfResturants, setListOfResturants] = useState(data);
    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={() => {
                    setListOfResturants(listOfResturants.filter(res => res.card.card.info.avgRatingString >= 4.5 ));
                } }>Top Rated Restaurants</button>
            </div>
            <div className='restro-container'>
               {
                listOfResturants.map(resturant => <ResturantCard key={resturant.card.card.info.id} restObj={resturant}/>)
               }
            </div>
        </div>
        
    );
}

export default Body;