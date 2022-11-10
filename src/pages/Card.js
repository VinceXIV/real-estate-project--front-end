import React from "react";


function Card({house}) {
    const imageStyle = {
        width: "400px",
        height: "400px",
        objectFit: "contain"
      }
    
    return(
<>
    <div  className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div >
            <img style={imageStyle} className="rounded-t-lg" src={house.image} alt="" />
        </div>
        <div className="p-5">
            <div >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{house.category}</h5>
                <h1 style={{color: "#023481", fontSize: "25px", fontWeight: "bold"}}>{house.location}</h1>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{house.description}</p>
            <h1 style={{color: "#0B6504", fontSize: "20px", fontWeight: "bold"}}>${house.price}</h1>
        </div>
    </div>
</>
)}

export default Card