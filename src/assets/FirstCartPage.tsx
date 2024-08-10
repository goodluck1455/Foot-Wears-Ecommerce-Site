import "./component styles/firstCartPage.css"
import "../assets/component styles/scrollingProduct.css";
// import KswissHeel from "../images/Group 18.png"
import { useState } from "react";
// import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

import {priceData4ProductDisplay} from "../assets/PriceData"

import InputRange from "./InputRange";
// import { Navigation } from "swiper/modules";
// import NavigationPanel from "./Navigation";
import ProductDisplay from "./ProductDisplay";
import ReactPaginate from "react-paginate";
// import Navigation from "./Navigation";
// import { useCart } from "react-use-cart";
// import ProductLayout from "./ProductLayout";
// import ProductDisplaySec from "./ProductDisplaySec";


// const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="ProductDisplaySec" element={<ProductDisplaySec />} />
        
     
//     )






// interface FirstCartPageProps {
//   pageCount:void, 
//    itemContainer:string, 
//    oldPrice:string, 
//    newPrice:string,
//    images:string
//   }
  
   
// )

interface FirstCartPageProps {
  // handleClick: () => void;
}


const FirstCartPage: React.FC<FirstCartPageProps> = () => {
// const FirstCartPage: React.FC = ({handleClick}) => {


  const [productDisplay] = useState(priceData4ProductDisplay.slice(0, 200))

  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 12;
  const pageVisited = pageNumber * userPerPage;

  const productDisplayElement = productDisplay.slice(pageVisited, pageVisited + userPerPage)
  .map((product) => {
  
    return (
      <ProductDisplay
        id={product.id}
        images={product.Image}
        productName={product.productName}
        itemContainer={product.itemContainer}
        oldPrice={product.oldPrice}
        newPrice={product.newPrice}
        item={product}
       
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
        const newCheckedItems = { ...prevState, [name]: checked };

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

const pageCount = Math.ceil(productDisplay.length / userPerPage);
const changePage = ({selected}: { selected: number })=>{
  setPageNumber(selected)
}


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

              <div>
                
               <span className="FirstCartPgae---RangeBox">
               <h4>Price</h4>
               <InputRange /> 
               </span>
              </div>
              <div>

              <h4 className="FirstCartPage--size">Size</h4> 
              <span className="FirstCartPgae---checkBoxContainer-B">
             
               <input 
                 type="checkbox"
                 id="childrenShoes"
                 name="size-A"
                //  checked={checkedItems.childrenShoes}
                //  onChange={handleCheckboxChange}
                //  disabled={checkedItems.all}
               /> 
               <label htmlFor="" className="FirstCartPgae---labelContent-E">06 - 20</label> 
               <label htmlFor="" >20</label>  
               </span>
               <span className="FirstCartPgae---checkBoxContainer-B">
               <input 
                 type="checkbox"
                 id="childrenShoes"
                 name="size-B"
                //  checked={checkedItems.childrenShoes}
                //  onChange={handleCheckboxChange}
                //  disabled={checkedItems.all}
               /> 
               <label htmlFor="" className="FirstCartPgae---labelContent-E">20 - 30</label> 
               <label htmlFor="" >50</label>  
               </span>

               <span className="FirstCartPgae---checkBoxContainer-B">
               <input 
                 type="checkbox"
                 id="childrenShoes"
                 name="size-C"
                //  checked={checkedItems.childrenShoes}
                //  onChange={handleCheckboxChange}
                //  disabled={checkedItems.all}
               /> 
               <label htmlFor="" className="FirstCartPgae---labelContent-E">31 - 40</label> 
               <label htmlFor="" >40</label>  
               </span>

               <span className="FirstCartPgae---checkBoxContainer-B">
               <input 
                 type="checkbox"
                 id="childrenShoes"
                 name="size-D"
                //  checked={checkedItems.childrenShoes}
                //  onChange={handleCheckboxChange}
                //  disabled={checkedItems.all}
               /> 
               <label htmlFor="" className="FirstCartPgae---labelContent-E">41 - 50</label> 
               <label htmlFor="" >40</label>  
               </span>



               <h4 className="FirstCartPage--Brands">Brands</h4> 
              <span className="FirstCartPgae---checkBoxContainer-B">
               <input 
                 type="checkbox"
                 id="childrenShoes"
                 name="size-A"
                //  checked={checkedItems.childrenShoes}
                //  onChange={handleCheckboxChange}
                //  disabled={checkedItems.all}
               /> 
               <label htmlFor="" className="FirstCartPgae---labelContent-F">Nike</label> 
               <label htmlFor="" >120</label>  
               </span>
               <span className="FirstCartPgae---checkBoxContainer-B">
               <input 
                 type="checkbox"
                 id="childrenShoes"
                 name="size-B"
                //  checked={checkedItems.childrenShoes}
                //  onChange={handleCheckboxChange}
                //  disabled={checkedItems.all}
               /> 
               <label htmlFor="" className="FirstCartPgae---labelContent-F">Puma</label> 
               <label htmlFor="" >03</label>  
               </span>

               <span className="FirstCartPgae---checkBoxContainer-B">
               <input 
                 type="checkbox"
                 id="childrenShoes"
                 name="size-C"
                //  checked={checkedItems.childrenShoes}
                //  onChange={handleCheckboxChange}
                //  disabled={checkedItems.all}
               /> 
               <label htmlFor="" className="FirstCartPgae---labelContent-G">K-swiss</label> 
               <label htmlFor="" >01</label>  
               </span>

               <span className="FirstCartPgae---checkBoxContainer-B">
               <input 
                 type="checkbox"
                 id="childrenShoes"
                 name="size-D"
                //  checked={checkedItems.childrenShoes}
                //  onChange={handleCheckboxChange}
                //  disabled={checkedItems.all}
               /> 
               <label htmlFor="" className="FirstCartPgae---labelContent-H">Encap</label> 
               <label htmlFor="" >01</label>  
               </span>
              </div>

               
             
            </div>

            <div>


              <div className="FirstCarPge---ProductDisplay">
                {productDisplayElement}
                {/* <Navigation data={productDisplayElement}/> */}
                {/* <RouterProvider router={router}/> */}
              </div>

              
         

            </div>



            


         </div>
         <ReactPaginate 
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"Navigation---container"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}

         
         />
         {/* <NavigationPanel /> */}
         {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, alias.</p> */}
       </div>
      </>
    )
  }
  
  export default FirstCartPage