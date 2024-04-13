import ResturantCard from "./ResturantCard";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body =() => {
    // normal JS variable
    //let listOfResturants = data;

    //State Variable
    const [listOfResturants, setListOfResturants] = useState([]);
    const [filteredResturants, setFilteredResturants] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetchData();
    },[]);
    
    const fetchData = async  () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&collection=83646&tags=layout_CCS_SouthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

        const json = await data.json();
        setListOfResturants(json?.data?.cards?.slice(3));
        setFilteredResturants(json?.data?.cards?.slice(3));
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1> You are offline</h1>;

    return listOfResturants.length === 0 ? (<Shimmer/>) : (
        <div className='body'>
            <div className='filter flex'>
                <div className="search m-4 p-4">
                    <input  className=" border border-black border-solid search-box" type="text" value={searchText} onChange={e => setSearchText(e.target.value)}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        setFilteredResturants(listOfResturants.filter(e => e.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())))
                    }}> Search </button>
                </div>
                <div className="search m-4 p-4">
                <button className="px-4  py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                    setFilteredResturants(listOfResturants.filter(res => res.card.card.info.avgRatingString >= 4.5 ));
                } }>Top Rated Restaurants</button>
                </div>
            </div>
            <div className='flex flex-wrap'>
               {
                filteredResturants.map(resturant => <Link key={resturant.card.card.info.id} to={"resturants/" + resturant.card.card.info.id} ><ResturantCard  restObj={resturant}/> </Link>)
               }
            </div>
        </div>
        
    );
}

export default Body;