import { CDN_URL } from "../utils/constants";
const ResturantCard = ({restObj}) => {

    const {name,cuisines,avgRatingString,sla,cloudinaryImageId} = restObj?.card.card.info;
    return (
        <div className='res-card' style={{backgroundColor:'#f0f0f0'}}>
            <img className='res-logo' src={CDN_URL +cloudinaryImageId }></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Rating : {avgRatingString}</h4>
            <h4>Distance :{sla.deliveryTime}</h4>
        </div>
    );
}

export default ResturantCard;