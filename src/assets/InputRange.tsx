import { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import "../assets/component styles/inputRange.css"



const MIN = 0;
const MAX = 1000000;


const InputRange = () => {
    const [values, setValues] = useState([30000, 500000]);

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
                colors: ['#151414', '#151414', '#151414'],
                min: MIN,
                max: MAX
              })
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="range-slider-thumb"
          />
        )}
      />
      <p className="RangeStyle">Range: ${values[0]} - ${values[1]}</p>
    </div>
  );
};

export default InputRange;
