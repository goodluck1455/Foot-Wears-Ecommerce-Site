
import * as Ci from "react-icons/ci"

import CartImage from "../images/Vector.png"
import { NavLink } from "react-router-dom"

 function Header() {


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
             <NavLink to="Sales">   <li>SALES</li></NavLink>  
              </ul>
            </div>  
          </div>

          </div>
          <div className="Menue--icon">
            <Ci.CiSearch className="search--icon"/>
          <img src={CartImage} alt="Cart"  />
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

          

         
