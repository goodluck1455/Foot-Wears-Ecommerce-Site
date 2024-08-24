import ScrollingProduct from "./ScrollingProduct";
import "./component styles/firstCartPage.css"
import "./component styles/navigation.css"
import MainPage from "./MainPage";
import MovingText from './MovingText';
import FirstCartPage from "./FirstCartPage"
import { useRef } from "react";




interface HomePageProps {
  // handleClick: () => void;
}

const HomePage: React.FC<HomePageProps> = () => {
// function HomePage({handleClick}) {

      const gamesRef = useRef<HTMLDivElement| null>(null);

    return (
     


      <>
        <MainPage gamesRef={gamesRef} />
          <MovingText />
          <ScrollingProduct />
          <FirstCartPage gamesRef={gamesRef}/>
      </>
    )
  }
  
  export default HomePage
  