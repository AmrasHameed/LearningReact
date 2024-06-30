import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const cartItems = useSelector((store)=>store.cart.items)
  console.log(cartItems)
  return (
    <div className="flex justify-between items-center p-2.5 bg-white rounded-md shadow-lg">
      <div className="flex-1">
        <img
          className="w-[170px] h-auto hover:scale-95"
          src={LOGO_URL}
          alt="Logo"
        />
      </div>
      <div className="text-right">
        <ul className="flex justify-end align-middle m-0 p-0">
          <li className="my-5 p-2.5 font-light font-lucida text-lg text-gray-900 hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="my-5 p-2.5 font-light font-lucida text-lg text-gray-900 hover:text-orange-500">
            <Link to="/about">About us</Link>
          </li>
          <li className="my-5 p-2.5 font-light font-lucida text-lg text-gray-900 hover:text-orange-500">
            <Link to={"/"}>Restaurants</Link>
          </li>
          <li className="my-5 p-2.5 font-light font-lucida text-lg text-gray-900 hover:text-orange-500">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="my-5 p-2.5 font-light font-lucida text-lg text-gray-900 hover:text-orange-500">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="my-5 p-2.5 font-light font-lucida text-lg text-gray-900 hover:text-orange-500">
            <Link to={"/cart"}>Cart({cartItems.length})</Link>
          </li>
          <li className="my-5 p-1 text-lg">
            <button
              className="px-2.5 py-1 text-white bg-orange-500 rounded-full hover:text-orange-500 hover:bg-white hover:border-2 hover:border-orange-500"
              onClick={() =>
                setBtnName(btnName === "Login" ? "Logout" : "Login")
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
