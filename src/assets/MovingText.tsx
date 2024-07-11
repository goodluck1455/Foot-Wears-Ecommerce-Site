import "../assets/component styles/movingText.css";
import DollarSign from "../images/dollar-sign.png";
import Gift from "../images/gift.png";
import truck from "../images/truck.png";



function MovingText() {


    return (
      <>
      <div className="MovingText---container">
           <div className="MovingText---holder">

        

        <div className="scrolingText--A">
          <img src={truck} alt=""  />
               <p className="scrolingText--A-paragraph">  FAST & FREE SHIPPING <br />
                   On over $10,000 worth
                 </p>
        </div>

        <div className="scrolingText--B">
          <img src={DollarSign} alt=""  />
               <p className="scrolingText--B-paragraph">  FAST & FREE SHIPPING  <br />
                   On over $10,000 worth
                 </p>
        </div>

        <div className="scrolingText--C">
          <img src={ Gift} alt=""  />
               <p className="scrolingText--C-paragraph"> GET FREE GIFT OFF EVERY ORDER <br />
               On over $10,000 worth 
                 </p>
        </div>

        <div className="scrolingText--C">
          <img src={ Gift} alt=""  />
               <p className="scrolingText--C-paragraph"> GET FREE GIFT OFF EVERY ORDER <br />
               On over $10,000 worth 
                 </p>
        </div>

     
        </div>
        </div> 
      </>
    )
  }
  
  export default MovingText;