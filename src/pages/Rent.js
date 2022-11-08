import React from "react";
import Hero from "../components/Hero";

const Rent = () => {
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

    return(
        <>
        <Hero  />
        <div style={imageCSS}>

        </div>
        </>
    )
}
 
export default Rent;