import { useState } from "react"
import ItemList from "./ItemList"

const RestCategory = ({category, showItems, setShowIndex}) => {
    const [showItem, setShowItem] = useState(false)
    const handleClick = () =>{
        showItem?setShowItem(false):setShowItem(true)
        setShowIndex()   
    }
    return(
        <div>
            <div className="flex justify-between items-center rounded-xl p-2 m-3 cursor-pointer bg-gray-100 hover:bg-slate-400" onClick={handleClick}>
                <h1 className="text-xl text-left">{category.title} ({category.itemCards.length})</h1>
                <h1 className="ml-auto">🔽</h1>   
            </div>
            {showItems && showItem && <ItemList items={category.itemCards}/>}
        </div>
    )
}

export default RestCategory