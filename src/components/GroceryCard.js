import { GROCERY_IMAGE } from "../utils/constants"


const GroceryCard = (props) => {
    const grocery = props.data
    return grocery? (
        <div className="flex flex-col justify-center items-center w-36 h-36 p-2.5 rounded-lg shadow-lg mb-5">
            <img className="w-24 h-24 object-contain rounded-lg" src={grocery.imageId?GROCERY_IMAGE + grocery.imageId:''} alt={grocery.displayName} />
            <p className="mt-2.5 text-sm text-center font-bold">{grocery.displayName}</p>
        </div>
    ) : ''
}

export default GroceryCard