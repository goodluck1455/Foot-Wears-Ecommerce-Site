import "./component styles/footer.css";

import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";

function Footer() {


    return (
      <>
        <div className="Footer--container">
         <div className="Footer-secondLayer---container">

                
            <div>
            <h1 className='Footer--logo'>FOOTFASHION</h1> 
            <p className="Footer---paragraph">Sustainable footwear for every step. Discover 
               <br /> stylish and comfortable shoes</p> 
               <span className="Footer--images">
               <img src={instagram} alt=""  />
                <img src={twitter} alt=""  />
               </span>
            </div>

      
    





         </div>
  

        </div>
      </>
    )
  }
  
  export default Footer