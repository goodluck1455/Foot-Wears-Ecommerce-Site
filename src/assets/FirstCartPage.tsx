import "./component styles/firstCartPage.css";
import "../assets/component styles/scrollingProduct.css";
// import KswissHeel from "../images/Group 18.png"
import { useState, useEffect } from "react";
// import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { CiFilter as FilterIcon } from "react-icons/ci";
import { priceData4ProductDisplay } from "../assets/PriceData";
import { IoCloseSharp as FilterCloseBtn } from "react-icons/io5";
import InputRange from "./InputRange";
// import { Navigation } from "swiper/modules";
// import NavigationPanel from "./Navigation";
import ProductDisplay from "./ProductDisplay";
import ReactPaginate from "react-paginate";
import TurnHeadsLater from "./TurnHeadsLater";
import { useContext } from "react";
import { ShoppingContext } from "./ShopContext";
import NoProductAvailiable from "./NoProductAvailiable";





interface FirstCartPageProps {
  showTurnHeadsLater?: boolean;
  containerClassName?: string;
 
}

const FirstCartPage: React.FC<FirstCartPageProps> = ({
  showTurnHeadsLater = true,
  containerClassName,
}) => {
  // const FirstCartPage: React.FC = ({handleClick}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 375);
  const [openFilter, setOpenFilter] = useState(true);
  const [isFiltering, setIsFiltering] = useState(false);


  const [values, setValues] = useState([0, 1000000]);
  //nbsijbjksnbkjdnfv
  // State for price range
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 }); 

// Reset all checkboxes function

let MIN = 0;
let MAX = 1000000;


const resetCheckboxes = () => {
  setCheckedItems({
    all: false,
    maleShoes: false,
    femaleShoes: false,
    childrenShoes: false,
    Nike: false,
    Puma: false,
    Kswiss: false,
    Encap: false,
    N620: false,
    N2030: false,
    N3140: false,
    N4150: false,
  });


  setValues([0, 1000000]);

  setPriceRange({ min: 0, max: 10000 });

  setIsFiltering(false); // Optional: Reset filtering status if needed


};





  const globalVersion = useContext(ShoppingContext);

  if (!globalVersion) {
    return <div>Error: Shopping context not available</div>;
  }

  //jbsdijvfjds

  const [productDisplay] = useState(priceData4ProductDisplay.slice(0, 200));

  const [pageNumber, setPageNumber] = useState(0);
  let userPerPage = 12;
  const pageVisited = pageNumber * userPerPage;

  const [checkedItems, setCheckedItems] = useState({
    all: false,
    maleShoes: false,
    femaleShoes: false,
    childrenShoes: false,
    Nike: false,
    Kswiss: false,
    Puma: false,
    Encap: false,
    N620: false,
    N2030: false,
    N3140: false,
    N4150: false,
  });

  // Filter products based on search term
  const filteredProducts = isFiltering
    ? productDisplay.filter((product) => {
        
      if (checkedItems.all) return true; // Return all products if "All" is checked
        if (checkedItems.maleShoes && product.category === "male Shoes")
          return true;
        if (checkedItems.femaleShoes && product.category === "female Shoes")
          return true;
        if (checkedItems.childrenShoes && product.category === "children Shoes")
          return true;

        if (checkedItems.Nike && product.Brand === "Nike") return true;
        if (checkedItems.Puma && product.Brand === "Puma") return true;
        if (checkedItems.Kswiss && product.Brand === "Kswiss") return true;
        if (checkedItems.Encap && product.Brand === "Encap") return true;
        
        if (checkedItems.N620 && product.Size === "6-20") return true;
        if (checkedItems.N2030 && product.Size === "20-30") return true;
        if (checkedItems.N3140 && product.Size === "31-40") return true;
        if (checkedItems.N4150 && product.Size === "41-50") return true;

        // **New Price Range Condition**
        const productPrice = parseFloat(
          product.newPrice.replace(/[^0-9.-]+/g, "")
        );

        // Check if product price falls within the selected range
        if (productPrice >= priceRange.min && productPrice <= priceRange.max) {
          return true;
        }
        return false;
      })
    : productDisplay; // Default product list if no filter is applied


    // filter testing begins here


    





    //filter testing ends here


       


  
       
        

  const productDisplayElement = filteredProducts
    .slice(pageVisited, pageVisited + userPerPage)
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
          discount={product.discount}
          itemLeft={product.itemLeft}
        />
      );
    });


    // Function to handle price range change
