import React, { useState, useEffect } from "react";
import Card from "./Card";
import Locations from "./Locations";

function LocationCategory(){
    const [allHouses, setAllHouses] = useState([])
    const [displayedHouses, setDisplayedHouses] = useState([])
    const apiHost = "http://localhost:9292"

    const imageCSS = {
      width: "100%",
      maxWidth: "1240px",
      margin: "0 auto",
      paddingTop: "50px",
       
      display: "grid",
       
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "auto",
      gridGap: "20px",
    }
    
    useEffect(()=>{
        fetch(`${apiHost}/houses`)
        .then((responce)=>responce.json())
        .then((data)=>{
          setAllHouses(data)
          setDisplayedHouses(data)
        })
    },[])

    function filterHandler(e){
      setDisplayedHouses(displayedHouses => {
        return (
          allHouses.filter(house => house.location == e.target.value)
        )
      })
    }
   

    return(
        <>
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select a Region</label>
            <select onChange={filterHandler} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <Locations houses={allHouses} displayedHouses={displayedHouses}/>
            </select>
        <div style={imageCSS} className="flex flex-wrap">
          {displayedHouses.map((house) => (
            <Card key={house.id} house={house}/>
          ))} 
        </div>
        </>
    )
}

export default LocationCategory;