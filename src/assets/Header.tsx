
import * as Ci from "react-icons/ci"

import CartImage from "../images/Vector.png"
import { NavLink } from "react-router-dom"
// import { useCart } from "react-use-cart";
import { useContext } from "react";
// import { useState, useEffect } from "react";
// import { useCart } from "react-use-cart";
import {ShoppingContext} from "./ShopContext";



interface HeaderProps {
  // size: number;
}

const Header: React.FC<HeaderProps> = () => {
//  function Header({size}:{size:string}) {
  const GlobalState = useContext(ShoppingContext)!;
 
  const state = GlobalState.state;

    return (
      <>
    <div>
      <div className="Header">
        <div className="testing">
        <div>
        <h1 className='Header--logo'>FOOTFASHION</h1>
        </div>

          <div className="Menubar--container">
            <div className="Menuebar">
              <ul>
              <NavLink to="/" >  <li>HOME</li></NavLink>
             <NavLink to="Shop"> <li>SHOP</li></NavLink>     
             <NavLink to="Sales"> <li>SALES</li></NavLink>  
              </ul>
            </div>  
          </div>

          </div>
          <div className="Menue--icon">
            <Ci.CiSearch className="search--icon"/>
            <NavLink to="/Cart" className="cartIcon">   <img src={CartImage} alt="Cart"  /></NavLink> 
            <span className="Cart-countHolder">{state.length}</span>  
            </div>
        </div>
    </div>
      </>
    )
  }

  export default Header;



//   function Header (){
//     return (
//         <div>
//            <div className=''>
//             <div className='flex bg-[#141B34] p-4 text-white'>
//            <div className='   font-[Arial] font-extrabold'>
//            
//            </div>

//            <div className='Menue '>
//             <div className=''>
//             <ul className=''>
//                 <li>HOME</li>
//                 <li>SHOP</li>
//                 <li>SALES</li>
//             </ul>
            
//             </div>


//            </div>
//            </div>

          

         
