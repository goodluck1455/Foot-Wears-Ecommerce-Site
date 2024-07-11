// import React from 'react'
import "../assets/component styles/mainPage.css"
import TagCircle from "../images/Group 10.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function MainPage() {

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
          <img src="./src/images/Group 8.png" alt="" className="ShoeImage--wahala"/>
         </div>

        </div>
      </div>
      </>
    )
  }
  
  export default MainPage;