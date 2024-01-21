import React from 'react'
import data_product from "../assets/data"
import Item from '../item/item'
import './popular.css'
const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular in women</h1>
      <hr/>

      <div className="product">
        {data_product.map((e, i) => {
                    return <Item key = {i} id = {e.id} name = {e.name} priceold = {e.old_price} newprice = {e.new_price} image = {e.image}/>
                })}
      </div>
    </div>
  )
}

export default Popular
