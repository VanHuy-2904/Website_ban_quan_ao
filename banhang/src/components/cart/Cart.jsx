import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Cart from '../../page/cart/cart';
import Topbar from "../topbar/topbar";


const CartDetail = () => {
    let sum = 0;
    const user = localStorage.getItem("user");

 
    const [product, setproduct] = useState([])
    const handelapi = async  () => {
  
   
  
      
        try {
          if(user) {
          const results = await axios.post('http://localhost:3000/api/cart', {
            email: JSON.parse(user).email,
           
          
            })
            .then((res) => {
              if(res.status === 200) {
                setproduct(res.data)
              console.log(res.data);
              }
              else {
                if(res.status === 404) {
                console.log("Lỗi");
                }
              }
             
            });
          }
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        handelapi();
      }, []);
  
  
    return (
      <>
  <Topbar/>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart</h5>
                </div>
                 
                { 
                product.length > 0 ?
                product.map((item, i)=> {
                  sum = sum + item.price * item.quantity;
                    return <Cart key = {i}  name = {item.name} image = {item.image} price = {item.price} quantity = {item.quantity}/>
                
            })

            : (
          
            <div style={{padding: "20px", fontSize: "20px", fontWeight: "bold"}}> Không có sản phẩm </div>
            
            )
            }
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p className="mb-0">12.10.2020 - 14.10.2020</p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                    alt="PayPal acceptance mark"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                    
                      <span>${sum}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>${sum}</strong>
                      </span>
                    </li>
                  </ul>
  
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    );
}

export default CartDetail
