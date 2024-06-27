import RestCard from "./RestCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Offline from "./Offline";
import { MAIN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {
  const [listRest, setListRest] = useState([])
  const [filterRest, setFilterRest] = useState([])
  const [searchText, setSearchText] = useState('')

  const onlineStatus = useOnlineStatus()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MAIN_URL)
    const json = await data.json()
    setListRest(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterRest(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  
  console.log(onlineStatus)
  if(onlineStatus === false) return <Offline />

  if(listRest.length === 0) {
    return <Shimmer/>
  }

  return (
    <div>
      <div className="flex justify-center items-center m-5">
        <input className="w-[100%] p-2.5 border-2 border-t-black border-b-black rounded-l-full shadow-lg" type="text" placeholder="Search..." value={searchText} onChange={(e)=>{
          setSearchText(e.target.value)
        }}/>
        <span className="flex">
          <button className="px-5 py-2.5 border-2 border-t-black border-b-black rounded-r-full bg-orange-500 text-white shadow-lg" onClick={()=>{
            const filterRes = listRest.filter((rest) => {
              const regex = new RegExp(searchText, 'i') 
              return regex.test(rest.info.name)
            })
            
            setFilterRest(filterRes)
            
          }}>Search</button>
        </span>
      </div>
      <button className="p-1 border-2 border-black h-10 rounded-full inline-block text-center mx-5 my-1" onClick={() => {
        const filterRes = listRest.filter((rest) => rest.info.avgRating >= 4.3)
        setFilterRest(filterRes)
      }}>
        Top Rated Restaurant
      </button>
      <button className="p-1 border-2 border-black h-10 rounded-full inline-block text-center mx-5 my-1" onClick={() => {
        const filterRes = listRest.filter((rest) => rest.info.sla.deliveryTime < 20)
        setFilterRest(filterRes)
      }}>
        Delivery in less than 20 min
      </button>
      <div className="flex justify-around flex-wrap gap-5 p-5">
        {
          filterRest.map((rest) => (
            <Link key={rest.info.id} to = {'restaurant/' + rest.info.id}><RestCard resData={rest} /></Link>
          ))
        }
      </div>
    </div>
  );
}

export default Body;