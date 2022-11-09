const Contact = () => {
    return ( 
        <div class="px-5" >
            <div class="grid md:grid-cols-2 ">
                <div> 
                    <h1  class="text-3xl font-bold text-center"> Contact us </h1>
                     <span><h4 class="py-5 text-center ">Get in touch with our Agents</h4></span>
                     <form class="w-full max-w-lg">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">First Name</label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">Last Name</label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">Phone Number</label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id=" tel" type="tel" placeholder="07xx-xxx-xxx"/>
                                <p class="text-gray-600 text-xs italic">Phone Number follows this format 0xxx-xxxxxx</p>
                                </div>
                            </div>
                            {/* <div class="flex flex-wrap -mx-3 mb-6"> */}
                                <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password"> Message </label>
                                <textarea class="form-control
                                        block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="text"  rows="7" columns="20"></textarea>
                                        </div>
                                <div className="submit-btn py-4">
                                    <button className='border py-2 text-white bg-indigo-500 w-full'>Send Message</button>
                                </div>
                         
                    
                                
                     </form>
                 </div>
                 <div class="bg-orange-500 ">
                    <h1 > location</h1>
                </div>
            </div>    
    
    

    
    
    <footer class="bg-slate-200">
    <div class="grid md:grid-cols-4 gap-4 " >
        <div class="w-1/4">
            <h2>JAMII PROPERTIES</h2>
            <p>Lorem hhhhashdoaNILHDUUUUUA </p>

        </div>
        <div class="w-1/4"><h3> LINKS</h3>
        <div>Home</div>
            <div>About</div>
            <div>Project</div>
            <div>Contact</div>

             </div>
        <div class="w-1/4"> <h3> SUPPORT</h3>
        <div>FAQs</div>
            <div>Support</div>
            <div>Help Center</div>
            <div>Home</div>

        </div>
        <div class="w-1/4"> 
        <h3>CONTACT</h3>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>

            </div> 


            


    </div>
    <h6 class="text-center"> COPYRIGHT @ 2022 | JAMII COOPERATIVES</h6>
    </footer>
  
   </div>
  
        
     );
}
 
export default Contact;