// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import  {ShopContextProvider }  from './assets/ShopContext.tsx'
import { AlertProvider } from './assets/AlertContext.tsx'
// import { ProductProvider } from './assets/ProductContext.tsx'
// import { CartProvider } from 'react-use-cart';
ReactDOM.createRoot(document.getElementById('root')!).render(

    <AlertProvider > 
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
  </AlertProvider>

)
