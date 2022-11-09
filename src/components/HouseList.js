import { Link } from "react-router-dom";
const HouseList = ({houses, listTitle}) => {

    return ( 
        <div>
            <div className="house-list md:mb-32 mb-16">
                <h1 className="md:text-3xl text-2xl font-semibold my-2">{listTitle}</h1>
                <div className="grid sm:grid-cols-3 md:gap-12 sm:gap-6">
                    {houses.map((house) => (
                        <div key={house.id} className="houses-list bg-gray-200 md:p-6 p-3 rounded-lg my-4">
                            <Link to={`/${house.id}`} >
                                <img className="mb-4 w-full rounded-lg" src={house.image} alt="" />
                                <h2 className="font-semibold text-blue-600 md:text-2xl text-xl hover:text-gray-800">{house.category}</h2>
                                <h3 className="text-gray-700">{house.location}</h3>
                                <p>{house.description.split(/\s+/).slice(0, 20).join(" ")}</p>
                                <h3 className="text-lg text-green-800 font-medium">Ksh {house.price}</h3>
                            </Link>
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default HouseList;