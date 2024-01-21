import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/context";
import "./Detail.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import red from "../assets/red.png";
import axios from "axios";


const Detail = () => {
  const { userhoten} = useContext(ShopContext);
  const islogin1 = localStorage.getItem("user");
  const { ProductId } = useParams();
  const { all_product } = useContext(ShopContext);
  console.log(ProductId);
  const product = all_product.find((e) => e.id === Number(ProductId));
  // console.log(product);
  const [selectimage, setselectimage ] = useState(product.image);
  const handesetimage = (image) => {
    setselectimage(image);
  }


const handelapi = async (email, name, price, image) => {
  try {
    await axios.post('http://localhost:3000/api/cart/addcart', {
  email: email,
  name: name,
  price: price,
  image: image,
  quantity: 1

  }).then((res)=> {
    console.log(res.data);
  })
  } catch (error) {
    console.log(error);
    
  }
}


  const {addToCart} = useContext(ShopContext);
  return (
    <div>
      <div className="main">
        <div className="left">
          <div className="color">
            {/* <img src={product.image} alt="" /> */}
            <img onClick={() =>handesetimage(product.image)} src={product.image} alt="" />

            <img onClick={() =>handesetimage(product.image)} src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="anh">
            <img src={selectimage} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="name">
            <h1>{product.name}</h1>
          </div>
          <div className="star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
          </div>
          <div className="price">
            <div className="oldprice">${product.old_price}</div>
            <div className="newprice">${product.new_price}</div>
          </div>
          <div className="mota">
            <p>Mô tả</p>
          </div>
          <div className="selectsize">
            <h2> Select Size</h2>
            <div className="boxsize">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
            </div>
          </div>
          <div className="button">
            <button onClick={()=>handelapi(JSON.parse(islogin1).email, product.name, product.new_price, product.image)}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
