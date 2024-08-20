import { useEffect, useState } from "react";
import "../assets/component styles/scrollingProduct.css";



interface TimerProps {
  duration: number;

    
}


const TimeCounter: React.FC<TimerProps> = ({ duration }) => {
const [time, setTime] = useState(duration);

useEffect(()=>{
  setTimeout(()=>{
      setTime(time - 1000)
  }, 1000)

}, [time])

const getFormattedTime = (milliseconds:number)=> {
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
  const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

  return `${hours}h : ${minutes}m : ${seconds}s`;

  // return `${hours}h : ${minutes}m : ${seconds}s`
}

  return (
    <>
    <div className="ScrollingPage---timeCountDown">
                <p className="scrolingPage---paragraph">Ends in: {getFormattedTime(time)}</p>
               </div>
    </>
  )
}

export default TimeCounter
