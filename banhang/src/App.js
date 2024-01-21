
// import { Login } from "@mui/icons-material";
// import "./page/login.js"
import Ship from "./components/Ship/ship";
import Product from "./components/product/product";
import Siderbar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/topbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./page/login/Login.js";
import Shopcategory from "./page/shopcategory.jsx";
import Popular from "./components/popular/popular.jsx";

function App() {

  return (
    <>
    {/* <BrowserRouter> */}
    <Topbar />
   
    <Siderbar/>
    <Ship/>
    <Popular/>
    <Product/>
    {/* <Routes> */}
    {/* <Route path="/Mens" element = {<Shopcategory category = 'men'/>}/>
    <Route path="/Womens" element = {<Shopcategory category = 'women'/>}/>
    <Route path="/Kids" element = {<Shopcategory category = 'kid'/>}/> */}
    
    {/* <Route path="/login" element = {<Signup/>}/> */}

    {/* </Routes>
    </BrowserRouter> */}
    </>
  )
}

export default App;
