import { GROCERY_IMAGE } from "../utils/constants"


const GroceryCard = (props) => {
    const grocery = props.data
    return (
        <div className="grocDiv">
            <img className="grocImage" src={GROCERY_IMAGE + grocery.imageId} alt={grocery.displayName} />
            <p className="grocName">{grocery.displayName}</p>
        </div>
    )
}

export default GroceryCard