import React from 'react';
// import { NavLink } from "react-router-dom";
import { BsFillCartXFill as EmptyCart } from "react-icons/bs";
// import { FaCartPlus as EmptyCart } from "react-icons/
import "../assets/component styles/NoProductAvailiable.css";

interface NoProductAvailiableProps {
    
}

const NoProductAvailiable: React.FC<NoProductAvailiableProps> = () => {
    return (
        <div>
            <div className="Product--EmptyCart">
              <div className="Emptycart---Image">
               <EmptyCart size={30}/>
              </div>
            
              <h3 className="emptyCart--paragrap">Out of Stock</h3>
              </div>
        </div>
    );
};

export default NoProductAvailiable;