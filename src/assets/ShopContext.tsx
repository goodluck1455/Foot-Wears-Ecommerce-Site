import  {createContext, Dispatch, useReducer,  useEffect, useRef} from 'react';
// import {priceData4ProductDisplay} from "../assets/PriceData"
import { GrStatusGood as AddedToCartIcon } from "react-icons/gr";
import { MdOutlineDangerous as NotAddedToCart } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  




type ShopContextType = {
  dispatch: Dispatch<any>;
  state: any;
  gamesRef: React.RefObject<HTMLDivElement>;

};




export const ShoppingContext = createContext<ShopContextType | null>(null);






export const ShopContextProvider = (props:any) => {
  

  const gamesRef = useRef<HTMLDivElement| null>(null);

    const initialState = JSON.parse(localStorage.getItem('cart') || '[]');
  
  
    const reducer = (state:any, action:any)=>{
      switch(action.type){
        case 'ADD': {
          const itemExists = state.find((item: any) => item.id === action.payload.id);
          
          // If the item already exists in the cart
          if (itemExists) {
            const cartQuantity = itemExists.quantity;
            const itemLeft = action.payload.itemLeft; // Assuming itemLeft is part of the payload
            const newQuantity = cartQuantity + action.payload.quantity;
        
            // Check if the quantity in the cart is less than the available stock
            if (newQuantity <= itemLeft) {
              // Increase the quantity of the item in the cart based on the user's selection
              const updatedCart = state.map((item: any) =>
                item.id === action.payload.id
                  ? { ...item, quantity: newQuantity }
                  : item
              );
        
              toast.success(`${action.payload.productName} quantity updated to ${newQuantity}`, {
                icon: <AddedToCartIcon style={{ color: 'green', fontSize: '1.5em' }} />,
              });
        
              localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save the updated cart state to localStorage
              return updatedCart;
            } else {
              // If the quantity exceeds the available stock, show an error message
              toast.error(`We have only ${itemLeft} of ${action.payload.productName} in the store`, {
                icon: <NotAddedToCart style={{ color: 'red', fontSize: '1.5em' }} />,
              });
        
              return state; // Do not modify the cart state
            }
          } else {
            // If the item doesn't exist in the cart, add it with the selected quantity
            const newItem = { ...action.payload, quantity: action.payload.quantity };
            const newState = [...state, newItem];
        
            toast.success(`${action.payload.productName} is successfully added to the cart`, {
              icon: <AddedToCartIcon style={{ color: 'green', fontSize: '1.5em' }} />,
            });
        
            localStorage.setItem('cart', JSON.stringify(newState)); // Save the updated cart state to localStorage
            return newState;
          }
        }


        case "REMOVE":
          const filteredState = state.filter((item: any) => item.id !== action.payload.id);
          
          toast.success(`${action.payload.productName} is successfully remove from cart`, {
            icon: <AddedToCartIcon style={{ color: 'green', fontSize: '1.5em' }} />,
          });

          localStorage.setItem('cart', JSON.stringify(filteredState));

          
      // If size and quantity are stored as separate keys in localStorage
       localStorage.removeItem(`size_${action.payload.id}`);
       localStorage.removeItem(`quantity_${action.payload.id}`);
     
      
        return filteredState;

        case "UPDATE_QUANTITY":
          const updatedQuantityState = state.map((item: any) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          );
          localStorage.setItem(`quantity_${action.payload.id}`, action.payload.quantity.toString());
          return updatedQuantityState;
      // return state.map((item: any) =>
      //   item.id === action.payload.id
      //     ? { ...item, quantity: action.payload.quantity }
      //     : item
      // );

      case "UPDATE_SIZE":
      const updatedSizeState = state.map((item: any) =>
        item.id === action.payload.id
          ? { ...item, size: action.payload.size }
          : item
      );
     
      localStorage.setItem(`size_${action.payload.id}`, action.payload.size);
      return updatedSizeState;
        // return state.map((item: any) =>
        //   item.id === action.payload.id
        //     ? { ...item, size: action.payload.size }
        //     : item
        // );

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









// case 'ADD':
//         const itemExists = state.some((item: any) => item.id === action.payload.id);
//         if (itemExists) {
//           toast.error(`${action.payload.productName} is already in the cart`, {
//             icon: <NotAddedToCart style={{ color: 'red',  fontSize: "1.5em" }} />,
//           });
         
//           return state; // Do not add the item if it already exists
//         } else {
//           const newState = [...state, action.payload];
//           toast.success(`${action.payload.productName} is successfully added to the cart`, {
//             icon: <AddedToCartIcon style={{ color: 'green',  fontSize: "1.5em" }} />,
//           });
          
//           localStorage.setItem('cart', JSON.stringify(newState)); // Save the updated cart state to localStorage
//           return newState;
//         }
