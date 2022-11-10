import React, { useEffect, useState } from "react";
import PatchPostForm from "./PatchPostForm";
import HousesOnSale from "./HousesOnSale";

function Sell () {
  const [sellerHouses, setSellerHouses] = useState([])
  const apiHost = "http://localhost:9292"

  useEffect(()=>{
    fetch(`${apiHost}/sellers/1`)
    .then(result => result.json())
    .then(data => {
      setSellerHouses(data.houses.map(house => (
        {
          ...house,
          location: house.location.category,
          category: house.category.category
        }   
      )))
      console.log("seller houses after processing: ", sellerHouses)
    })
  }, [])

  return (
    <div className="flex flex-col">
      <PatchPostForm/>
      <div className="flex my-10">
        <HousesOnSale houses={sellerHouses}/>
      </div>
    </div>
  )
}

export default Sell;
