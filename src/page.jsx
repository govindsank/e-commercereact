import { BrowserRouter, Routes, Route } from "react-router-dom";
import MW from "./middleware/middleware";
import Home from "./home";
import Nav from "./nav";
import Mobile from "./mobile";
import Laptop from "./Laptop";
// import Upload from "./upload"


function App(){
    return(
        <BrowserRouter>
        <Nav />
        <Routes>
        <Route index element={<Home />}/>
        <Route path="/mobile" element={<Mobile />}/>
        <Route path="/laptop" element={<Laptop />}/>
        </Routes>
        </BrowserRouter>
    );
}
export default App