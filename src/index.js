import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Doc from './Doc';
import TwoDimensionalArray from './Matrixfinal';
import Display from './versions/v1/Display';
import Dynamic from './versions/v1/Dynamic';
import FinalCopy from './versions/v1/FinalCopy';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMain from './versions/v1/MainMain';
import TestMain from './versions/v1/TestMain';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <Display/> */}
    {/* <FinalCopy/> */}
    {/* <MainMain/> */}
    <TestMain/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
