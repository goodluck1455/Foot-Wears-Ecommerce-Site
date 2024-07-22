import "./component styles/cart.css"
import { HiOutlineTrash } from "react-icons/hi";

import { MdKeyboardArrowLeft } from "react-icons/md";
import image from "../images/nike-sneakers-11.png";

function Cart() {


  return (
    <>
     <div className="Cart--container">
        <div className="Cart---C-shopping">
        <MdKeyboardArrowLeft className="cart--left-shopping"/> 
        <h4>Continue shopping</h4>
        </div>

        <div className="Cart--heading">  <h3>My Carts </h3> <span>(3 items)</span></div>


        <div className="Cart--Basket-Container">

                
               
               <div className="Cart--BasketItems">

                  <div className="Cart--BasketItem--Container">
                  <div className="Cart--image--container">
                  <img src={image} alt="" />
                  </div>
                    
                   <div className="Cart--Info">
                   <h4>Nike-Puma Sneakers</h4>
                   <p className="Cart--Edition">Black lasted edition</p>
                   <div className="cart--sizeQuantity">
                    <span > Size: 
                      <select name="" id="" className="Cart--size">
                        <option value="20-30L" >20-30L</option>
                        <option value="30-40L" >30-40L</option>
                        <option value="40-50L" >40-50L</option>
                      </select>
                      </span> <span className="Cart--quantityContainer">Quantity: 
                      <select name="" className="Cart--quantity">
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                      </select>
                      </span>
                      </div>
                   </div>
                  </div>


                  <div className="cart--amount">
                      <span>
                        <p>$40,000</p>
                        <HiOutlineTrash  className="cart--DeleteBTN"/>
                      </span>
                    </div>
               </div>

                 <div className="Cart--Order--container">
                    <div className="Cart--order">
                      <h4>Order Summary</h4>
                    </div>
                 </div>





        </div>
     </div>
    </>
  )
}

export default Cart