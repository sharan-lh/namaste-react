import { HEADER_URL } from "../utils/constants";
import { useState, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header =() => {


    const [btnName,setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const data = useContext(UserContext);

    const cart = useSelector((store) => store.cart.items);

    return (
        <div className='flex justify-between shadow-lg mb-2 bg-yellow-300 sm:bg-green-100'>
        <div className='logo-container'>
            <img className='w-24 mt-4' src={HEADER_URL}></img>
        </div>
        <div className='flex items-center'>
            <ul className="flex p-4 m-4">
                <li className="p-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                <li className="p-4"><Link to="/">Home</Link></li>
                <li className="p-4"><Link to="about">About Us</Link></li>
                <li className="p-4"><Link to="contact">Contact Us</Link></li>
                <li className="p-4"><Link to="grocery">Grocery</Link></li>
                <li className="p-4 font-bold"><Link to="cart">Cart({cart.length}) </Link> </li>
                
                <button className="login" onClick={()=> 
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
                <li className="font-bold p-4"> {data.loggedInUser} </li>
            </ul>
        </div>
        </div>  
    );
}
//
export default Header;