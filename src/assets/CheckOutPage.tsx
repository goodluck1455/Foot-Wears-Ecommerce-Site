import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaAnglesDown } from "react-icons/fa6";
import "./component styles/cart.css";
import FirstNameIcon from "../images/notification-bubble.png";
import EmailIcon from "../images/mail-open-01.png";
import contactIcon from "../images/call.png";
import addressIcon from "../images/location-06.png";
import VisaLogo from "../images/visa (1).png";
import MasterCardLogo from "../images/mastercard.png";
import PaypalLogo from "../images/paypal.png";
import CreditCard from "../images/credit-card.png";
import { IoCloseSharp as FilterCloseBtn } from "react-icons/io5";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

// import image from "../images/nike-sneakers-11.png";
import { useContext } from "react";
// import { useState, useEffect } from "react";
// import { useCart } from "react-use-cart";
import { ShoppingContext } from "./ShopContext";

// for image sider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

interface CheckOutPageProps {}

const CheckOutPage: React.FC<CheckOutPageProps> = () => {
  const [opeOderSummary, setOpeOderSummary] = useState(false);

  const GlobalState = useContext(ShoppingContext)!;

  const state = GlobalState.state;

  const totalPrice = state.reduce((acc: number, item: any) => {
    const priceNumber = parseFloat(item.newPrice.replace(/[^0-9.-]+/g, ""));

    return acc + priceNumber * (item.quantity || 1);
  }, 0);

  const grandTotalPrice = totalPrice - 5000;
  const formattedTotalPrice = grandTotalPrice.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  });

  const currencyCatPrice = (newPrice: string) => {
    const oldPriceNumber = parseFloat(newPrice.replace(/[^0-9.-]+/g, ""));
    return oldPriceNumber.toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    });
  };

  const cartTotal = totalPrice.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  });

  const opencheckOutSummary = () => {
    setOpeOderSummary(true);
  };

  const closeOpencheckOutSummary = () => {
    setOpeOderSummary(false);
  };

  const sliderItems = state.length;

  // Dynamically adjust slidesPerView based on the number of items
  const slidesPerView = sliderItems === 1 ? 1 : 1.3;

  return (
    <>
      <div className="Cart--container ">
        <NavLink to="/shop">
          <div className="Cart---C-shopping">
            <MdKeyboardArrowLeft className="cart--left-shopping" />
            <h4>Continue shopping</h4>
          </div>{" "}
        </NavLink>

        <div className="checkout--OrderSummary">
          <div
            className="checkout---summaryContainer"
            onClick={opencheckOutSummary}>
            <p>Show order summary</p>{" "}
            <span>
              <FaAnglesDown />{" "}
            </span>
          </div>
          <div>
            <p>{formattedTotalPrice}</p>
          </div>
        </div>

        <div className="checkoutInfoContainer justify-center">
          <div className="checkoutInfor ">
            <h3>Checkout Details</h3>
            <p>
              Ready to checkout? Enter your payment information to{" "}
              <br className="checkout--breakTag" />
              secure your order.
            </p>

            <form action="" className="checkoutForm">
              <h4 className="checkoutForm---shippingHading">
                Shipping Information{" "}
              </h4>
              <div className="checkOutInput--Container">
                <span className="checkOutInput---inputLayout">
                  <label>First Name</label>{" "}
                  <img
                    src={FirstNameIcon}
                    alt=""
                    className="CheckOutForm---firstNameIcon "
                  />
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className=""
                  />
                </span>
                <span className="checkOutInput---inputLayout">
                  <label>Last Name</label>{" "}
                  <img
                    src={FirstNameIcon}
                    alt=""
                    className="CheckOutForm---LastNameIcon"
                  />
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className=""
                  />
                </span>
              </div>
              <div className="checkOutInput--Container">
                <span className="checkOutInput---inputLayout">
                  <label>Email</label>{" "}
                  <img
                    src={EmailIcon}
                    alt=""
                    className="CheckOutForm---LastNameIcon"
                  />
                  <input type="email" placeholder="Enter your email address " />
                </span>
                <span className="checkOutInput---inputLayout">
                  <label>Phone Number</label>{" "}
                  <img
                    src={contactIcon}
                    alt=""
                    className="CheckOutForm---firstNameIcon"
                  />
                  <input type="Number" placeholder="Enter your phone number" />
                </span>
              </div>
              <div>
                <span className="checkOutInput---inputLayout">
                  <label className="checkOutInput---textarea">
                    Shipping Address
                  </label>
                  <img
                    src={addressIcon}
                    alt=""
                    className="CheckOutForm---addressIcon"
                  />
                  <textarea rows={3.5} placeholder="Enter shipping address" />
                </span>
              </div>

              <div className="checkOutInput--Container">
                <span className="checkOutInput---inputLayout">
                  <label>State</label>{" "}
                  <img
                    src={addressIcon}
                    alt=""
                    className="CheckOutForm---stateIcon"
                  />
                  <select name="" id="" className="checkout--selectedOption ">
                    <option value="">&nbsp;&nbsp;&nbsp;&nbsp;Lagos</option>
                    <option value="">&nbsp;&nbsp;&nbsp;&nbsp;Abuja</option>
                    <option value="">&nbsp;&nbsp;&nbsp;&nbsp;Akwa Ibom</option>
                    <option value="">&nbsp;&nbsp;&nbsp;&nbsp;Kano</option>
                  </select>
                </span>
                <span className="checkOutInput---inputLayout selectOptioWahala">
                  <label>City</label>{" "}
                  <img
                    src={addressIcon}
                    alt=""
                    className="CheckOutForm---stateIcon"
                  />
                  <select name="" id="" className="checkout--selectedOption ">
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
                <span className="CheckOut---checkBoxContainer-A flex">
                  <input type="checkbox" id="all" name="all" />
                  <img src={VisaLogo} alt="" />

                  <input
                    type="checkbox"
                    id="all"
                    name="all"
                    className="checkBox--MasterCard"
                  />
                  <img src={MasterCardLogo} alt="" />
                  <input
                    type="checkbox"
                    id="all"
                    name="all"
                    className="checkBox--PaypalLogo"
                  />
                  <img src={PaypalLogo} alt="" />
                </span>

                <div className="checkOutInput--Container">
                  <span className="checkOutInput---inputLayout">
                    <label>Card Number</label>{" "}
                    <img
                      src={CreditCard}
                      alt=""
                      className="CheckOutForm---firstNameIcon"
                    />
                    <input type="number" placeholder="Enter your first name" />
                  </span>
                  <span className="checkOutInput---inputLayout">
                    <label>Card Holder's Name</label>{" "}
                    <img
                      src={CreditCard}
                      alt=""
                      className="CheckOutForm---LastNameIcon"
                    />
                    <input type="text" placeholder="Card holder's name" />
                  </span>
                </div>

                <div className="checkOutExpiration--Container">
                  <span className="checkOutInput---inputLayout">
                    <label>Expiration date</label>
                    <input
                      type="date"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => {
                        if (!e.target.value) e.target.type = "text";
                      }}
                      placeholder="Expiration date"
                      className="ExpiringIput "
                    />
                  </span>
                  <span className="checkOutInput---inputLayout">
                    <label>CVC</label>
                    <input
                      type="number"
                      placeholder="Enter your CVC number"
                      className=""
                    />
                  </span>
                </div>
              </div>

              <div>
                <NavLink to="/CheckOutPage">
                  {" "}
                  <button type="button" className="cart--checkout">
                    Pay {formattedTotalPrice}
                  </button>
                </NavLink>
              </div>
            </form>
          </div>
          <div
            className={`Checkout--summary h-fit ${
              opeOderSummary && "Checkout--summaryClose"
            } `}>
            <h3>Order Summary</h3>
            <p className="checkOut--OrderDetailsInfor">
              Check your order details
            </p>
            <FilterCloseBtn
              size={25}
              className="CheckOutcloseBTN"
              onClick={closeOpencheckOutSummary}
            />
            <div className="Checkout--summaryItems">
              <Swiper
                spaceBetween={15}
                slidesPerView={slidesPerView}
                // scrollbar={{ draggable: true }}
                navigation={{
                  nextEl: ".checkout-next",
                  prevEl: ".checkout-prev",
                }}
                pagination
                modules={[Navigation, Pagination]}
                breakpoints={{
                  375: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  360: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: slidesPerView,
                    spaceBetween: 15,
                  },
                }}
                // navigation
                // pagination={{ clickable: true }}
              >
                {state.map((item: any, index: number) => {
                  return (
                    <>
                      <SwiperSlide>
                        <div
                          className="CheckOutInfo_OnItem--Container"
                          key={index}>
                          <div className="CheckOut--BasketItemInfor--Container">
                            <div className="CheckOutItem--image--container">
                              <img src={item.Image} alt="" />
                            </div>

                            <div className="Checkout--ItemInfo">
                              <h4 className="checkout-ProductName">
                                {item.productName}
                              </h4>
                              <p className="Cart--Edition">
                                Black lasted edition
                              </p>
                              <div className="checkOut--sizeQuantity">
                                <p className="Cart--Edition">
                                  Shoe size: {item.size || `20-30L`}
                                </p>
                                <p>
                                  {currencyCatPrice(item.newPrice)}
                                 
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="CheckOut--numberOfItemSelected">
                            <p>x {item.quantity || 1}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    </>
                  );
                })}
                <div className="checkout-prev ">
                  <MdKeyboardDoubleArrowLeft />
                </div>
                <div className="checkout-next">
                  <MdKeyboardDoubleArrowRight />
                </div>
              </Swiper>

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

            <div className="checkOut--totalDisplay">
              <div className="">
                <span className="Cart---balanceBreakdown">
                  <h5>Cart Total</h5>
                  <p>{cartTotal}</p>
                </span>
                <span className="Cart---balanceBreakdown">
                  <h5>Discount</h5>
                  <p>{currencyCatPrice("$5,000")}</p>
                </span>
                <span className="Cart---balanceBreakdown">
                  <h5>Delivery fee</h5>
                  <p>{currencyCatPrice("$0000")}</p>
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
