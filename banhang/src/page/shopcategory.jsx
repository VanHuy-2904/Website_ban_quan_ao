import React, { useContext } from 'react'
import { ShopContext } from '../components/context/context'
import Item from '../components/item/item';
import "./shopcategory.css"
const Shopcategory = (props) => {
    const {all_product} = useContext(ShopContext);
 
   
  return (
  
    
   <div className="shop-category">
        <div className="product">
            {all_product.map((item, i)=> {
                if(props.category === item.category){
                    return <Item key = {i} id = {item.id} name = {item.name} priceold = {item.old_price} newprice = {item.new_price} image = {item.image}/>
                }
                else { return null}
            })}
        </div>
   </div>
 
  )
}

export default Shopcategory
