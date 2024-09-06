
import * as Ci from "react-icons/ci"
import * as FaIcons from "react-icons/fa"
import CartImage from "../images/Vector.png"
import { NavLink } from "react-router-dom"
// import { useCart } from "react-use-cart";
import { useContext, useState, useEffect} from "react";
// import { useState, useEffect } from "react";
// import { useCart } from "react-use-cart";
import {ShoppingContext} from "./ShopContext";



interface HeaderProps {
  // size: number;
}

const Header: React.FC<HeaderProps> = () => {
  const [activeOpen, setOpen] = useState(false)
  const [navbar, setNavbar] = useState(false)
 
//  function Header({size}:{size:string}) {
  const GlobalState = useContext(ShoppingContext);

  if (!GlobalState) {
    return <div>Error: Item not not available</div>;
  }
 
  const state = GlobalState.state;

  const showSideBar = ()=>{

    setOpen(!activeOpen)
    // setIsOpen(!isOpen);
}

const closeSideBar = () => {
    setOpen(false);
  };

  const stickHeader = ()=>{
    if(window.scrollY >= 70){
      setNavbar(true)
      // console.log(window.scrollY)
    }else{
      setNavbar(false)
    }
    
  }

  useEffect(() => {
    window.addEventListener("scroll", stickHeader);
    return () => {
      window.removeEventListener("scroll", stickHeader);
    };
  }, []);

  // window.addEventListener("scroll", stickHeader);


    return (
      <>
    <div className="header--container">
       <div className={`Header ${navbar && "Header active"} `}>
         <div className="testing">
          <div className="Menubar--handle" onClick={showSideBar}>
          {activeOpen ? <FaIcons.FaTimes className="hamburger-" size={20}/>  : 
          <FaIcons.FaBars className= "hamburger" size={20}/>}
          </div>
          <div>
        <h1 className='Header--logo'>FOOTFASHION</h1>
        </div>

          <div className="Menubar--container">
            <div className={`Menuebar ${activeOpen ? "open" : "close"} `}>
              <ul>
                {/* <li>HOME</li> */}
             <NavLink to="/"> <li onClick={() => { closeSideBar() }}>SHOP</li></NavLink>     
             <NavLink to="Shop"> <li onClick={() => { closeSideBar() }} >SALES</li></NavLink>  
              </ul>
            </div>  
          </div>

          </div>
          <div className="Menue--icon">
            <Ci.CiSearch className="search--icon"/>
            <NavLink to="/Cart" className="cartIcon">   <img src={CartImage} alt="Cart"  />
            <span className={state.length > 0 ? "Cart-countHolder": "Cart-countHolder--empty" }>
              {state.length}</span>  </NavLink> 
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

          

         
