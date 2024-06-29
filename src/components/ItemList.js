import { ITEMIMG_URL } from "../utils/constants"

const ItemList = (props) =>{
    const {items} = props
    console.log(items)
    return(

        <div>
            {items.map((item)=>{
                return(
                    <div key={item.card.info.id} className="flex items-center justify-between text-left p-2 m-2 rounded-xl bg-gray-100 hover:bg-slate-400">
                        <div >
                            <h1 className="text-lg">{item.card.info.name}</h1>
                            <h1 className="text-lg">₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</h1>
                            <p className="text-sm">
                                {item.card.info.description}
                            </p>
                        </div>
                        { item.card.info.imageId && <img src={ITEMIMG_URL + item.card.info.imageId } className="rounded-2xl w-[156px] h-[144px] justify-center"></img>}    
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList