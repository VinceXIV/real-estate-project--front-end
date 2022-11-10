import React from "react";
// import Card from "./Card";
import { useEffect, useState } from "react"
import LocationCategory from "./LocationCategory";


function Buy() {
    
    const [houses, setHouses] = useState([])
    const apiHost = "http://localhost:9292"
   
    useEffect(()=>{
        fetch(`${apiHost}/houses`)
        .then((responce)=>responce.json())
        .then((data)=>setHouses(data))
    },[])
    console.log(houses)
    return(
        <>
        {/* <Category /> */}
        <LocationCategory  />
        </>
    )
}

export default Buy