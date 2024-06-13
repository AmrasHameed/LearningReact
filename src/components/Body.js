import RestCard from "./RestCard";
import resData from "../utils/mockData";
``

let resData = resData;

const Body = () => {
    return (
      <div className="main">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <span>
            <button className="searchBtn">Search</button>
          </span>
        </div>
        <button className="filterRating" onClick={()=>{
          resData = resData.filter((rest)=>rest.info.avgRating > 4)
          console.log(rest);
        }}>
          Top Rated Restaurant
        </button>
        <div className="restCardContainer">
          {
            resData.map((rest) => (
              <RestCard key={rest.info.id} resData={rest}/>
            ))
          }
        </div>
      </div>
    );
  }

  export default Body;