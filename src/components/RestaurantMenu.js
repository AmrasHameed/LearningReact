import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import {STAR_URL } from "../utils/constants"
import useFetchResMenu from "../utils/useFetchResMenu"


const RestaurantMenu = () => {
    const { resId } = useParams()

    const resData = useFetchResMenu(resId);

    if (resData == null) return <Shimmer />

    const { name, cuisines, avgRating, areaName, totalRatingsString, costForTwoMessage } = resData?.data?.cards[2]?.card?.card?.info
    const { itemCards } = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    return (
    <div className="flex flex-col justify-center items-center ">
      <div className="border-solid rounded-lg p-5 shadow-lg w-[500px] max-w-[600px] m-5">
        <h1 className="text-3xl font-bold mb-2.5">{name}</h1>
        <div className="flex items-center justify-between py-2.5 px-0 mb-2.5">
          <span className="flex items-center grow">
            <span><img className="w-5 h-5 mr-1.5" src={STAR_URL} alt="Rating star" /></span> 
            {avgRating} ({totalRatingsString}) <b className="text-xl font-bold">·</b>
          {costForTwoMessage}</span>
        </div>
        <div className="text-sm mb-2.5">
          <h2>{cuisines.join(', ')}</h2>
        </div>
        <div className="text-sm mb-5">
          <h2>{areaName}</h2>
        </div>
      </div>
      <div className="flex justify-center  items-center w-full h-full ">
        <div className="border-2 border-gray-900 p-5 shadow-lg bg-white max-w-[600px] text-center rounded-lg">
          <h1 className="text-2xl mb-2.5">Recommended ({itemCards.length})</h1>
          <ul className="p-0">
            {itemCards.map(item => (
              <li className="mb-2.5 p-2.5" key={item.card.info.id}>
                {item.card.info.name} - Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}/-
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    )
}

export default RestaurantMenu