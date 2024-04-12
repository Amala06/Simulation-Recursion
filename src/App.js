import React, { useState } from 'react';
import './style.css'
import Home from './Home';
import MatrixComponent from './Matrix';
import ExcelSheetContainer from './Excel';

const App = () => {
  const [size, setSize] = useState('');
  const [array, setArray] = useState([]);
  const [element,setElement]=useState("");

  const handleInput = (e) => {
    setSize(e.target.value);
  };
  const handleElement = (e) => {
    setElement(e.target.value);
  };

  const handleArrayInput = () => {
    const newArray = element.split(',').map((item) => parseInt(item.trim(), 10));
    setArray(newArray);
  };

  return (
    <>
      {/* Taking the input size of the array */}
      <p>Enter the desired size of array</p>
      <input value={size} onChange={handleInput}></input>
      <p>Enter the elements of the array</p>
      <input value={element} onChange={handleElement}></input>


      <button onClick={handleArrayInput}>Create Array</button>

      {/* Displaying the size of the array */}
      <p>Array Size: {array.length}</p>

      {/* Displaying each element of the array in a box */}
      <div className='array_main_component'>
        {array.map((item, index) => (
          <>
          <div
            key={index}
           className='array_inner_component'
          >
            {item}
            {/* sleep(1000) */}
           
         
          </div>
            {/* <Home/> */}
            </>
            //  {index === 0 && <div className="vertical-line"></div>}
        ))}
        {/* <Home/> */}
        <Home array={array} />  

      </div>
{/* <MatrixComponent/> */}
{/* <ExcelSheetContainer/> */}
    </>
  );
};

export default App;
