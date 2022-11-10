import React, { useState } from "react";

function Sell () {
  const divStyle = {
    paddingTop: "100px",
    paddingBottom: "100px"
  }

  const [location, setLocation]=useState("")
  const [category, setCategory]=useState("")
  const [price, setPrice]=useState("")
  const [description, setDescription]=useState("")
  const [image, setImage]=useState("")
  const [size, setSize]=useState("")
  const apiHost = "http://localhost:9292"
  
  const submitHandler = (e)=>{
    e.preventDefault();
    const newHouse = {location, category, price, description, image, size}
    console.log(newHouse)
    fetch(`${apiHost}/houses`, {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newHouse)
    }).then(() => {
      console.log('working')
    })
  }

  return (
    <div margin="auto" display="grid" place-items="center" style={{divStyle}}>
      <form className="w-full max-w-sm flex flex-col" onSubmit={submitHandler}>
        <div className="md:flex md:justify-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              Location
            </label>
          </div>
          <div className="md:w-2/3">
            <input value={location} onChange={(e)=> setLocation(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Enter Location" />
          </div>
        </div>
        <div className="md:flex md:justify-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
              Category
            </label>
          </div>
          <div className="md:w-2/3">
            <input value={category} onChange={(e)=> setCategory(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Enter Category" />
          </div>
        </div>
        <div className="md:flex md:justify-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              Price
            </label>
          </div>
          <div className="md:w-2/3">
            <input value={price} onChange={(e)=> setPrice(e.target.value)}  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" placeholder="Enter Price" />
          </div>
        </div>
        <div className="md:flex md:justify-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
              Description
            </label>
          </div>
          <div className="md:w-2/3">
            <input value={description} onChange={(e)=> setDescription(e.target.value)}  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Enter Description" />
          </div>
        </div>
        <div className="md:flex md:justify-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              Image
            </label>
          </div>
          <div className="md:w-2/3">
            <input value={image} onChange={(e)=> setImage(e.target.value)}  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="url" placeholder="Upload Image link" />
          </div>
        </div>
        <div className="md:flex md:justify-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              Size in Sqft
            </label>
          </div>
          <div className="md:w-2/3">
            <input value={size} onChange={(e)=> setSize(e.target.value)}  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" placeholder="Enter Size" />
          </div>
        </div>
        <div className="md:flex md:justify-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button onClick={submitHandler} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Post House
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Sell;
