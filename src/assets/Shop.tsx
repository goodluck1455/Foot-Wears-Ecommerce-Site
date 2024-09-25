import "./component styles/shop.css"
import ShopLogoImage from "../images/ShopLogo.png"
import FirstCartPage from "./FirstCartPage"
import TimeCounter from "./TimeCounter"
// import TurnHeadsLater from "./TurnHeadsLater"
import { useState, useEffect } from "react";

function Shop() {
   const [screenSize, setScreenSize] = useState(getScreenSize());

   function getScreenSize() {
     const width = window.innerWidth;
     if (width <= 375) return 'small';
     if (width <= 414) return 'medium';
     if (width <= 430) return 'large';
     if (width <= 768) return 'xLarge';
     if (width <= 820) return 'size_820';
     if (width <= 1024) return 'size_1024';
     return 'default';
   }
 
 
   useEffect(() => {
     const handleResize = () => setScreenSize(getScreenSize());
     window.addEventListener("resize", handleResize);
     return () => window.removeEventListener("resize", handleResize);
   }, []);

    return (
      <>
       <div className="Shop---container">
             <div className="Shop---title">
                <h1>Get a Free Gift <br className="shop--giftBreak"/>
                Off Every Order
                </h1>
             </div>

             <div className="Shop---imageContainer">
                <img src={ShopLogoImage} alt="Shop--image-Logo"  />
             </div>
       </div>
       <TimeCounter duration={5 * 22 * 60 * 60 * 1000} 
        media="shopView"

      />
    
       <div className="Shop--Firstcartpage">
       <FirstCartPage 
          containerClassName="FirstCartPageB---container"
           showTurnHeadsLater={
            screenSize === 'small' ||
            screenSize === "medium" ||
            screenSize === "large" ||
            screenSize === "size_820" ||
            screenSize === "size_1024" ||
            screenSize === "xLarge" 
         }
       />
       </div>
      </>
    )
  }
  
  export default Shop