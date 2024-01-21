import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className="item">
      <div className="items">
        <Link to = {`/detail/${props.id}`}> 
        <img src={props.image} alt=''/>

        </Link>
        <p>{props.name}</p>
        <div className="price">
            <div className="priceold">{props.priceold}</div>
            
        </div>
        <div className="newprice">
            {props.newprice}
        </div>
        </div>
    </div>
  )
}

export default Item
