import { useEffect, useState } from "react";

function Sell() {
  const [houses, setHouses] = useState([])
  const apiHost = "http://localhost:9292"

  useEffect(() => {
    fetch(`${apiHost}/houses/sellers`)
      .then((responce) => responce.json())
      .then((data) => setHouses(data))
  }, [])
  console.log(houses)

  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          location: location,
          category: category,
          price: price,
          description: description,
          image: image,
          size: size,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setLocation("");
        setCategory("");
        setPrice("");
        setDescription("");
        setImage("");
        setSize("");
      } else {
        setHouses("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div class="p-10">
      <div class="flex flex-col justify-center items-center p-8" >
        <form class="w-full max-w-sm flex flex-col" onSubmit={handleSubmit}>
          <div class="md:flex md:justify-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Location
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" placeholder="Enter Location" />
            </div>
          </div>
          <div class="md:flex md:justify-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                Category
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" placeholder="Enter Category" />
            </div>
          </div>
          <div class="md:flex md:justify-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Price
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="number" placeholder="Enter Price" />
            </div>
          </div>
          <div class="md:flex md:justify-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                Description
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-password" type="text" placeholder="Enter Description" />
            </div>
          </div>
          <div class="md:flex md:justify-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Image
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="url" placeholder="Upload Image link" />
            </div>
          </div>
          <div class="md:flex md:justify-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Size in Sqft
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="number" placeholder="Enter Size" />
            </div>
          </div>
          <div class="md:flex md:justify-center">
            <div class="md:w-2/3">
              <button class="shadow bg-green-400 hover:bg-green-600 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" type="button">
                Post House
              </button>
            </div>
            <div class="md:w-2/3">
              <button class="shadow bg-green-400 hover:bg-green-600 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" type="button">
                Update House
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Sell;
