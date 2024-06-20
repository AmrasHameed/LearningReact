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
        <div>
      <div className="restaurant-card">
        <h1 className="restaurant-name">{name}</h1>
        <div className="restaurant-info">
          <span className="ratings">
            <span><img className="ratingImg" src={STAR_URL} alt="Rating star" /></span> 
            {avgRating} ({totalRatingsString}) <b className="boldDot">·</b>
          {costForTwoMessage}</span>
        </div>
        <div className="restaurant-cuisines">
          <h2>{cuisines.join(', ')}</h2>
        </div>
        <div className="restaurant-location">
          <h2 className="area-name">{areaName}</h2>
        </div>
      </div>
      <div className="restaurant-menu-container">
        <div className="restaurant-menu">
          <h1>Recommended ({itemCards.length})</h1>
          <ul>
            {itemCards.map(item => (
              <li key={item.card.info.id}>
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