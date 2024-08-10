import  {createContext, Dispatch, useReducer,  useEffect, useState} from 'react';
// import {priceData4ProductDisplay} from "../assets/PriceData"
import { GrStatusGood as AddedToCartIcon } from "react-icons/gr";
import { MdOutlineDangerous as NotAddedToCart } from "react-icons/md";
// type ShopContextProps = {
//   children: any,
  
//  }

// type ShopContextValue = {
  // cartItems: CartItems;
  // addToCart: (itemId: number) => void;
  // SetCartItems: React.Dispatch<React.SetStateAction<CartItems>>;
// };

type ShopContextType = {
  // g: number;
  dispatch: Dispatch<any>;
  state: any;

};

export const ShoppingContext = createContext<ShopContextType | null>(null);

// const getDefaultCart = ()=>{
// let cart = {}
// for(let i = 1; i < priceData4ProductDisplay.length +1; i++){
//   cart[i] = 0;
//   return cart;
// }
// }




export const ShopContextProvider = (props:any) => {
  const [message, setMessage] = useState<string | null>(null);
  const [popupVisible, setPopupVisible] = useState(false);
 
    // const [cartItems, SetCartItems] = useState();

    //  const addToCart = (itemId)=>{
    //   SetCartItems((prev)=>{...prev, [itemId]: prev[itemId]+1};);
    //  }
    const initialState = JSON.parse(localStorage.getItem('cart') || '[]');
    //  const removeFromCart = (itemId)=>{
    //   SetCartItems((prev)=>{...prev, [itemId]: prev[itemId]-1};)
    //  }
  
    const reducer = (state:any, action:any)=>{
      switch(action.type){
        case 'ADD':
        const itemExists = state.some((item: any) => item.id === action.payload.id);
        if (itemExists) {
          setMessage(`${action.payload.productName} is already in the cart`);
          setPopupVisible(true);
                    setTimeout(() => {
                        setPopupVisible(false);
                    }, 7000);
          return state; // Do not add the item if it already exists
        } else {
          const newState = [...state, action.payload];
          setMessage(`${action.payload.productName} is successfully  added to cart`);
          setPopupVisible(true);
                    setTimeout(() => {
                        setPopupVisible(false);
                    }, 7000);
          localStorage.setItem('cart', JSON.stringify(newState)); // Save the updated cart state to localStorage
          return newState;
        }

        case "REMOVE":
        return state.filter((item: any) => item.id !== action.payload.id);

        case "UPDATE_QUANTITY":
      return state.map((item: any) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

      default:
        return state;
      }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    // Save the cart state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

     const contextValue = {state,  dispatch};
       

  return (
    <>
      <ShoppingContext.Provider value={contextValue}>
            {props.children}
            {/* {message && (
                 <div className="popup-message">
                 <AddedToCartIcon  className='popup-icon'/> <p>{message}</p>
                    </div>
                )} */}
                 
      </ShoppingContext.Provider>

      {popupVisible && (
                <div className={popupVisible ? "popup-message":"popup-message-A" }>

          {message?.includes("already") ? (
            <NotAddedToCart className='popup-icon' />
          ) : (
            <AddedToCartIcon className='popup-icon' />
          )}
            <p>{message}</p> 
                </div>
            )}
    </>
  );
};

// export default ShopContextProvider;