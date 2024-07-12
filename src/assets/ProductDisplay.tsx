// import KswissHeel from "../images/Group 18.png"

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
         <div className="imageSlider--container">
                <div className="imageSlide--A">
                  <img src={images} alt="" />
                </div>
                <p className="scrollingPage---productName">{productName}</p>
                <span className="scrollingPage--cartBal">{itemContainer}</span> <br />
                <span className="Scrolling--Oldprice">{oldPrice}</span> <span className="Scrolling--NewPrice">{newPrice}</span>
                </div>
         </div>
      </>
    )
  }
  
  export default ProductDisplay
  