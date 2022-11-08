import React from "react";
import Card from "./Card";
import Hero from "../components/Hero";


function Buy() {
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
            <Card   />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

        </div>
        </>
    )
}

export default Buy