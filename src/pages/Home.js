import Hero from "../components/Hero";
import HouseList from "../components/HouseList";
import useFetch from "../components/useFetch";

const Home = () => {
    const {data, isLoading, error} = useFetch("")


    return ( 
        <div className="lg:mx-28 md:mx-12 mx-6 md:my-16 my-8">
            { isLoading && <h4 className="text-blue-500 font-semibold md:text-2xl text-xl">Loading data..</h4>}
            { error && <h4 className="text-red-500">{ error }</h4>}
            <Hero />

            <HouseList />

            {/* filter rental houses only */}
            <HouseList  />

            {/* filter purchase houses only */}
            <HouseList  />


        </div>
     );
}
 
export default Home;