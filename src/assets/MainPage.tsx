// import React from 'react'
import "../assets/component styles/mainPage.css";
import TagCircle from "../images/Group 10.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import CanvasImage from "../images/Group 8.png";
import { useState, useEffect } from "react";
import heroImage from "../images/Hero images.png";
// import { useContext } from "react";
// import { ShoppingContext } from "./ShopContext";
import { fadeIn } from "../Variant";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

interface MainPageProps {
  // gamesRef: React.RefObject<HTMLDivElement>;
}

const MainPage: React.FC<MainPageProps> = () => {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  // const globalVersion = useContext(ShoppingContext);

  // if (!globalVersion) {
  //   return <div>Error: Shopping context not available</div>;
  // }

  // const { gamesRef } = globalVersion;

  // const handleClick = () => {
  //   if (gamesRef.current) {
  //     console.log("gamesRef.current:", gamesRef.current);
  //     gamesRef.current.scrollIntoView({
  //       behavior: "smooth",
        // block: "start", 
        // inline: "nearest",
  //     });
  //   } else {
  //     console.log("gamesRef.current is null or undefined");
  //   }
  // };

  // const handleClick = (elementRef:any)=>{
  // window.scrollTo({
  // top: elementRef.current.offsetTop,
  // behavior: "smooth",
  // })
  // }


  function getScreenSize() {
    const width = window.innerWidth;
    if (width <= 375) return "small";
    if (width <= 414) return "medium";
    if (width <= 430) return "large";
    if (width <= 768) return "xLarge";
    return "default";
  }

  useEffect(() => {
    const handleResize = () => setScreenSize(getScreenSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="mainPage---color">
        <div className="mainPage---container">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="mainPage--tile--Container">
            <p>Step Lightly</p>
            <h2 className="mainPage--title">
              Nice Shoe that Reflect
              <br /> Your Personality
            </h2>
            <p className="MainPage--paragraph">
              Step lightly:sustainble footwear for Every <br />
              step. Discover stylish and confortable shoes
            </p>
            
             <HashLink  to="#mainPage" smooth > <button
              className="mainPage--button"
              // onTouchStart={handleClick}
              // onClick={()=>handleClick(gamesRef )}
              >
              <span className="mainPage--button--text">Shop Now</span>
              <MdKeyboardDoubleArrowRight className="mainPage--arrow" />
            </button> </HashLink> 
          </motion.div>

          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="ShoeImage----container">
            <img src={TagCircle} alt="" className="TagCircle" />
            <img
              src={
                screenSize === "small"
                  ? heroImage
                  : screenSize === "medium"
                  ? heroImage
                  : screenSize === "large"
                  ? heroImage
                  : screenSize === "xLarge"
                  ? CanvasImage
                  : CanvasImage
              }
              alt=""
              className="ShoeImage--wahala"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
