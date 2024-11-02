import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import "../assets/component styles/inputRange.css";

const MIN = 0;
const MAX = 1000000;

const InputRange = () => {
  const [values, setValues] = useState([30000, 500000]);


  const currencyCatPrice = (newPrice:number)=>{
    const oldPriceNumber =  Number(newPrice);
    // const oldPriceNumber = parseFloat(newPrice.replace(/[^0-9.-]+/g, ""));
    return oldPriceNumber.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  });}

  return (
    <div className="range-slider-container">
      <Range
        step={1000}
        min={MIN}
        max={MAX}
        values={values}
        onChange={(newValues) => setValues(newValues)}
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
        Range: {currencyCatPrice(values[0])} - {currencyCatPrice(values[1])}
      </p>
    </div>
  );
};

export default InputRange;
