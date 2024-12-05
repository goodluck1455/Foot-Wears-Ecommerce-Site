// import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import "../assets/component styles/inputRange.css";

// const MIN = 0;
// const MAX = 1000000;

interface InputRangeProps {
  handlePriceRange: (min: number, max: number) => void;
  MAX:number;
  MIN:number;
  values:number[];
  setValues: any;
}



const InputRange: React.FC<InputRangeProps> = ({handlePriceRange, MAX, MIN, values, setValues}) => {
  // const [values, setValues] = useState([0, 1000000]);



  // const handleReset = () => {
  //   setValues([MIN, MAX]); // Reset values to default
  //   reset(); // Call the parent's reset function
  // };


  const currencyCatPrice = (newPrice:number)=>{
    const oldPriceNumber =  Number(newPrice);
    // const oldPriceNumber = parseFloat(newPrice.replace(/[^0-9.-]+/g, ""));
    return oldPriceNumber.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  });}

  const handleChange = (newValues: number[]) => {
    setValues(newValues); // Update the slider values
    handlePriceRange(newValues[0], newValues[1]); // Pass the selected range to the parent
   
  };


  return (
    <div className="range-slider-container">
      <Range
        step={1000}
        min={MIN}
        max={MAX}
        values={values}
        onChange={handleChange} // Call handleChange on slider change
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="range-slider-track"
            style={{
              background: getTrackBackground({
                values,
                colors: ["#151414", "#151414", "#151414"],
                min: MIN,
                max: MAX,
              }),
            }}>
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div {...props} className="range-slider-thumb" />
        )}
      />
      <p className="RangeStyle">
         {currencyCatPrice(values[0])} - {currencyCatPrice(values[1])}
      </p>
    </div>
  );
};

export default InputRange;
