import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar.js";
import Footer from "./component/Footer.js";
import Home from "./pages/Home.js";
import Recipes from "./pages/Recipes.js";
import SignUp from "./pages/SignUp.js";
import SignIN from "./pages/SignIN.js";

function App(){
    return(
        <Router>
             <Navbar />
            <div className="container main">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/recipes" element={<Recipes/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/signin" element={<SignIN/>}/>

                </Routes>
            </div>
            <Footer/>
        </Router>
        
    );
}

export default App;