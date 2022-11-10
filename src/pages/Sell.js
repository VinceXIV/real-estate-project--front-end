import React, { useEffect, useState } from "react";
import PatchPostForm from "./PatchPostForm";
import HousesOnSale from "./HousesOnSale";

function Sell () {
  const [sellerHouses, setSellerHouses] = useState([])
  const apiHost = "http://localhost:9292"

  useEffect(()=>{
    fetch(`${apiHost}/sellers/2`)
    .then(result => result.json())
    .then(data => setSellerHouses(data.houses))
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
