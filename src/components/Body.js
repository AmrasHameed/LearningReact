import RestCard from "./RestCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";



const Body = () => {
  const [listRest, setListRest] = useState([])
  const [filterRest, setFilterRest] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.8744775&lng=75.37036619999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    setListRest(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterRest(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  if(listRest.length === 0) {
    return <Shimmer/>
  }

  return (
    <div className="main">
      <div className="search">
        <input type="text" placeholder="Search..." value={searchText} onChange={(e)=>{
          setSearchText(e.target.value)
        }}/>
        <span>
          <button className="searchBtn" onClick={()=>{
            const filterRes = listRest.filter((rest) => {
              const regex = new RegExp(searchText, 'i') 
              return regex.test(rest.info.name)
            })
            
            setFilterRest(filterRes)
            
          }}>Search</button>
        </span>
      </div>
      <button className="filterRating" onClick={() => {
        const filterRes = listRest.filter((rest) => rest.info.avgRating >= 4.3)
        setFilterRest(filterRes)
      }}>
        Top Rated Restaurant
      </button>
      <button className="filterRating" onClick={() => {
        const filterRes = listRest.filter((rest) => rest.info.sla.deliveryTime < 20)
        setFilterRest(filterRes)
      }}>
        Delivery in less than 20 min
      </button>
      <div className="restCardContainer">
        {
          filterRest.map((rest) => (
            <RestCard key={rest.info.id} resData={rest} />
          ))
        }
      </div>
    </div>
  );
}

export default Body;