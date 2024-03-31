

import React from 'react';
import ReactDOM from 'react-dom/client';
import data from './data.json';
const Header =() => {
    return (
        <div className='header'>
        <div className='logo-container'>
            <img className='logo' src='https://cdn-icons-png.flaticon.com/512/7541/7541708.png'></img>
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>  
    );
}

const ResturantCard = ({restObj}) => {

    const {name,cuisines,avgRatingString,sla,cloudinaryImageId} = restObj?.card.card.info;
    return (
        <div className='res-card' style={{backgroundColor:'#f0f0f0'}}>
            <img className='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +cloudinaryImageId }></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString}</h4>
            <h4>{sla.deliveryTime}</h4>
        </div>
    );
}
const Body =() => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='restro-container'>
               {
                data.map(resturant => <ResturantCard key={resturant.card.card.info.id} restObj={resturant}/>)
               }
            </div>
        </div>
        
    );
}

const AppLayout = () => {
    return (<div className='app' >
        <Header/>
        <Body/>
    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);