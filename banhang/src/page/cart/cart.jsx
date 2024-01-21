import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Cart = (props) => {


  return (
    <section className="h-100 gradient-custom">
 
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                    <div
                      className="bg-image hover-overlay hover-zoom ripple rounded"
                      data-mdb-ripple-color="light"
                    >
                      
                      <img
                        src={props.image}
                        className="w-100"
                        alt=""
                      />
                      <a href="#!">
                        <div
                          className="mask"
                          style={{
                            backgroundcolor: "rgba(251, 251, 251, 0.2)",
                          }}
                        ></div>
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                    <p>
                      <strong>{props.name}</strong>
                    </p>
                    <p>Color: blue</p>
                    <p>Size: M</p>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm me-1 mb-2"
                      data-mdb-toggle="tooltip"
                      title="Remove item"
                    >
                      {/* <i className="fas fa-trash"></i> */}
  <FontAwesomeIcon icon="fa-solid fa-trash" />

                    </button>
                    
                     
                  </div>

                  <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <div className="d-flex mb-4" style={{ maxwidth: "300px" }}>
                      <button
                        className="btn btn-primary px-3 me-2 h-50"
                       
                      >
                        {/* <i className="fas fa-minus"></i> */}
                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                      </button>

                      <div className="form-outline">
                        <input
                          id="form1"
                          min="0"
                          name="quantity"
                          value={props.quantity}
                          type="number"
                          className="form-control"
                        />
                        <label className="form-label" for="form1">
                          Quantity
                        </label>
                      </div>

                      <button 
                        className="btn btn-primary px-3 ms-2 h-50"
                        
                      >
                        <FontAwesomeIcon icon="fa-solid fa-minus" />

                      </button>
                    </div>

                    <p className="text-start text-md-center">
                      <strong>${props.price}</strong>
                    </p>
                  </div>
                </div>

                <hr className="my-4" />
              </div>
           
    </section>
  );
};

export default Cart;
