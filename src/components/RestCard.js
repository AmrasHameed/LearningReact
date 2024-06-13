import RESTIMG_URL from "../utils/constants";

const RestCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } = resData?.info;
  
    return (
      <div className="restCard">
        <img className="restImg" src={RESTIMG_URL + cloudinaryImageId} />
        <p><b>{name}</b><br />
          {avgRating}<img className="rating" src="https://img.icons8.com/?size=100&id=enP6M_u0BXV3&format=png&color=40C057" />• {sla.slaString} <br />
          {cuisines.join(', ')}<br />
          {areaName}</p>
      </div>
    );
  }

  export default RestCard;