import "./component styles/footer.css";

import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";

import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

function Footer() {


    return (
      <>
        <div className="Footer--container">
         <div className="Footer-secondLayer---container">

                
            <div className="footer--logoContiner">
            <h1 className='Footer--logo'>FOOTFASHION</h1> 
            <p className="Footer---paragraph">Sustainable footwear for every step. Discover 
               <br /> stylish and comfortable shoes</p> 
               <span className="Footer--images">
               <img src={instagram} alt=""  />
                <img src={twitter} alt=""  />
               </span>
            </div>


            <div className="Footer---left-section">
              <div className="Footer--Product">
              <h3 className=''>Product</h3> 
              <p>Shop</p>
              <p>Sales</p>
              </div>

              <div className="Footer--ContactInfo">
              <h3 className=''>Contact</h3> 
              <span className="foot--icons--email">
              <MdOutlineMail  className="email--icon"/><p> footfashion@gmail.com</p>
              </span>
              <p> <FaPhone  className="contact--icon"/> +234 8137713110</p>
            
              </div>
                

            </div>

      
    





         </div>
  
          <div>
            <p className="Footer--ending">© 2024 FootFashion. All rights reserved</p>
          </div>
        </div>
      </>
    )
  }
  
  export default Footer