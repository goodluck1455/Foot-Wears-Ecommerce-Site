import "./component styles/firstCartPage.css"
import "../assets/component styles/scrollingProduct.css";
// import KswissHeel from "../images/Group 18.png"
import { useState } from "react";
import ProductDisplay from "./ProductDisplay";
// import PriceData from "../assets/PriceData"
import {priceData4ProductDisplay} from "../assets/PriceData"




function App() {
  const [productDisplay] = useState(priceData4ProductDisplay)

  const productDisplayElement = productDisplay.map((product) => {
    return (
      <ProductDisplay
        key={product.id}
        images={product.Image}
        productName={product.productName}
        itemContainer={product.itemContainer}
        oldPrice={product.oldPrice}
        newPrice={product.newPrice}
      />
    );
  });



   const [checkedItems, setCheckedItems] = useState(
    {
     all: false,
    maleShoes: false,
    femaleShoes: false,
    childrenShoes: false,
    }
   )

 

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    

    const { name, checked } = event.target;

    if (name === 'all') {
      setCheckedItems({
        all: checked,
        maleShoes: checked,
        femaleShoes: checked,
        childrenShoes: checked,
      });
    } else {
      setCheckedItems((prevState) => {
        const newCheckedItems = { ...prevState, [name]: checked, all: false };

        if (name === 'femaleShoes' && checked) {
          newCheckedItems.maleShoes = false;
          newCheckedItems.childrenShoes = false;
        } else if (name === 'maleShoes' && checked) {
          newCheckedItems.femaleShoes = false;
          newCheckedItems.childrenShoes = false;
        }else if (name === 'childrenShoes' && checked) {
          newCheckedItems.femaleShoes= false;
          newCheckedItems.maleShoes = false;
        }

        return newCheckedItems;
      });
    }
  };




    return (
      <>
       <div className="FirstCartPage---container">
         <div className="FirstCartPage---titlePage">
           <h2>Shop Now, Turn Heads Later</h2>
           <p>Don’t wait to upgrade your wardrobe! Grab your favorites now and be <br />
            ready to turn heads wherever you go.</p>
         </div>

         <div className="FirstCartPage---ViewPanel">
            <div className="FirstCartPage---SearchPanel">
               <h3>Filters</h3>
               <div>
               <span className="FirstCartPgae---checkBoxContainer-A">
               <input 
                   type="checkbox"
                   id="all"
                   name="all"
                   checked={checkedItems.all}
                   onChange={handleCheckboxChange}      /> 
               <label htmlFor="" className="FirstCartPgae---labelContent-A">All</label> 
               <label htmlFor="" >150</label>  
               </span>
               <span className="FirstCartPgae---checkBoxContainer-B">
               <input 
                type="checkbox"
                id="maleShoes"
                name="maleShoes"
                checked={checkedItems.maleShoes}
                onChange={handleCheckboxChange}
                disabled={checkedItems.all} /> 
               <label htmlFor="" className="FirstCartPgae---labelContent-B">Males Shoes</label> 
               <label htmlFor="" >50</label>  
               </span>
               <span className="FirstCartPgae---checkBoxContainer-B">
               <input 
              type="checkbox"
              id="femaleShoes"
              name="femaleShoes"
              checked={checkedItems.femaleShoes}
              onChange={handleCheckboxChange}
              disabled={checkedItems.all}
                /> 
               <label htmlFor="" className="FirstCartPgae---labelContent-C">Female shoes</label> 
               <label htmlFor="" >50</label>  
               </span>

               <span className="FirstCartPgae---checkBoxContainer-B">
               <input 
                 type="checkbox"
                 id="childrenShoes"
                 name="childrenShoes"
                 checked={checkedItems.childrenShoes}
                 onChange={handleCheckboxChange}
                 disabled={checkedItems.all}
               /> 
               <label htmlFor="" className="FirstCartPgae---labelContent-D">Children shoes</label> 
               <label htmlFor="" >50</label>  
               </span>
               </div>

               
             
            </div>

            <div>


              <div className="FirstCarPge---ProductDisplay">
                {productDisplayElement}
              </div>
              {/* <div className="FirstCarPge---ProductDisplay">
                {productDisplayElement}
              </div>
              <div className="FirstCarPge---ProductDisplay">
                {productDisplayElement}
              </div>
              <div className="FirstCarPge---ProductDisplay">
                {productDisplayElement}
              </div> */}

            </div>


         </div>


       </div>
      </>
    )
  }
  
  export default App