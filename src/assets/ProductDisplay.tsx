// import KswissHeel from "../images/Group 18.png"
// import "./component styles/firstCartPage.css"
import "./component styles/ProductDisplay.css";
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
         <div>
         <div className="ProductDisplay--container">
                <div className="imageSlide--A">
                  <img src={images} alt="" />
                </div>
                <p className="scrollingPage---productName">{productName}</p>
                <span className="ProductDisplay--cartBal">{itemContainer}</span> <br />
                <span className="Scrolling--Oldprice">{oldPrice}</span> <span className="Scrolling--NewPrice">{newPrice}</span>
                </div>
         </div>
      </>
    )
  }
  
  export default ProductDisplay
  