// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import  {ShopContextProvider }  from './assets/ShopContext.tsx'
// import { CartProvider } from 'react-use-cart';
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
  // </React.StrictMode>,
)
