import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import HomePage from "../pages/HomePage";
import ViewNews from "../pages/News/ViewNews";

function Routing(){
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact path = "/" element= {<HomePage/>} />
            <Route exact path = "/news/view/:id" element= {<ViewNews/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default Routing;