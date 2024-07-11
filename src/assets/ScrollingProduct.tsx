import { useState } from "react";
import "../assets/component styles/scrollingProduct.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


// import KswissHeel from "../images/Group 18.png"
import PriceData from "../assets/PriceData"

function ScrollingProduct() {

  const [priceData, setPriceData]= useState(PriceData);


  const priceDataElement = 
    priceData.map(price =>(
      <SwiperSlide key={price.id}>
      <div className="imageSlider--container">
                <div className="imageSlide--A">
                  <img src={price.Image} alt="" />
                </div>
                <p className="scrollingPage---productName">{price.productName}</p>
                <span className="scrollingPage--cartBal">{price.itemContainer}</span> <br />
                <span className="Scrolling--Oldprice">{price.oldPrice}</span> <span className="Scrolling--NewPrice">{price.newPrice}</span>
                </div>
                </SwiperSlide>
    ))
  

    return (
      <>
     <div>
        <div className="scrolingPage--container">
            <div className="scrolingPage---deals">
               <div>
                <h3>Today Best Deals!</h3>
               </div>
               <div className="ScrollingPage---timeCountDown">
                <p>Ends in: {12}h : {10}m : {10}s</p>
               </div>

            </div>

            <div className="ScrollingPage---imagesContainer">

            <Swiper
            spaceBetween={50}
            slidesPerView={5}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            modules={[Navigation]}

            breakpoints={{
              375: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 15,
              },
            }}
          >
            {priceDataElement}
          </Swiper>

          <div className="custom-next"><MdKeyboardDoubleArrowLeft  /></div>
          <div className="custom-prev"><MdKeyboardDoubleArrowRight /></div>


{/* 
                   {priceDataElement} */}
                {/* <div className="imageSlider--container">
                <div className="imageSlide--A">
                  <img src={KswissHeel} alt="" />
                </div>
                <p className="scrollingPage---productName">K-swiss Heel</p>
                <span className="scrollingPage--cartBal">10 items left</span> <br />
                <span className="Scrolling--Oldprice">$40,000</span> <span className="Scrolling--NewPrice">$20,000</span>
                </div> */}
            </div>

            <div>

            </div>


        </div>
     </div>
      </>
    )
  }
  
  export default ScrollingProduct