import React, { useState, useEffect } from "react";
import Card from "./Card";
import Locations from "./Locations";
import { Select } from 'antd';


function LocationCategory(){
    const [allHouses, setAllHouses] = useState([])
    const [displayedHouses, setDisplayedHouses] = useState([])
    const apiHost = "http://localhost:9292"

    const imageCSS = {
      width: "100%",
      maxWidth: "1240px",
      margin: "0 auto",
      paddingTop: "50px",
      paddingBottom: "100px",
       
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
        <label style={{fontSize: "25px", paddingTop: "50px"}} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select a Region</label>
        <div>
              <Locations key={allHouses.id} houses={allHouses} displayedHouses={displayedHouses} filterHandler={filterHandler}/>
          </div>
        <div style={imageCSS}>
        {displayedHouses.map((house) => (
          <Card key={house.id} house={house}/>
        ))} 
        </div>
        </>
    )
}

export default LocationCategory;