import { CDN_URL } from "../utils/constants";
const ResturantCard = ({restObj}) => {

    const {name,cuisines,avgRatingString,sla,cloudinaryImageId} = restObj?.card.card.info;
    return (
        <div className='m-4 p-4 w-[300px] h-[300px] rounded-lg bg-gray-50 hover:bg-gray-200'>
            <img className=' w-[350px] h-[150px]' src={CDN_URL +cloudinaryImageId }></img>
            <h3 className="font-bold text-lg text-justify">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Rating : {avgRatingString}</h4>
            <h4>Distance : {sla.deliveryTime}</h4>
        </div>
    );
}

export default ResturantCard;