import useFetch from "./useFetch";
import { useParams } from "react-router-dom";

const HouseDetails = () => {
    const { id } = useParams();
    const {data: house, isLoading, error} = useFetch("http://localhost:9292/houses" + id);

    return ( 
        <div className="md:m-24 m-6">
            {/* test house details with id */}
            <h1 className="md:text-3xl text-xl font-semibold md:mb-8 mb-4 text-gray-900">House Details - <span className="text-pink-500">{id}</span></h1> 
            { isLoading && <h4 className="text-blue-500 font-semibold md:text-2xl text-xl">Loading data..</h4>}
            { error && <h4 className="text-red-500">{ error }</h4>}
            {house && (
                <div className="flex items-center ">
                    <article>
                        <img className="mb-4 w-full rounded-lg" src={house.image} alt="" />
                        <h2 className="font-semibold text-pink-700 md:text-2xl text-xl hover:text-gray-800">{house.title}</h2>
                    </article>
                </div>
            )}


        </div>
     );
}
 
export default HouseDetails;