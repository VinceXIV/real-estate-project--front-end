import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Buy from "./pages/Buy";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Rent from "./pages/Rent";
import Sell from "./pages/Sell";
import Footer from "./components/Footer"


const App = () => {
    return ( 
        <>
            <BrowserRouter>
                <div className="App m-0 p-0">
                    <Navbar />

                    <Routes>
                        <Route path='/' element={ <Home />} />
                        <Route path='/buy' element={ <Buy />} />
                        <Route path='/sell' element={ <Sell />} />
                        <Route path='/rent' element={ <Rent />} />
                        <Route path='/contact' element={ <Contact />} />
                    </Routes>
                    <Footer/>
                </div>
            
            </BrowserRouter>
            
            
            
        </>
     );
}
 
export default App;