const handlePriceRangeChange = (min: number, max: number) => {
  setPriceRange({ min, max });
  setIsFiltering(true); // Trigger filtering
}

  //  const [checkedItems, setCheckedItems] = useState({
  //    all: false,
  //   maleShoes: false,
  //   femaleShoes: false,
  //   childrenShoes: false,
  //   }
  //  )

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked} = event.target;

    // Set `isFiltering` to true when a filter is applied
    setIsFiltering(true);

    if (name === "all") {
      setCheckedItems({
        all: checked,
        maleShoes: checked,
        femaleShoes: checked,
        childrenShoes: checked,
        Nike: checked,
        Puma: checked,
        Kswiss: checked,
        Encap: checked,
        N620: checked,
        N2030: checked,
        N3140: checked,
        N4150: checked,
        
      });
    } else {
      setCheckedItems((prevState) => {
        const newCheckedItems = { ...prevState, [name]: checked };

        if (name === "femaleShoes" && checked) {
          newCheckedItems.maleShoes = false;
          newCheckedItems.childrenShoes = false;
          newCheckedItems.Kswiss = false;
          newCheckedItems.Puma = false;
          newCheckedItems.Encap = false;
          newCheckedItems.Nike = false;
          newCheckedItems.N2030 = false;
          newCheckedItems.N3140 = false;
          newCheckedItems.N4150 = false;
          newCheckedItems.N620 = false;
        } else if (name === "maleShoes" && checked) {
          newCheckedItems.femaleShoes = false;
          newCheckedItems.childrenShoes = false;
          newCheckedItems.Kswiss = false;
          newCheckedItems.Puma = false;
          newCheckedItems.Encap = false;
          newCheckedItems.Nike = false;
          newCheckedItems.N2030 = false;
          newCheckedItems.N3140 = false;
          newCheckedItems.N4150 = false;
          newCheckedItems.N620 = false;
        } else if (name === "childrenShoes" && checked) {
          newCheckedItems.femaleShoes = false;
          newCheckedItems.maleShoes = false;
          newCheckedItems.Kswiss = false;
          newCheckedItems.Puma = false;
          newCheckedItems.Encap = false;
          newCheckedItems.Nike = false;
          newCheckedItems.N2030 = false;
          newCheckedItems.N3140 = false;
          newCheckedItems.N4150 = false;
          newCheckedItems.N620 = false;
        } else if (name === "Nike" && checked) {
          newCheckedItems.Kswiss = false;
          newCheckedItems.Puma = false;
          newCheckedItems.Encap = false;
          newCheckedItems.femaleShoes = false;
          newCheckedItems.maleShoes = false;
          newCheckedItems.childrenShoes = false;
          newCheckedItems.N2030 = false;
          newCheckedItems.N3140 = false;
          newCheckedItems.N4150 = false;
          newCheckedItems.N620 = false;
        } else if (name === "Puma" && checked) {
          newCheckedItems.Kswiss = false;
          newCheckedItems.Nike = false;
          newCheckedItems.Encap = false;
          newCheckedItems.femaleShoes = false;
          newCheckedItems.maleShoes = false;
          newCheckedItems.childrenShoes = false;
          newCheckedItems.N2030 = false;
          newCheckedItems.N3140 = false;
          newCheckedItems.N4150 = false;
          newCheckedItems.N620 = false;
        } else if (name === "Kswiss" && checked) {
          newCheckedItems.Nike = false;
          newCheckedItems.Puma = false;
          newCheckedItems.Encap = false;
          newCheckedItems.femaleShoes = false;
          newCheckedItems.maleShoes = false;
          newCheckedItems.childrenShoes = false;
          newCheckedItems.N2030 = false;
          newCheckedItems.N3140 = false;
          newCheckedItems.N4150 = false;
          newCheckedItems.N620 = false;
        } else if (name === "Encap" && checked) {
          newCheckedItems.Kswiss = false;
          newCheckedItems.Puma = false;
          newCheckedItems.Nike = false;
          newCheckedItems.femaleShoes = false;
          newCheckedItems.maleShoes = false;
          newCheckedItems.childrenShoes = false;
          newCheckedItems.N2030 = false;
          newCheckedItems.N3140 = false;
          newCheckedItems.N4150 = false;
          newCheckedItems.N620 = false;
        } else if (name === "N620" && checked) {
          newCheckedItems.Kswiss = false;
          newCheckedItems.Puma = false;
          newCheckedItems.Nike = false;
          newCheckedItems.Encap = false;
          newCheckedItems.femaleShoes = false;
          newCheckedItems.maleShoes = false;
          newCheckedItems.childrenShoes = false;
          newCheckedItems.N2030 = false;
          newCheckedItems.N3140 = false;
          newCheckedItems.N4150 = false;
        } else if (name === "N2030" && checked) {
          newCheckedItems.Kswiss = false;
          newCheckedItems.Puma = false;
          newCheckedItems.Nike = false;
          newCheckedItems.Encap = false;
          newCheckedItems.femaleShoes = false;
          newCheckedItems.maleShoes = false;
          newCheckedItems.childrenShoes = false;
          newCheckedItems.N620 = false;
          newCheckedItems.N3140 = false;
          newCheckedItems.N4150 = false;
        } else if (name === "N4150" && checked) {
          newCheckedItems.Kswiss = false;
          newCheckedItems.Puma = false;
          newCheckedItems.Nike = false;
          newCheckedItems.Encap = false;
          newCheckedItems.femaleShoes = false;
          newCheckedItems.maleShoes = false;
          newCheckedItems.childrenShoes = false;
          newCheckedItems.N620 = false;
          newCheckedItems.N3140 = false;
          newCheckedItems.N2030 = false;
        } else if (name === "N3140" && checked) {
          newCheckedItems.Kswiss = false;
          newCheckedItems.Puma = false;
          newCheckedItems.Nike = false;
          newCheckedItems.Encap = false;
          newCheckedItems.femaleShoes = false;
          newCheckedItems.maleShoes = false;
          newCheckedItems.childrenShoes = false;
          newCheckedItems.N620 = false;
          newCheckedItems.N4150 = false;
          newCheckedItems.N2030 = false;
        }



        return newCheckedItems;
      });
    }
  };

  const pageCount = Math.ceil(productDisplay.length / userPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);


    window.scrollTo({
      top: 950,
      behavior: "smooth",
    });
  };

  // Update state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 375);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (
      !checkedItems.all &&
      !checkedItems.maleShoes &&
      !checkedItems.femaleShoes &&
      !checkedItems.childrenShoes &&
      !checkedItems.Nike &&
      !checkedItems.Puma &&
      !checkedItems.Kswiss &&
      !checkedItems.Encap &&
      !checkedItems.N2030 &&
      !checkedItems.N620 &&
      !checkedItems.N3140 &&
      !checkedItems.N4150
    ) {
      setIsFiltering(false);
    } else {
      setIsFiltering(true);
    }
  }, [checkedItems]);

  const openFilterBtn = () => {
    setOpenFilter(false);
  };

  const closeFilterBTN = () => {
    setOpenFilter(true);
  };

  return (
    <>
      <div className={containerClassName || "FirstCartPage---container"} id="mainPage">
        <div className="firstCARTpAGE---filterTag" onClick={openFilterBtn}>
          <p>Filter</p> <FilterIcon size={20} className="filterIcon" /> 
        </div>
        {showTurnHeadsLater && <TurnHeadsLater />}
          
          
        <div>
          .
        </div>
        <div className="FirstCartPage---ViewPanel">
          <div className={openFilter ? "FirstCartPage---SearchPanel" : "Close---SearchPanel" } >
              <div className="searchPanel--widthIssue">  {/*// trying to correct an issue */}
            <FilterCloseBtn
              size={25}
              className="filtercloseBTN"
              onClick={closeFilterBTN}
            /> 
            <div className="FilterSerachClear---container">   
            <h3>Filters</h3> <button type="button" className="px-1" onClick={resetCheckboxes}>Clear </button>
            </div>
            <div>
              <span className="FirstCartPgae---checkBoxContainer-A">
                <input
                  type="checkbox"
                  id="all"
                  name="all"
                  checked={checkedItems.all}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="" className="FirstCartPgae---labelContent-A">
                  All
                </label>
                <label htmlFor="">150</label>
              </span>
              <span className="FirstCartPgae---checkBoxContainer-B">
                <input
                  type="checkbox"
                  id="maleShoes"
                  name="maleShoes"
                  checked={checkedItems.maleShoes}
                  onChange={handleCheckboxChange}  
                  // disabled={checkedItems.all}
                />
                <label htmlFor="" className="FirstCartPgae---labelContent-B">
                  Males Shoes
                </label>
                <label htmlFor="">50 </label>
              </span>
              <span className="FirstCartPgae---checkBoxContainer-B">
                <input
                  type="checkbox"
                  id="femaleShoes"
                  name="femaleShoes"
                  checked={checkedItems.femaleShoes}
                  onChange={handleCheckboxChange}
                  // disabled={checkedItems.all}
                />
                <label htmlFor="" className="FirstCartPgae---labelContent-C">
                  Female shoes
                </label>
                <label htmlFor="">50</label>
              </span>

              <span className="FirstCartPgae---checkBoxContainer-B">
                <input
                  type="checkbox"
                  id="childrenShoes"
                  name="childrenShoes"
                  checked={checkedItems.childrenShoes}
                  onChange={handleCheckboxChange}
                  // disabled={checkedItems.all}
                />
                <label htmlFor="" className="FirstCartPgae---labelContent-D">
                  Children shoes
                </label>
                <label htmlFor="">50</label>
              </span>
            </div>

            <div>
              <span className="FirstCartPgae---RangeBox">
                <h4>Price</h4>
                <InputRange  handlePriceRange={handlePriceRangeChange} 
                MIN={MIN} MAX={MAX}
                values={values} setValues={setValues}
                />
              </span>
            </div>
            <div>
              <h4 className="FirstCartPage--size">Size</h4>
              <span className="FirstCartPgae---checkBoxContainer-B">
                <input
                  type="checkbox"
                  id="N06-20"
                  name="N620"
                  checked={checkedItems.N620}
                  onChange={handleCheckboxChange}
                  // disabled={checkedItems.all}
                />
                <label htmlFor="" className="FirstCartPgae---labelContent-E">
                  06 - 20
                </label>
                <label htmlFor="">20</label>
              </span>
              <span className="FirstCartPgae---checkBoxContainer-B">
                <input
                  type="checkbox"
                  id="20-30"
                  name="N2030"
                  checked={checkedItems.N2030}
                  onChange={handleCheckboxChange}
                  // disabled={checkedItems.all}
                />
                <label htmlFor="" className="FirstCartPgae---labelContent-E">
                  20 - 30
                </label>
                <label htmlFor="">50</label>
              </span>

              <span className="FirstCartPgae---checkBoxContainer-B">
                <input
                  type="checkbox"
                  id="31-40"
                  name="N3140"
                  checked={checkedItems.N3140}
                  onChange={handleCheckboxChange}
                  // disabled={checkedItems.all}
                />
                <label htmlFor="" className="FirstCartPgae---labelContent-E">
                  31 - 40
                </label>
                <label htmlFor="">40</label>
              </span>

              <span className="FirstCartPgae---checkBoxContainer-B">
                <input
                  type="checkbox"
                  id="41-50"
                  name="N4150"
                  checked={checkedItems.N4150}
                  onChange={handleCheckboxChange}
                  //  disabled={checkedItems.all}
                />
                <label htmlFor="" className="FirstCartPgae---labelContent-E">
                  41 - 50
                </label>
                <label htmlFor="">40</label>
              </span>

              <h4 className="FirstCartPage--Brands">Brands</h4>
              <span className="FirstCartPgae---checkBoxContainer-B">
                <input
                  type="checkbox"
                  id="Nike"
                  name="Nike"
                  checked={checkedItems.Nike}
                  onChange={handleCheckboxChange}
                  // disabled={checkedItems.all}
                />
                <label htmlFor="" className="FirstCartPgae---labelContent-F">
                  Nike
                </label>
                <label htmlFor="">120</label>
              </span>
              <span className="FirstCartPgae---checkBoxContainer-B">
                <input
                  type="checkbox"
                  id="Puma"
                  name="Puma"
                  checked={checkedItems.Puma}
                  onChange={handleCheckboxChange}
                  // disabled={checkedItems.all}
                />
                <label htmlFor="" className="FirstCartPgae---labelContent-F">
                  Puma
                </label>
                <label htmlFor="">03</label>
              </span>

              <span className="FirstCartPgae---checkBoxContainer-B">
                <input
                  type="checkbox"
                  id="Kswiss"
                  name="Kswiss"
                  checked={checkedItems.Kswiss}
                  onChange={handleCheckboxChange}
                  // disabled={checkedItems.all}
                />
                <label htmlFor="" className="FirstCartPgae---labelContent-G">
                  K-swiss
                </label>
                <label htmlFor="">01</label>
              </span>

              <span className="FirstCartPgae---checkBoxContainer-B">
                <input
                  type="checkbox"
                  id="Encap"
                  name="Encap"
                  checked={checkedItems.Encap}
                  onChange={handleCheckboxChange}
                  // disabled={checkedItems.all}
                />
                <label htmlFor="" className="FirstCartPgae---labelContent-H">
                  Encap
                </label>
                <label htmlFor="">01</label>
              </span>
            </div>
            </div>
          </div>

          <div className={filteredProducts.length > 0 ? "container---no-products-message": "container---no-products-message"} >
            <div className={filteredProducts.length > 0 ? "FirstCarPge---ProductDisplay" : "FirstCarPge---NoProduct" } >
              {/* {productDisplayElement} */}

              {filteredProducts.length > 0 ? (
                productDisplayElement
              ) : (
                <div className="no-products-message">
                  {/* <h2 className="NO--product">Product no longer available</h2> */}
                  <NoProductAvailiable />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="Pagination--mainHolder" >
          {pageCount < 12 && ( // Only show pagination if there is more than 1 page
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
              pageRangeDisplayed={isMobile ? 1 : 1} // Adjust the center range   
              marginPagesDisplayed={isMobile ? 1 : 1}
            />
          )}
        </div>

      </div>
    </>
  );
};

export default FirstCartPage;

// Filter products based on search term
//  const filteredProducts = productDisplay.filter((product) =>
//   product.productName.toLowerCase().includes(searchTerm.toLowerCase())
// );
