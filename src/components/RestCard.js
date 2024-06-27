import RESTIMG_URL, { STAR_URL } from "../utils/constants";

const RestCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } = resData?.info;

  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg w-[230px] h-[300px] my-5 mx-5 p-5  transition-shadow duration-300 ease-in hover:scale-95 hover:shadow-none">
      <img className="w-full h-[45%] object-cover rounded-md" src={`${RESTIMG_URL}${cloudinaryImageId}`} alt="Restaurant Image" />
      <div className="w-full text-left mt-2">
        <b className="font-bold">{name}</b><br />
        <span className="flex items-center">
          <span>{avgRating}</span>
          <img className="w-3 h-auto relative top-0 left-0.5" src={STAR_URL} alt="Star Icon" />
          <span className="ml-1">{sla.slaString}</span>
        </span>
        <div>{cuisines.join(', ')}</div>
        <div className="font-semibold">{areaName}</div>
      </div>
    </div>
  );
}

export default RestCard;