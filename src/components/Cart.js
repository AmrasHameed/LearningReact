import { useDispatch, useSelector } from "react-redux";
import { ITEMIMG_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return(
        <div className="w-6/12 m-auto">
            <div className="relative text-center m-3 p-3 bg-gray-100 rounded-lg">
                <h1 className="text-2xl">Cart</h1>
                <button className="bg-orange-500 p-2 m-2 rounded-lg text-white hover:bg-white hover:text-orange-500 hover:border border-orange-500" onClick={handleClearCart}>Clear Cart</button>
            </div>
            {cartItems.length === 0 ? <></> :
            cartItems.map((item) => {
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
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Cart