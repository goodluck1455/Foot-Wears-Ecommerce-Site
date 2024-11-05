import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./component styles/ProductDescription.css";
import { FaHeart } from "react-icons/fa6";
import { GrPowerCycle } from "react-icons/gr";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineFacebook } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { useContext } from "react";
import { ShoppingContext } from "./ShopContext";
import { RiPoliceBadgeLine } from "react-icons/ri";
// import { toast, ToastContainer} from 'react-toastify';
// import { MdOutlineDangerous as NotAddedToCart } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useLocation } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { setAlert } from './assets/AlertContext.tsx'
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";
// import { useAlert } from './AlertContext.tsx';

import { useAlert } from "../assets/AlertContext.tsx";

interface ProductDescriptionProps {}

const ProductDescription: React.FC<ProductDescriptionProps> = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [addition, setAddition] = useState(1);
  // const [erroMessage, setErroMessage] = useState("")
  const navigate = useNavigate();

  const { setAlert } = useAlert();

  const [sizeSelected, setSizeselected] = useState<string | null>(null);

  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <div>No product details found.</div>;
  }

  const globalVersion = useContext(ShoppingContext);

  if (!globalVersion) {
    return <div>Error: Shopping context not available</div>;
  }
  const state = globalVersion.state;
  const dispatch = globalVersion.dispatch;

  const addNumber = () => {
    // toast.dismiss();
    // setAddition((prev)=>
    // setAddition((prev)=> Math.min(prev + 1, product.itemLeft));
    // if(product.itemLeft === product.quantity ){
    //   // setAddition((prev)=> Math.min(prev + 1, product.itemLeft));
    //   setErroMessage("you have reach the maximum quantity")
    // }else {
    //   setErroMessage("")
    //   setAddition((prev)=> Math.min(prev + 1, product.itemLeft));
    // }
    // if (addition >= product.itemLeft) {
    //   setErroMessage(`Only ${product.itemLeft} item left in the store`);

    //   setTimeout(() => {
    //     setErroMessage(""); // Clear the message after timeout
    //   }, 5000);

    //   return; // Prevent adding more
    // } else {
    // setErroMessage("");
    setAddition((prev) => Math.min(prev + 1, product.itemLeft)); // Increment quantity
    // }
  };

  const subtractNumber = () => setAddition((prev) => Math.max(prev - 1, 1));

  const convertToNaira = (newPrice: string) => {
    const oldPriceNumber = parseFloat(newPrice.replace(/[^0-9.-]+/g, ""));
    return oldPriceNumber.toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    });
  };

  // const activeSelected = ()=>{

  //        setSizeselected(true)
  // }
  // Prepopulate the size and quantity if the product exists in the cart
  useEffect(() => {
    const cartItem = state.find((item: any) => item.id === product.id);
    if (cartItem) {
      setSizeselected(cartItem.size);
      setAddition(cartItem.quantity);
    }
  }, [state, product.id]);

  const handleSize = (size: any) => {
    // localStorage.setItem(`size_${nsize}`, nsize.toString());
    setSizeselected(size);

    dispatch({
      type: "UPDATE_SIZE",
      payload: { id: product.id, size },
    });
  };

  const handleAddToCart = () => {
    if (!sizeSelected) {
      // Show popup message if size is not selected
      setAlert("Please select your shoe size!", "error");

      return;
    } else {
      dispatch({
        type: "ADD",
        payload: { ...product, quantity: addition, size: sizeSelected },
      });

      // setAlert('Item added successfully!', "success")
      // toast.success("Item added successfully!", {
      //   position: 'top-center',
      //   icon: <NotAddedToCart style={{ color: 'bue',  fontSize: "1.5em" }} />,

      //   })
      navigate("/Cart");
    }
  };

  return (
    <>
      <div className="container--productDescription">
        <NavLink to="/shop">
          <div className="ProductDescription-shopping">
            <MdKeyboardArrowLeft className="ProductDescription--left-shopping" />
            <h4>Continue shopping</h4>
          </div>
        </NavLink>

        <div className="Product--details">
          <div className="product--details-image-and-others">
            <div className="productDescription--Swiper">
              <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
              
                //   modules={[Navigation]}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                
                breakpoints={{
                  320: {
                    slidesPerView: 1.4,
                    spaceBetween: 10,
                  },
                  480: {
                    slidesPerView: 1.5,
                    spaceBetween: 15,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                }}
                             
                className="mySwiper2">
                  
                <SwiperSlide>
                  <img src={product.Image} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product.Image} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product.Image} alt="" />
                </SwiperSlide>
                <div className="custom-next">
                  <MdKeyboardDoubleArrowRight size={20} />
                </div>
                <div className="custom-prev">
                  <MdKeyboardDoubleArrowLeft size={20} />
                </div>
              </Swiper>
              <Swiper
                onSwiper={(swiper) => setThumbsSwiper(swiper)}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper">
                <SwiperSlide>
                  <img src={product.Image} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product.Image} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product.Image} alt="" />
                </SwiperSlide>
              </Swiper>

              <div className="productDescript----shareWithOthers">
                <p>Share this product</p>
                <MdOutlineFacebook
                  size={25}
                  className="productDescript---facebook"
                />
                <FaSquareXTwitter
                  size={25}
                  className="productDescript---facebook"
                />
                <FaInstagramSquare
                  size={25}
                  className="productDescript---facebook"
                />
              </div>
            </div>
            <div className="details---container">
              <div className="Product-details---productName">
                <div className="productName---container">
                  <h2>{product.productName}</h2>
                  <p>
                    <span className="Product-details---product-code">
                      Product code: 235486
                    </span>{" "}
                    {product.description}
                  </p>
                </div>
                <div className="productName---container">
                  <h3 className="productdetails---price">
                    {convertToNaira(product.newPrice)}
                  </h3>
                  <p className="ProductDetails--Oldprice">
                    {convertToNaira(product.oldPrice)}
                  </p>
                </div>
                <div className="productName---container">
                  <div className="displayFlex">
                    <h5 className="productdetails---price">
                      COLOUR: Multi-color
                    </h5>
                    <div className="productDescription---SizeGuide">
                      View Size Guide
                    </div>
                  </div>

                  <div className="size---container">
                    <div>
                      <p className="">Size: </p>
                    </div>
                    <div className="Container----sizeSelection">
                      {["47", "30", "20", "60", "31"].map((size) => (
                        <div
                          key={size}
                          className={`productDescription---sizeSelection ${
                            sizeSelected === size ? "activeSelected" : ""
                          }`}
                          onClick={() => handleSize(size)}>
                          {size}
                        </div>
                      ))}

                      {/* <div className={`productDescription---sizeSelection ${sizeselected ? "activeSelected": ""}`} onClick={(event)=>handleSize(product.id, event.currentTarget.textContent)}>47</div>
                              <div className={`productDescription---sizeSelection ${sizeselected && "activeSelected"}`} onClick={activeSelected}>30</div>
                              <div className={`productDescription---sizeSelection ${sizeselected && "activeSelected"}`} onClick={activeSelected}>20</div> */}
                    </div>
                  </div>

                  <div className="container--quantity">
                    <p className="">Quantity: </p>
                    <div
                      className={`productDescription---AddMinus ${
                        addition === 1 ? "disabled" : ""
                      }`}
                      onClick={subtractNumber}>
                      -
                    </div>
                    <div className="productDescription---Addition--result">
                      {addition}
                    </div>
                    <div
                      className={`productDescription---AddMinus ${
                        addition >= product.itemLeft ? "disabled" : ""
                      }`}
                      onClick={addNumber}>
                      +
                    </div>
                    {/* <p className='Error--message'>{erroMessage}</p> */}
                  </div>

                  <div className="productDescription--callForBulkPurchase">
                    <span>
                      {" "}
                      Call for bulk purchase <br />
                      +2348137713110{" "}
                    </span>
                  </div>

                  <div className="productDescription---AddToCart">
                    {/* <NavLink to="/Cart"> */}
                    <div>
                      <button type="button" onClick={handleAddToCart}>
                        <BsCart4 className="productDescript--Cart" /> ADD TO
                        CART
                      </button>
                    </div>
                    {/* </NavLink> */}
                    <div className="productDescript----saveForLater">
                      <FaHeart className="heart--saveLater" />{" "}
                      <p>Save for Later </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Delivery--and-return--details">
            <div className="deliveryAndReturnContainer">
              <h4>Deliver and Returns</h4>
            </div>
            <div className="truckFlex">
              <div>
                {" "}
                <TbTruckDelivery size={30} className="truckColor" />{" "}
              </div>
              <div className="delivery--container">
                <h4>Delivery</h4>
                <div className="Deiery--paragraph">
                  <p className="paragrahp">
                    {" "}
                    Estimated delivery time 1-9 business days Express Delivery
                    Available{" "}
                  </p>

                  <p className="paragrahp" >
                    <strong>For Same-Day-Delivery:</strong> Please place your
                    order before 11AM
                  </p>

                  <p className="paragrahp">
                    <b>Next-Day-Delivery: </b>Orders placed after 11AM will be
                    delievered the next day
                  </p>

                  <p className="paragrahp">
                    <b>Note:</b> Availability may vary by location{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="truckFlex">
              <div>
                {" "}
                <GrPowerCycle size={30} className="truckColor" />{" "}
              </div>

              <div className="delivery--container Deiery--paragraph">
                <h4>Return Policy</h4>
                <h5>Guaranteed 7-Day Return Policy</h5>
                <p>
                  For details about return shipping options, please visit -{" "}
                  <span>
                    <a href="/content/return-policy">Konga Return Policy</a>
                  </span>
                </p>
              </div>
            </div>

            <div className="truckFlex">
              <div>
                {" "}
                <RiPoliceBadgeLine size={30} className="truckColor" />{" "}
              </div>
              <div className="Deiery--paragraph">
                <h4> Warranty</h4>
                <p className="paragrahp">
                  Warranty information unavailable for this item.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <ToastContainer 
        
          autoClose = {3000}
          hideProgressBar ={false}
          closeOnClick ={true}
          pauseOnHover
          draggable

        
        /> */}
    </>
  );
};

export default ProductDescription;

{
  /* <ToastContainer
position="top-right"
autoClose={7000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/> */
}
