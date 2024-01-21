import { useState } from "react";
import "./product.css"
import { Link, Outlet } from "react-router-dom";

export default function Product(){

    const [menu, setmenu] = useState('mens');

    return (
        <div className="Title">
            <ul className="Title-ul">
                <li onClick={()=> {setmenu('mens')}}> <Link  to = '/Mens'> Men {menu === 'mens' ? <hr/> : <></>} </Link>    </li>
                <li onClick={()=> {setmenu('womens')}}> <Link to = '/Womens'> Women {menu === 'womens' ? <hr/> : <></>} </Link>  </li>
                <li onClick={()=> {setmenu('kids')}}> <Link to = '/Kids'> Kid {menu === 'kids' ? <hr/> : <></>} </Link>  </li>

            </ul>
            <Outlet/>

        </div>
    )
}