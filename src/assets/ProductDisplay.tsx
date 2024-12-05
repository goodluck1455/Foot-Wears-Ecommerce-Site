// import KswissHeel from "../images/Group 18.png"
// import "./component styles/firstCartPage.css"
// import { FaPlusCircle } from "react-icons/fa";
import "./component styles/ProductDisplay.css";
import "./component styles/firstCartPage.css"
import { useContext } from "react";
import { fadeIn } from "../Variant";
import { motion } from "framer-motion";
// import { useContext } from "react";
// import { NavLink } from "react-router-dom";
import {ShoppingContext} from "./ShopContext";
import { useNavigate } from "react-router-dom";
// import { useCart } from 'react-use-cart';

// import { NavLink } from "react-router-dom";

interface ProductDisplayProps {
productName:string;
 itemContainer:string; 
 oldPrice:string; 
 newPrice:string;
 images?:string;
 itemLeft?: number;
 id: number;
 discount?:string;
item: {
  productName:string;
  itemContainer:string; 
  oldPrice:string; 
  newPrice:string;
  images?:string;
  id: number;
  key?:number;
  itemLeft?:number;
  discount?:string;
};
  key?:number;

 
}

 const ProductDisplay: React.FC<ProductDisplayProps> = ({productName, 
  itemContainer, oldPrice, 
  newPrice, images, item, itemLeft, discount}) => {

 

  const navigate = useNavigate();
  // const [priceData] = useState(priceData4ScrollingPage);

  const handleProductClick = (product: any) => {
    navigate("/ProductDescription", { state: { product } });
  };

  const globalVersion = useContext(ShoppingContext);

  if (!globalVersion) {
    return <div>Error: Shopping context not available</div>;
  }
        //  const state = globalVersion.state;
        //  const dispatch = globalVersion.dispatch;
        //  const { dispatch } = useContext(ShoppingContext);
        //  console.log(globalVersion);
        
    
         const newPriceNumber = parseFloat(newPrice.replace(/[^0-9.-]+/g, ""));
         const oldPriceNumber = parseFloat(oldPrice.replace(/[^0-9.-]+/g, ""));

        const currencyNewPrice = newPriceNumber.toLocaleString("en-NG", {
          style: "currency",
          currency: "NGN",
          minimumFractionDigits: 0,
        });
        const currencyOldPrice = oldPriceNumber.toLocaleString("en-NG", {
          style: "currency",
          currency: "NGN",
          minimumFractionDigits: 0,
        });

         
    return (
      <>
            
         <motion.div 
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
         
         >
                   <div className="ProductDisplay--container leading-[1.2]" onClick={() => handleProductClick(item)}>
                   <span className="ProductDisplay--percentage">{discount}</span>
                <div className="ProductDisplay--imageSlide--A">
                  <img src={images} alt="" />
                </div>
                <p className="scrollingPage---productName">{productName}</p>
                <span className="ProductDisplay--cartBal">{itemLeft} {itemContainer}</span> <br />
                <span className="Scrolling--Oldprice">{currencyOldPrice}</span> <span className="Scrolling--NewPrice">{currencyNewPrice}</span>
          
                {/* <NavLink to="/ProductDescription/${price.id}">   
               <FaPlusCircle  className="ProductDisplay---add-to-cart" onClick={()=> dispatch({type: "ADD", payload:item})}/>
                </NavLink>  */}
             
                  </div>
                </motion.div>

       
      </>
    )
  }
  
  export default ProductDisplay
  