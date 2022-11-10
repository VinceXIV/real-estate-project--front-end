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
          allHouses.filter(house => house.location === e.target.value)
        )
      })
    }
   

    return(
        <>
          <div className="flex flex-col items-center lg:mx-32 md:mx-16 mx-8">
              <label  className="block mb-4 lg:text-3xl md:text-2xl text-lg font-medium text-blue-500">Select Properties By Region:</label>
              <select onChange={filterHandler} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <Locations houses={allHouses} displayedHouses={displayedHouses}/>
              </select>
          </div>

          <div style={imageCSS} className="flex flex-wrap">
            {displayedHouses.map((house) => (
              <Card key={house.id} house={house}/>
            ))} 
          </div>
        </>
    )
}

export default LocationCategory;