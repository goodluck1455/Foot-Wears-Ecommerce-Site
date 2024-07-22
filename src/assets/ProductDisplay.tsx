// import KswissHeel from "../images/Group 18.png"
// import "./component styles/firstCartPage.css"
import { FaPlusCircle } from "react-icons/fa";
import "./component styles/ProductDisplay.css";
import "./component styles/firstCartPage.css"
import { NavLink } from "react-router-dom";
interface ProductDisplayProps {
productName:string, 
 itemContainer:string, 
 oldPrice:string, 
 newPrice:string,
 images:string
}

 const ProductDisplay: React.FC<ProductDisplayProps> = ({productName, itemContainer, oldPrice, newPrice,images }) => {


    return (
      <>
        

            


         <div className="ProductDisplay--container">
                <div className="imageSlide--A">
                  <img src={images} alt="" />
                </div>
                <p className="scrollingPage---productName">{productName}</p>
                <span className="ProductDisplay--cartBal">{itemContainer}</span> <br />
                <span className="Scrolling--Oldprice">{oldPrice}</span> <span className="Scrolling--NewPrice">{newPrice}</span>
            <NavLink to="/Cart">  
              <FaPlusCircle  className="ProductDisplay---add-to-cart"/>
              </NavLink> 
                </div>


                  
           
       
      </>
    )
  }
  
  export default ProductDisplay
  