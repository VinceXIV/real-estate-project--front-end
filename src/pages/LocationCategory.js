import React, { useState, useEffect } from "react";
import Card from "./Card";

function LocationCategory(){
    const [selectedCategory, setSelectedCategory] = useState([])
    const [houses, setHouses] = useState([])
    const [locations, setLocations] = useState([])
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
        .then((data)=>setHouses(data))
    },[])
    useEffect(()=>{
        fetch(`${apiHost}/locations`)
        .then((responce)=>responce.json())
        .then((data)=>setLocations(data))

    },[])
    console.log(locations)
    console.log(houses)


    function filterHandler(e){
      setSelectedCategory(e.target.value) 
    }
    const displayHouses = houses.filter((house)=>{
      if (selectedCategory === "All"){
        return true;
      }else{
        return house.location_id === selectedCategory
      }
    })

    return(
        <>
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select a Region</label>
            <select onChange={filterHandler} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option defaultValue={0}>Choose a Region</option>
                <option value="All">All Houses"</option>
                <option value="11">Kisumu"</option>
                <option value="10">Kakamege</option>
                <option value="8">Nairobi</option>
                <option value="9">Mombasa</option>
            </select>
        <div style={imageCSS}>
        {displayHouses.map((house) => (
          <Card key={house.id} house={house}/>
        ))} 
        </div>
        </>
    )
}

export default LocationCategory;