import React, { useState } from 'react';
import { Range } from 'react-range';
interface PriceRangeSliderProps {
    values: number[];
    setValues: React.Dispatch<React.SetStateAction<number[]>>; // The type of setcountry
}
const PriceRangeSlider: React.FC<PriceRangeSliderProps>= ({values,setValues}) => {
  
  const handleRangeChange = (newValues: number[]) => {
    setValues(newValues);
  };

  return (
    <div className="w-full p-4"> {/* Outer container */}
      <Range
        step={10} // step value
        min={0}   // minimum price
        max={10000} // maximum price
        values={values}
        onChange={handleRangeChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-1 w-full bg-gray-300 rounded-md" // Tailwind for track
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="h-5 w-5 bg-gray-400 rounded-full shadow-lg" // Tailwind for thumb
          />
        )}
      />
      
      {/* Price Values */}
      <div className="flex justify-between mt-3 text-sm text-gray-700">
        <span>Min: ${values[0]}</span>
        <span>Max: ${values[1]}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
