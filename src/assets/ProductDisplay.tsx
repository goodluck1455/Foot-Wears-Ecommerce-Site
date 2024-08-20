// import KswissHeel from "../images/Group 18.png"
// import "./component styles/firstCartPage.css"
import { FaPlusCircle } from "react-icons/fa";
import "./component styles/ProductDisplay.css";
import "./component styles/firstCartPage.css"
import { useContext } from "react";
// import { useContext } from "react";
import {ShoppingContext} from "./ShopContext";
// import { useCart } from 'react-use-cart';

// import { NavLink } from "react-router-dom";
interface ProductDisplayProps {
productName:string;
 itemContainer:string; 
 oldPrice:string; 
 newPrice:string;
 images?:string;
 id: number;
item: {
  productName:string;
  itemContainer:string; 
  oldPrice:string; 
  newPrice:string;
  images?:string;
  id: number;
  key?:number;};
  key?:number;

//  item: {
//   id: number;
//   name: string;
//   price: number; // Ensure price is included
//   image: string;
//     description: string;
//     size: string;
//     quantity: number;
// };
 
}

 const ProductDisplay: React.FC<ProductDisplayProps> = ({productName, 
  itemContainer, oldPrice, 
  newPrice, images, item}) => {

  //  const {addToCart}= useContext(ShopContextProvider)

  const globalVersion = useContext(ShoppingContext);

  if (!globalVersion) {
    return <div>Error: Shopping context not available</div>;
  }
        //  const state = globalVersion.state;
         const dispatch = globalVersion.dispatch;
        //  const { dispatch } = useContext(ShoppingContext);
        //  console.log(globalVersion);

         
    return (
      <>
            
         <div className="ProductDisplay--container">
                <div className="imageSlide--A">
                  <img src={images} alt="" />
                </div>
                <p className="scrollingPage---productName">{productName}</p>
                <span className="ProductDisplay--cartBal">{itemContainer}</span> <br />
                <span className="Scrolling--Oldprice">{oldPrice}</span> <span className="Scrolling--NewPrice">{newPrice}</span>
          
              <FaPlusCircle  className="ProductDisplay---add-to-cart" onClick={()=> dispatch({type: "ADD", payload:item})}/>
             
               {/* <FaPlusCircle 
                className="ProductDisplay---add-to-cart" 
                onClick={() => dispatch({ type: "ADD", payload: { id, productName, newPrice } })} 
            /> */}
                </div>


                  
           
       
      </>
    )
  }
  
  export default ProductDisplay
  