import ScrollingProduct from "./ScrollingProduct";
import "./component styles/firstCartPage.css"
import "./component styles/navigation.css"
import MainPage from "./MainPage";
import MovingText from './MovingText';
import FirstCartPage from "./FirstCartPage"
// import { useContext } from "react";
// import {ShoppingContext} from "./ShopContext";



interface HomePageProps {
  // handleClick: () => void;
}

const HomePage: React.FC<HomePageProps> = () => {
// function HomePage({handleClick}) {

// const globalVersion = useContext(ShoppingContext);

// if (!globalVersion) {
//   return <div>Error: Shopping context not available</div>;
// }
    //  const gamesRef = globalVersion.gamesRef;
      // const gamesRef = useRef<HTMLDivElement| null>(null);

    return (
     


      <>
        <MainPage  />
          <MovingText />
          <ScrollingProduct />
          <FirstCartPage />
      </>
    )
  }
  
  export default HomePage
  