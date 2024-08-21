import React from 'react';
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./component styles/cart.css"
import FirstNameIcon from "../images/notification-bubble.png"
import EmailIcon from "../images/mail-open-01.png"
import contactIcon from "../images/call.png"
import addressIcon from "../images/location-06.png"
import VisaLogo from "../images/visa (1).png"
import MasterCardLogo from "../images/mastercard.png"
import PaypalLogo from "../images/paypal.png"
import CreditCard from "../images/credit-card.png"
// import image from "../images/nike-sneakers-11.png";
import { useContext} from "react";
// import { useState, useEffect } from "react";
// import { useCart } from "react-use-cart";
import {ShoppingContext} from "./ShopContext";




interface CheckOutPageProps {
    
}

const CheckOutPage: React.FC<CheckOutPageProps> = () => {

  const GlobalState = useContext(ShoppingContext)!;
 
     const state = GlobalState.state;

  const totalPrice = state.reduce((acc: number, item: any) => {
  
    const priceNumber = parseFloat(item.newPrice.replace(/[^0-9.-]+/g, ""));

    return acc + priceNumber * (item.quantity || 1);
  }, 0);
   
 
  
    const grandTotalPrice = totalPrice - 5000;
    const formattedTotalPrice = grandTotalPrice.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });

    const cartTotal =  totalPrice.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });

  

    return (
      <>
        <div className='Cart--container'>
            <NavLink to="/shop"><div className="Cart---C-shopping">
        <MdKeyboardArrowLeft className="cart--left-shopping"/> 
        <h4>Continue shopping</h4>
        </div>  </NavLink> 



                <div className='checkoutInfoContainer'>

                    <div className='checkoutInfor'>
                        <h3>Checkout Details</h3>
                        <p>Ready to checkout? Enter your payment information to <br />
                      secure your order.</p>

                      <form action="" className='checkoutForm'>
                          <h4 className='checkoutForm---shippingHading'>Shipping Information </h4>
                          <div className="checkOutInput--Container">
                            <span className='checkOutInput---inputLayout'>
                             <label>First Name</label> <img src={FirstNameIcon} alt="" className='CheckOutForm---firstNameIcon'/>
                           <input type="text" placeholder= "Enter your first name" />
                            </span>
                              <span className='checkOutInput---inputLayout'>  
                             <label>Last Name</label> <img src={FirstNameIcon} alt="" className='CheckOutForm---LastNameIcon'/>
                              <input type="text" placeholder="Enter your last name" />
                              </span>
                     
                         </div>
                    <div className="checkOutInput--Container">
                            <span className='checkOutInput---inputLayout'>
                             <label>Email</label> <img src={EmailIcon} alt="" className='CheckOutForm---LastNameIcon'/>
                           <input type="email" placeholder=  "Enter your email address " />
                            </span>
                              <span className='checkOutInput---inputLayout'>  
                             <label>Phone Number</label> <img src={contactIcon} alt="" className='CheckOutForm---firstNameIcon'/>
                              <input type="Number" placeholder="Enter your phone number" />
                              </span>
                     
                    </div>
                    <div>
                    <span className='checkOutInput---inputLayout'>
                             <label className="checkOutInput---textarea">Shipping Address</label> 
                             <img src={addressIcon} alt="" className='CheckOutForm---addressIcon'/>
                           <textarea  rows={3.5} placeholder="Enter shipping address" />
                            </span>
                    </div>

                    <div className="checkOutInput--Container">
                            <span className='checkOutInput---inputLayout'>
                             <label>State</label>   <img src={addressIcon} alt="" className='CheckOutForm---stateIcon'/>
                             <select name="" id="" className='checkout--selectedOption'>
                            <option value="">&nbsp;&nbsp;&nbsp;&nbsp;Lagos</option>
                            <option value="">&nbsp;&nbsp;&nbsp;&nbsp;Abuja</option>
                            <option value="">&nbsp;&nbsp;&nbsp;&nbsp;Akwa Ibom</option>
                            <option value="">&nbsp;&nbsp;&nbsp;&nbsp;Kano</option>
                            </select> 
                            </span>
                              <span className='checkOutInput---inputLayout'>  
                             <label>City</label> <img src={addressIcon} alt="" className='CheckOutForm---stateIcon'/>
                           <select name="" id="" className='checkout--selectedOption'>
                           <option value="">&nbsp;&nbsp;&nbsp;&nbsp;Lagos</option>
                            <option value="">&nbsp;&nbsp;&nbsp;&nbsp;Abuja</option>
                            <option value="">&nbsp;&nbsp;&nbsp;&nbsp;Akwa Ibom</option>
                            <option value="">&nbsp;&nbsp;&nbsp;&nbsp;Kano</option>
                            </select>  
                              </span>
                     
                    </div>
                          <div className="checkoutForm---shippingHading">
                          <h4>Payment Method</h4>
                          </div>

                          <div>
                          <span className="CheckOut---checkBoxContainer-A">
                            <input 
                            type="checkbox"
                            id="all"
                            name="all"
                                /> 
                            <img src={VisaLogo} alt="" />

                            <input 
                            type="checkbox"
                            id="all"
                            name="all"
                            className='checkBox--MasterCard'
                                /> 
                            <img src={MasterCardLogo} alt="" />
                            <input 
                            type="checkbox"
                            id="all"
                            name="all"
                              className='checkBox--PaypalLogo'
                                /> 
                            <img src={PaypalLogo} alt="" />
                        </span>
                        

                               <div className="checkOutInput--Container">
                            <span className='checkOutInput---inputLayout'>
                             <label>Card Number</label> <img src={CreditCard} alt="" className='CheckOutForm---firstNameIcon'/>
                           <input type="number" placeholder= "Enter your first name" />
                            </span>
                              <span className='checkOutInput---inputLayout'>  
                             <label>Card Holder's Name</label> <img src={CreditCard} alt="" className='CheckOutForm---LastNameIcon'/>
                              <input type="text" placeholder="Enter your last name" />
                              </span>
                     
                              </div>


                                <div className="checkOutExpiration--Container">
                            <span className='checkOutInput---inputLayout'>
                             <label>Expiration date</label> 
                            <input type="date" placeholder="Enter your first name"  className='ExpiringIput'/>
                            </span> 
                              <span className='checkOutInput---inputLayout'>  
                              <label>CVC</label> 
                              <input type="number" placeholder="Enter your last name" />
                              </span>
                     
                              </div>

                              

                          </div>

                          <div>
                         <NavLink to="/CheckOutPage"> <button type="button" className="cart--checkout">Pay {formattedTotalPrice}</button></NavLink> 
                             </div>
                      </form>
                   
                    </div>
                    <div className='Checkout--summary'>
                        <h3>Order Summary</h3>
                        <p className='checkOut--OrderDetailsInfor'>Check your order details</p>

                        <div className='Checkout--summaryItems'>

                              {/* summary begins here */}
                        {state.map((item:any,  index:number)=>{
                          return(
                            <>
                     
                              <div className="CheckOutInfo_OnItem--Container" key={index} >
                                  <div className="CheckOut--BasketItemInfor--Container">
                                    {/* <div className="checkout--Cssadjustment"> */}
                                    <div className="CheckOutItem--image--container">
                                    <img src={item.Image} alt="" />
                                    </div>
                                   {/* </div> */}
                                      
                                    <div className="Checkout--ItemInfo">
                                    <h4>{item.productName}</h4>
                                    <p className="Cart--Edition">Black lasted edition</p>
                                    <div className="checkOut--sizeQuantity">
                                    <p className="Cart--Edition">{item.size || `20-30L` }</p>
                                    <p>

                                      {item.newPrice}
                                      {/* {(parseFloat(item.newPrice.replace(/[^0-9.-]+/g, "")) *
                                        (item.quantity || 1)).toLocaleString("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                        minimumFractionDigits: 0,
                                      })} */}
                                      </p>
                                        
                                        </div>
                                    </div>
                                    </div>
                                    <div className='CheckOut--numberOfItemSelected'>
                                      <p>x {item.quantity || 1}</p>
                                    </div>
                                    </div>
                                  
                                </>
                        )})}
                              {/* <div className="CheckOutInfo_OnItem--Container">
                                <div className="CheckOut--BasketItemInfor--Container">
                                  <div className="CheckOutItem--image--container">
                                  <img src={image} alt="" />
                                  </div>
                                    
                                  <div className="Checkout--ItemInfo">
                                  <h4>{"productName"}</h4>
                                  <p className="Cart--Edition">Black lasted edition</p>
                                  <div className="checkOut--sizeQuantity">
                                  <p className="Cart--Edition">20-30L</p>
                                  <p>$41,000</p>
                                      
                                      </div>
                                  </div>
                                  </div>
                                  <div className='CheckOut--numberOfItemSelected'>
                                    <p>x1</p>
                                  </div>
                                  </div>  */}





                                        </div>

                                        <div className='checkOut--totalDisplay'>
                                       
                                          <div className="">
                      <span className="Cart---balanceBreakdown">
                        <h5>Cart Total</h5>
                        <p>{cartTotal}</p>
                      </span>
                      <span className="Cart---balanceBreakdown">
                        <h5>Discount</h5>
                        <p>$5,000</p>
                      </span>
                      <span className="Cart---balanceBreakdown">
                        <h5>Delivery fee</h5>
                        <p>$0000</p>
                      </span>
                      <span className="Cart---balanceBreakdown Cart-Total">
                        <h5>Total</h5>
                        <p>{formattedTotalPrice}</p>
                      </span>


                    </div>
                                          </div>

                                    </div>

                                </div>

                        </div>

        </>
    );
};

export default CheckOutPage;