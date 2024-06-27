import { useEffect, useState } from "react"
import GroceryCard from "./GroceryCard"
import Shimmer from "./Shimmer"
import { GROCERY_URL } from "../utils/constants"

const Instamart = () => {

    const [grocery, setGrocery] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(GROCERY_URL)
        const json = await data.json();
        setGrocery(json?.data?.widgets[1]?.data)
    }

    if(!grocery.length) return <Shimmer />

    return (
        <div className="flex flex-col p-5">
            <h4>SHOP BY CATEGORY</h4>
            <div className="flex flex-wrap gap-5">
                {grocery.map(item => (
                    <div  key={item.nodeId}>
                        <GroceryCard data={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Instamart;

