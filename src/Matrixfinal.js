import React, { useState } from 'react';
import './style.css'
import { useEffect } from 'react';
import { style } from 'd3';

const TwoDimensionalArray = () => {
  // Define the dimensions of the 2D array (rows and columns)
  const [size, setSize] = useState(3);
  const [arrays, setArrays] = useState([]);
  const [element, setElement] = useState("");

  const numRows = size * size - 1;
  const numCols = size * numRows;

  // Initialize the 2D array with row and column IDs
  const initialArray = Array.from({ length: numRows }, (_, rowIndex) =>
    Array.from({ length: numCols }, (_, colIndex) => `${rowIndex + 1}, ${colIndex + 1}`)
  );

  // State to hold the 2D array
  const [array, setArray] = useState(initialArray);

  // Function to update an element in the array
  const updateElement = (rowIndex, colIndex, newValue) => {
    const updatedArray = [...array];
    updatedArray[rowIndex][colIndex] = newValue;
    setArray(updatedArray);
  };

  const handleInput = (e) => {
    setSize(e.target.value);
  };

  const handleArrayInput = () => {
    const newArray = element.split(',').map((item) => parseInt(item.trim(), 10));
    setArrays(newArray);
  };

  const initialColour=()=>{
const initial=numCols/2;
console.log(initial)
for (let index = initial; index < parseInt(size)+parseInt(initial); index++) {
   array[0][index-1]=arrays[index-parseInt(initial)]

  // console.log(array[0][index])
  console.log(parseInt(size)+parseInt(initial)-1)
}
  }


  return (
    <div>
      <h2>2D Array Example</h2>
      <p>Enter the desired size of array</p>
      <input value={size} onChange={handleInput}></input>
      <p>Enter the elements of the array</p>
      <input value={element} onChange={(e) => setElement(e.target.value)}></input>
      <button onClick={handleArrayInput}>Create Array</button>

      {/* Displaying the size of the array */}
      <p>Array Size: {arrays.length}</p>
      <div >
        {array.map((row, rowIndex) => (
          <div key={rowIndex} className='array_main_component'>
            {row.map((value, colIndex) => (
              <span key={colIndex} className='array_inner_component' id={value}>{value}</span>
            ))}
            <br />
          </div>
        ))}
        <p>{array[0][1]}</p>

{/* <button onClick={initialColour(array)}> click</button> */}
<button onClick={() => initialColour()}>Click to Initialize Color</button>
    {/* </div> */}
        
      </div>
    </div>
  );
};

export default TwoDimensionalArray;
