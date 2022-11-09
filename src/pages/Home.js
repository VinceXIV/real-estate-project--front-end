import Hero from "../components/Hero";
import HouseList from "../components/HouseList";
import useFetch from "../components/useFetch";

const Home = () => {
    const {data: houses, isLoading, error} = useFetch("http://localhost:9292/houses")


    return ( 
        <div className="lg:mx-28 md:mx-12 mx-6 md:my-16 my-8">
            { isLoading && <h4 className="text-blue-500 font-semibold md:text-2xl text-xl">Loading data..</h4>}
            { error && <h4 className="text-red-500">{ error }</h4>}
            <Hero />

            {/* filter purchase houses only */}
            <HouseList houses={houses} listTitle = "Buy A House" />

            {/* filter purchase houses only */}
            <HouseList houses={houses} listTitle = "Sell A House" />


        </div>
     );
}
 
export default Home;