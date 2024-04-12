import React from 'react';
import Home from './Home';
import './style.css'

const MatrixComponent = () => {
  const points = [];

  // Generate points for the matrix (you can customize the size)
  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      points.push({ x, y });
    }
  }

  return (
    <div className="matrix-container">
      {/* Create an SVG element with the points */}
      <svg className="matrix-svg" viewBox="0 0 100 100">
        {points.map((point, index) => (
          <circle
            key={index}
            cx={(point.x + 0.5) * (100 / 20)} // Adjusting the position to center the circles
            cy={(point.y + 0.5) * (100 / 20)} // Adjusting the position to center the circles
            r={1}
            fill="blue"
          />
        ))}
        {/* Place the Home component */}
        {/* <Home /> */}
      </svg>
    </div>
  );
};

export default MatrixComponent;
