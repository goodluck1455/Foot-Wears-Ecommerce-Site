import ScrollingProduct from "./ScrollingProduct";
import "./component styles/firstCartPage.css"
import "./component styles/navigation.css"
import MainPage from "./MainPage";
import MovingText from './MovingText';
import FirstCartPage from "./FirstCartPage"





function HomePage() {


    return (
      <>
        <MainPage />
          <MovingText />
          <ScrollingProduct />
          <FirstCartPage />
      </>
    )
  }
  
  export default HomePage
  