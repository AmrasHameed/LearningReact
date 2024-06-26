import { useDispatch } from "react-redux";
import { ITEMIMG_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice";

const ItemList = (props) => {
    const { items } = props;
    const dispatch = useDispatch()
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div>
            {items.map((item) => {
                return (
                    <div key={item.card.info.id} className="flex items-center justify-between text-left p-2 m-2 rounded-xl bg-gray-100">
                        <div>
                            <h1 className="text-lg">{item.card.info.name}</h1>
                            <h1 className="text-lg">₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</h1>
                            <p className="text-sm">
                                {item.card.info.description}
                            </p>
                        </div>
                        <div className="relative flex-shrink-0 w-[156px] h-[144px]">
                            {item.card.info.imageId && 
                                <img src={ITEMIMG_URL + item.card.info.imageId} className="rounded-2xl w-[150px] h-[140px] object-cover" />
                            }
                            <button className=" absolute -bottom-2 left-1/2 transform -translate-x-1/2 py-2 px-8 bg-white text-green-500 rounded-lg border border-gray-200 shadow-xl hover:bg-gray-200" onClick={()=>handleAddItem(item)}>
                                <span className="font-bold font-sans text-lg">ADD</span> 
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ItemList;



export default ItemList