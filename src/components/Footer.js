import { Link } from "react-router-dom";
import {FaTwitter,FaInstagram,FaGithub,FaFacebook,FaPhone} from "react-icons/fa";
const Footer = () => {
    return ( 
        <div>
            <footer class="bg-slate-200 px-4 py-2">
            {/* <div class="  mb-2 flex justify-center py-2"> Jamii Properties </div>
            <div class="italics text-center text-sm py-1" > Giving you the best service</div>
            <div>
                <ol>
                    <li>
                    <FaPhone>Reach us through  0700-000-000</FaPhone> 
                    </li>
                    <li> <p class="mb-4">
                        <Link   to='/About'>
                            About
                        </Link> </p></li>
                    <li> Support</li>
                </ol>
            </div> */}
            
                <div class="grid md:grid-cols-3  text-sm  px-5 py-5 " >
                    <div class="w-1/3 px-5 py-5 ">
                        <div class="block font-semibold mb-4 flex justify-center md:justify-start"> Jamii Properties </div>
                        <p>The best website to buy long-lasting homes </p>
                    </div>
                    <div class="w-1/3 px-5 py-5">
                        <h3 class=" font-semibold mb-4 flex justify-center md:justify-start"> Links</h3>
                        <p class="mb-4">
                        <Link   to='/'>
                            Home
                        </Link> </p>
                        <p class="mb-4 ">
                        <Link  to='/About'>About</Link> </p>
                        <p class="mb-4">
                        <Link   to='/Contact'>Contact </Link> </p>
                        
                    </div>
                    <div class="w-1/3 px-5 py-5">
                        <h3 class="block font-semibold mb-4 flex justify-center md:justify-start">Support</h3>
                        <p class="mb-4">
                        <Link to='/About'>About </Link> </p>
                        <p class="mb-4">
                        <Link   to='/Support'>Support </Link></p>
                    
                        <p class="mb-4 ">
                        <Link  to='/HelpCenter'> Help Center </Link>  </p>
                       
                       
                    </div>
                    </div>
                
                   
                <hr class="my-2 border-blue-800 sm:mx-auto dark:border-blue-700 lg:my-2" />
                <div class="text-sm text-gray-500 sm:text-center italic">Copyright © 2022 Jamii Cooperatives™ || All Rights Reserved.
                </div>
                <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0 px-5 py-5">
                <FaInstagram/>
                <FaTwitter/>
                <FaGithub/>
                <FaFacebook/>
                           
                        
                        </div>

                
                    </footer>
                </div>
     );
}
 
export default Footer;