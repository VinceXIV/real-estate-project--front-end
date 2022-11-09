import useFetch from "./useFetch";
import { useParams } from "react-router-dom";

const HouseDetails = () => {
    const { id } = useParams();
    const {data: house, isLoading, error} = useFetch("http://localhost:9292/houses/" + id);

    return ( 
        <div className="md:m-24 m-6">
            {/* test house details with id */}
            <h1 className="md:text-3xl text-xl font-semibold md:mb-8 mb-4 text-gray-900">House Details - <span className="text-red-500">{id}</span></h1> 
            { isLoading && <h4 className="text-blue-500 font-semibold md:text-2xl text-xl">Loading data..</h4>}
            { error && <h4 className="text-red-500">{ error }</h4>}
            {house && (
                <div className="md:flex rounded-xl bg-gray-100 lg:p-12 md:p-8 p-6">
                    <div>
                        <h2 className="mb-2 font-semibold md:text-2xl text-xl text-gray-800">{house.description}</h2>
                        <p className="mb-4">{house.category}, {house.location}</p>
                        <img className="mb-4 w-full rounded-lg" src={house.image} alt="" />
                    </div>
                    <aside className="md:p-8 py-2">
                        <p>{house.size_in_sqft}</p>
                        <p className="md:text-lg font-light">{house.description}</p>
                        <p className="my-2 font-medium text-green-600">$ {house.price}</p>
                        <button className="px-4 py-3 rounded-md bg-blue-400">
                            Book Now
                        </button>
                    </aside>
                </div>
            )}


        </div>
     );
}
 
export default HouseDetails;