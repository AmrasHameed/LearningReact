import { useEffect, useState } from "react"
import { MENU_URL } from "./constants"


const useFetchResMenu = (resId) => {

    const [resData, setResData] = useState(null)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async() => {
        const data = await fetch(MENU_URL + resId)
        const json = await data.json()
        setResData(json)
    }
    return resData;
}

export default useFetchResMenu;