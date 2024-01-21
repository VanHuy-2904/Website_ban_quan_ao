import React, { createContext, useEffect, useState } from "react";
// import all_product from "../assets/all_product";
import { json } from "react-router-dom";
import axios from "axios";
export const ShopContext = createContext(null);
export const authcontext = createContext(null);

// const getdaulftcart = () => {
//   let cart = {};
//   for (let index = 1; index <= all_product.length; index++) {
//     cart[index] = 0;
//   }
//   return cart;
// };

const Context = (props) => {
  // const [cartitem, setcartitem] = useState(getdaulftcart);
  // const addToCart = (itemid) => {
  //   setcartitem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
  //   console.log(cartitem);
  // };
  const [islogin, setislogin] = useState(false);
  const [userhoten, setuserhoten] = useState("");
  const login = (userdata) => {
    setislogin(true);
    localStorage.setItem("user", JSON.stringify(userdata));
    setuserhoten(userdata.name);

    console.log(userdata.email);
  };

  const logout = () => {
    setislogin(false);
    setuserhoten("");
    localStorage.removeItem("user");
  };
const [all_product, setallpro ] = useState([]);
  const getproduct = async () => {
  await axios.get("http://localhost:3000/api/product", {}).then((res) => {
      // console.log(res);
      setallpro(res.data)
      console.log(all_product)
    }).catch((err)=> {

    });
  };

  useEffect(() => {
    getproduct();
  }, [])
  const contextvalue = {
    all_product,
    // cartitem,
    // addToCart,
    login,
    userhoten,
    islogin,
    logout,
    setuserhoten,
  };

  return (
    <div>
      <ShopContext.Provider value={contextvalue}>
        {props.children}
      </ShopContext.Provider>
    </div>
  );
};

export default Context;
