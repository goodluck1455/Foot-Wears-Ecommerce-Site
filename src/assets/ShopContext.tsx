import  {createContext, Dispatch, useReducer,  useEffect, useRef} from 'react';
// import {priceData4ProductDisplay} from "../assets/PriceData"
import { GrStatusGood as AddedToCartIcon } from "react-icons/gr";
import { MdOutlineDangerous as NotAddedToCart } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
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
  gamesRef: React.RefObject<HTMLDivElement>;

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
  // const [message, setMessage] = useState<string | null>(null);
  // const [popupVisible, setPopupVisible] = useState(false);
  const gamesRef = useRef<HTMLDivElement| null>(null);
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
          toast.error(`${action.payload.productName} is already in the cart`, {
            icon: <NotAddedToCart style={{ color: 'red',  fontSize: "1.5em" }} />,
          });
         
          return state; // Do not add the item if it already exists
        } else {
          const newState = [...state, action.payload];
          toast.success(`${action.payload.productName} is successfully added to the cart`, {
            icon: <AddedToCartIcon style={{ color: 'green',  fontSize: "1.5em" }} />,
          });
          // setMessage(`${action.payload.productName} is successfully  added to cart`);
          // setPopupVisible(true);
          //           setTimeout(() => {
          //               setPopupVisible(false);
          //           }, 7000);
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

      case "UPDATE_SIZE":
        return state.map((item: any) =>
          item.id === action.payload.id
            ? { ...item, size: action.payload.size }
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

     const contextValue = {state,  dispatch, gamesRef};
       

  return (
    <>
      <ShoppingContext.Provider value={contextValue}>
            {props.children}
        
                 
      </ShoppingContext.Provider>

      <ToastContainer
        position="top-right"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* {popupVisible && (
                <div className={popupVisible ? "popup-message":"popup-message-A" }>

          {message?.includes("already") ? (
            <NotAddedToCart className='popup-icon' />
          ) : (
            <AddedToCartIcon className='popup-icon' />
          )}
            <p>{message}</p> 
                </div>
            )} */}
    </>
  );
};

// export default ShopContextProvider;