import "./component styles/shop.css"
import ShopLogoImage from "../images/ShopLogo.png"
import FirstCartPage from "./FirstCartPage"


function Shop() {


    return (
      <>
       <div className="Shop---container">
             <div className="Shop---title">
                <h1>Get a Free Gift <br />
                Off Every Order
                </h1>
             </div>

             <div className="Shop---imageContainer">
                <img src={ShopLogoImage} alt="Shop--image-Logo"  />
             </div>
       </div>
       
       <FirstCartPage />
      </>
    )
  }
  
  export default Shop