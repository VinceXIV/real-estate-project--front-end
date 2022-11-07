import { Link } from "react-router-dom";

const Navbar = () => {

    return ( 
        <div className="navbar-container">
                <nav className='bg-blue-400 py-4 px-4'>
                    <div className="navbar md:flex  justify-around items-center " >
                        <div className='flex items-center justify-between'>
                            <Link to='/' className='md:text-3xl text-2xl uppercase font-semibold '>Kwako Realtors</Link>
                        </div>

                        <div className="md:flex hidden ">
                            <ul className="md:flex items-center md:text-lg font-medium">
                                <li className='md:mx-8 md:my-0 my-2'>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li className='md:mx-8 md:my-0 my-2'>
                                    <Link to='/buy'>Buy</Link>
                                </li>
                                <li className='md:mx-8 md:my-0 my-2'>
                                    <Link to='/sell'>Sell</Link>
                                </li>
                                <li className='md:mx-8 md:my-0 my-2'>
                                    <Link to='/rent'>Rent</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            
            </div>
     );
}
 
export default Navbar;