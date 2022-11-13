import React from 'react';
import './navbar.css';


const Navbar = ({size, setShow}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
            CEYLAN AVM
            <i className="fa fa-envira" aria-hidden="true"></i>
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                    
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar