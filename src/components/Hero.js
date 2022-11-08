import { Link } from "react-router-dom";
import HeroImg from "../assets/hero.jpg"

const Hero = () => {
    return ( 
        <div>
            <div className="md:m-8 m-4 flex  justify-center">
                <div className="absolute">
                    <img 
                        className="rounded-md" 
                        src={HeroImg} 
                        alt="Hero Image here" />
                </div>
                <div className="relative flex flex-col justify-center">
                    <h1>Discover a place you'll love to live</h1>
                    <div className="md:space-x-4">
                        <Link
                            className="bg-gray-400 px-4 py-2 rounded-md" to='/buy'>
                            Buy 
                        </Link>
                        <Link
                            className="bg-gray-400 px-4 py-2 rounded-md" to='/sell'>
                            Sell 
                        </Link>
                        <Link
                            className="bg-gray-400 px-4 py-2 rounded-md" to='/rent'>
                            Rent 
                        </Link>
                    </div>
                </div>

            </div>

            
        </div>
     );
}
 
export default Hero;