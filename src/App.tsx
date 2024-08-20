
import './App.css'
import Header from "./assets/Header";
import Footer from './assets/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './assets/HomePage';
import Shop from './assets/Shop';
import Cart from './assets/Cart';
import NotFound from './assets/NotFound';
import CheckOutPage from './assets/CheckOutPage';
// import { useState } from "react";



interface AppProps {
  // handleClick: () => void;
}


const App: React.FC<AppProps> = () => {
// function App() {
  // const [show, setShow] = useState(true);
	// const [cart , setCart] = useState([]);
	// const [warning, setWarning] = useState(false);

	// const handleClick = (item)=>{
	// 	let isPresent = false;
	// 	cart.forEach((product)=>{
	// 		if (item.id === product.id)
	// 		isPresent = true;
	// 	})
	// 	if (isPresent){
	// 		setWarning(true);
	// 		setTimeout(()=>{
	// 			setWarning(false);
	// 		}, 2000);
	// 		return ;
	// 	}
	// 	setCart([...cart, item]);
	// }

  // const handleChange = (item, d) =>{
	// 	let ind = -1;
	// 	cart.forEach((data, index)=>{
	// 		if (data.id === item.id)
	// 			ind = index;
	// 	});
	// 	const tempArr = cart;
	// 	tempArr[ind].amount += d;
		
	// 	if (tempArr[ind].amount === 0)
	// 		tempArr[ind].amount = 1;
	// 	setCart([...tempArr])
	// }
    


  return (
    <>
    <BrowserRouter>
 
     <Header  />

     <main>
       <Routes>
        <Route index element={<HomePage  />}/>
        <Route path='Shop' element={<Shop /> }/>
        <Route path='Cart' element={<Cart  /> }/>
		<Route path='CheckOutPage' element={<CheckOutPage /> }/>
        <Route path='*' element={<NotFound /> }/>
        </Routes>
      
     </main>
     
     <Footer />
  
     </BrowserRouter>
    </>
  )
}

export default App
