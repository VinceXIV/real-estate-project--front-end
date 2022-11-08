import React from "react";
import Card from "./Card";
import Hero from "../components/Hero";
import { useEffect, useState } from "react"


function Buy() {

    const [houses, setHouses] = useState([])
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
        fetch("http://localhost:9292/houses")
        .then((responce)=>responce.json())
        .then((data)=>setHouses(data))
    },[])
    console.log(houses)
    return(
        <>
        <Hero  />
        <div style={imageCSS}>
            { houses.map((house)=> 
            <Card house={house} key={house.id} />
            )}
        </div>
        </>
    )
}

export default Buy