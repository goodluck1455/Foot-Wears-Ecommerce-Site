
import './App.css'
import Header from "./assets/Header";
import Footer from './assets/Footer';
import {HashRouter as BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import HomePage from './assets/HomePage';
import Shop from './assets/Shop';
import Cart from './assets/Cart';
import NotFound from './assets/NotFound';
import CheckOutPage from './assets/CheckOutPage';
import ScrollToTop from './assets/ScrollTop';
import ProductDescription from './assets/ProductDescription';
// import { useEffect, useState } from 'react';


// import { lazy, Suspense } from 'react';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// Lazy load components
// const HomePage = lazy(() => import('./assets/HomePage'));
// const Shop = lazy(() => import('./assets/Shop'));
// const Cart = lazy(() => import('./assets/Cart'));
// const NotFound = lazy(() => import('./assets/NotFound'));
// const CheckOutPage = lazy(() => import('./assets/CheckOutPage'));
// const ProductDescription = lazy(() => import('./assets/ProductDescription'));




// interface AppProps {
//   // handleClick: () => void;
// }


// const App: React.FC<AppProps> = () => {

  

  

//   return (
//     <>
//     <BrowserRouter>
//  	<ScrollToTop />
//      <Header  />

//      <main>
//        <Routes>

//         <Route index element={<HomePage  />}/>
//         <Route path='Shop' element={<Shop /> }/>
//         <Route path='Cart' element={<Cart  /> }/>
// 		    <Route path='CheckOutPage' element={<CheckOutPage /> }/>
// 		     <Route path='/ProductDescription' element={<ProductDescription /> }/>
//         <Route path='*' element={<NotFound /> }/>
//         </Routes>
      
//      </main>

//       <Footer />
     
  
//      </BrowserRouter>
//     </>
//   )
// }

// export default App







// interface AppProps {}

// const App: React.FC<AppProps> = () => {
//   return (
//     <Router>
//       <ScrollToTop />
//       <Header />
//       <MainContent />
//     </Router>
//   );
// };

// // Separate component to use `useLocation` correctly within `Router` context
// const MainContent: React.FC = () => {
//   const location = useLocation();

//   // Define paths where you don't want the footer to show
//   const noFooterPaths = ["/ProductDescription"]; // Add any other paths here

//   return (
//     <>
//       <main>
//         <Routes>
//           <Route index element={<HomePage />} />
//           <Route path="Shop" element={<Shop />} />
//           <Route path="Cart" element={<Cart />} />
//           <Route path="CheckOutPage" element={<CheckOutPage />} />
//           <Route path="/ProductDescription" element={<ProductDescription />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </main>
//       {/* Conditionally render the Footer */}
   

//       {!noFooterPaths.includes(location.pathname) || (
//         <div className={window.innerWidth <= 375 ? 'hide-footer' : 'showFooter'}>
//           <Footer />
//         </div>
//       )}
//     </>
//   );
// };

// export default App;










import { useEffect, useState } from 'react';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <MainContent />
    </BrowserRouter>
  );
};

// Separate component to use `useLocation` and check window width
const MainContent: React.FC = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 375);
  const [isMobile_430, setIsMobile_430] = useState(window.innerWidth <= 430);
  const [isMediumSmall, setIsMediumSmall] = useState(window.innerWidth <= 360);
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 320 && window.innerWidth <= 414);

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 375);
      setIsMediumSmall(window.innerWidth <= 360);
      setIsMobile_430(window.innerWidth <= 430);
      setIsMediumScreen(window.innerWidth >= 320 && window.innerWidth <= 414);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define paths where you don't want the footer to show on mobile
  const noFooterPaths = ["/ProductDescription"];


  const shouldRenderFooter = !(
    (isMobile || isMediumScreen || isMediumSmall || isMobile_430 ) && 
    noFooterPaths.includes(location.pathname)
  );


// Fallback component using Skeleton while components loadadd
// const LoadingSkeleton = () => (
//   <div>
//     <Skeleton height={50} width="80%" />
//     <Skeleton height={200} width="100%" />
//     <Skeleton height={50} width="50%" />
//     <Skeleton height={60} width="90%" />
//   </div>
// );





  return (
    <>
      <main>
      {/* <Suspense fallback={<LoadingSkeleton />}> */}
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="CheckOutPage" element={<CheckOutPage />} />
          <Route path="/ProductDescription" element={<ProductDescription />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* </Suspense> */}
      </main>

      {/* Conditionally render the Footer */}
      { shouldRenderFooter && <Footer />}
    </>
  );
};

export default App;









