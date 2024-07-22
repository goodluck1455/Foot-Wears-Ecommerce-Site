
import './App.css'
import Header from "./assets/Header";
import Footer from './assets/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './assets/HomePage';
import Shop from './assets/Shop';
import Cart from './assets/Cart';

function App() {


  return (
    <>
    <BrowserRouter>

     <Header />

     <main>
       <Routes>
        <Route index element={<HomePage />}/>
        <Route path='Shop' element={<Shop /> }/>
        {/* <Route path='CartShop' element={<CartShop /> }/> */}
        <Route path='Cart' element={<Cart /> }/>
        </Routes>
    
     </main>
     
     <Footer />

     </BrowserRouter>
    </>
  )
}

export default App
