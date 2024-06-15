import RESTIMG_URL, { STAR_URL } from "../utils/constants";

const RestCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } = resData?.info;
  
    return (
      <div className="restCard">
        <img className="restImg" src={RESTIMG_URL + cloudinaryImageId} />
        <p><b>{name}</b><br />
          {avgRating}<img className="rating" src={STAR_URL} /> • {sla.slaString} <br />
          {cuisines.join(', ')}<br />
          {areaName}</p>
      </div>
    );
  }

  export default RestCard;