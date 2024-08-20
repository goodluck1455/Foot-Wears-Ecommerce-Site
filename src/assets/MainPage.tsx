// import React from 'react'
import "../assets/component styles/mainPage.css"
import TagCircle from "../images/Group 10.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import CanvasImage from "../images/Group 8.png";
import { useState, useEffect } from "react";
import heroImage from "../images/Hero images.png"


function MainPage() {

  const [screenSize, setScreenSize] = useState(getScreenSize());

  function getScreenSize() {
    const width = window.innerWidth;
    if (width <= 375) return 'small';
    if (width <= 414) return 'medium';
    if (width <= 430) return 'large';
    if (width <= 768) return 'xLarge';
    return 'default';
  }


  useEffect(() => {
    const handleResize = () => setScreenSize(getScreenSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    return (
      <>
      <div className='mainPage---color'>
        <div className="mainPage---container">
        <div className="mainPage--tile--Container">
           <p>Step Lightly</p>
           <h2 className="mainPage--title">Nice Shoe that Reflect<br /> Your  Personality</h2> 
           <p className="MainPage--paragraph">Step lightly:sustainble footwear for Every <br />
            step. Discover stylish and confortable shoes
           </p>
           <button className="mainPage--button"><span className="mainPage--button--text">Shop Now</span> <MdKeyboardDoubleArrowRight className="mainPage--arrow" /></button>
        </div>
         
         <div className="ShoeImage----container">
           <img src={TagCircle} alt="" className="TagCircle" />
          <img src={
          screenSize === 'small' ? heroImage : 
          screenSize === 'medium' ? heroImage :
          screenSize === 'large' ? heroImage :
          screenSize === 'xLarge' ?  CanvasImage :
          CanvasImage
        } 
             alt="" className="ShoeImage--wahala"/>
         </div>

        </div>
      </div>
      </>
    )
  }
  
  export default MainPage;