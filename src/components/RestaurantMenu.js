import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { STAR_URL } from "../utils/constants"
import useFetchResMenu from "../utils/useFetchResMenu"
import RestCategory from "./RestCategory"
import { useState } from "react"


const RestaurantMenu = () => {
  const { resId } = useParams()

  const resData = useFetchResMenu(resId);
  const [showIndex,setShowIndex] = useState(null)

  if (resData == null) return <Shimmer />

  const { name, cuisines, avgRating, areaName, totalRatingsString, costForTwoMessage } = resData?.data?.cards[2]?.card?.card?.info
  const categories = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="border-solid rounded-lg p-5 shadow-lg w-[700px] max-w-[800px] m-5">
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
        <div className="border-2 border-gray-900 p-5 shadow-lg bg-white w-[700px] max-w-[800px] text-center rounded-lg">
          {
            categories.map((category,index) => (
              <div key={category.card.card.title}>  
                <RestCategory category = {category.card.card} 
                showItems = {index === showIndex ? true: false}
                setShowIndex = {()=>setShowIndex(index)}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default RestaurantMenu