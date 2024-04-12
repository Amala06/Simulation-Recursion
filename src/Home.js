// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3'; // import all d3.js functions as d3
// import './App.css';

// const Home = () => {
//   const svgRef = useRef();

//   useEffect(() => {
//     const svg = d3.select(svgRef.current);

//     // Vertical Line
//     setTimeout(() => {
//       svg.append("line")
//         .attr("x1", 50)
//         .attr("y1", 0)
//         .attr("x2", 50)
//         .attr("y2", 0) // Start the line from top (y1 and y2 both at 0)
//         .attr("stroke", "black")
//         .transition() // Add transition for animation
//         .duration(1000) // Duration in milliseconds
//         .attr("y2", 25); // End the line at y-coordinate 50 to form a vertical line
//     }, 1000); // Delay for 1000ms (1 second)

//     // Horizontal Lines
//     setTimeout(() => {
//       svg.append("line")
//         .attr("x1", 0)
//         .attr("y1", 25)
//         .attr("x2", 0) // Start the line from left (x1 and x2 both at 0)
//         .attr("y2", 25)
//         .attr("stroke", "black")
//         .transition()
//         .duration(800)
//         .attr("x2", 100); // End the line at x-coordinate 100 to form a horizontal line
//     }, 2000); // Delay for 2000ms (2 seconds)

//     setTimeout(() => {
//       svg.append("line")
//         .attr("x1", 0)
//         .attr("y1",25)
//         .attr("x2", 0)
//         .attr("y2", 25)
//         .attr("stroke", "black")
//         .transition()
//         .duration(800)
//         .attr("x2", 0)
//         .attr("y2", 50); // End the line at y-coordinate 100 to form a line downwards
//     }, 3000); // Delay for 3000ms (3 seconds)

//     setTimeout(() => {
//       svg.append("line")
//         .attr("x1", 100)
//         .attr("y1", 25)
//         .attr("x2", 100)
//         .attr("y2", 25)
//         .attr("stroke", "black")
//         .transition()
//         .duration(1000)
//         .attr("x1", 100)
//         .attr("y1", 25)
//         .attr("x2", 100)
//         .attr("y2", 50); // End the line at y-coordinate 100 to form a line downwards
//     }, 4000); // Delay for 4000ms (4 seconds)

//   }, []);

//   return (
//     <svg ref={svgRef} className="container"  width={100} height={200}>
//     </svg>
//   );
// };

// export default Home;
// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3'; // Import all d3.js functions as d3
// import './App.css';

// const Home = () => {
//   const svgRef = useRef();

//   useEffect(() => {
//     const svg = d3.select(svgRef.current);

//     // Vertical Line
//     setTimeout(() => {
//       svg.append("line")
//         .attr("x1", 50)
//         .attr("y1", 0)
//         .attr("x2", 50)
//         .attr("y2", 0) // Start the line from top (y1 and y2 both at 0)
//         .attr("stroke", "black")
//         .transition() // Add transition for animation
//         .duration(1000) // Duration in milliseconds
//         .attr("y2", 25); // End the line at y-coordinate 25 to form a vertical line
//     }, 1000); // Delay for 1000ms (1 second)

//     // Horizontal Lines
//     setTimeout(() => {
//       svg.append("line")
//         .attr("x1", 0)
//         .attr("y1", 25)
//         .attr("x2", 0) // Start the line from left (x1 and x2 both at 0)
//         .attr("y2", 25)
//         .attr("stroke", "black")
//         .transition()
//         .duration(800)
//         .attr("x2", 100); // End the line at x-coordinate 100 to form a horizontal line
//     }, 2000); // Delay for 2000ms (2 seconds)

//     setTimeout(() => {
//       svg.append("line")
//         .attr("x1", 0)
//         .attr("y1", 25)
//         .attr("x2", 0)
//         .attr("y2", 25)
//         .attr("stroke", "black")
//         .transition()
//         .duration(800)
//         .attr("x2", 0)
//         .attr("y2", 50); // End the line at y-coordinate 50 to form a line downwards
//     }, 3000); // Delay for 3000ms (3 seconds)

//     setTimeout(() => {
//       svg.append("line")
//         .attr("x1", 100)
//         .attr("y1", 25)
//         .attr("x2", 100)
//         .attr("y2", 25)
//         .attr("stroke", "black")
//         .transition()
//         .duration(1000)
//         .attr("x1", 100)
//         .attr("y1", 25)
//         .attr("x2", 100)
//         .attr("y2", 50); // End the line at y-coordinate 50 to form a line downwards
//     }, 4000); // Delay for 4000ms (4 seconds)

//     // Adding resizable arrays at the ends of the last vertical lines
//     svg.append("text")
//       .attr("x", 0)
//       .attr("y", 50)
//       .text("[ ]")
//       .attr("font-family", "Arial")
//       .attr("font-size", "20px")
//       .attr("fill", "black");

//     svg.append("text")
//       .attr("x", 85)
//       .attr("y", 50)
//       .text("[ ]")
//       .attr("font-family", "Arial")
//       .attr("font-size", "20px")
//       .attr("fill", "black");

//   }, []);

//   return (
//     <svg ref={svgRef} className="container" width={200} height={200}></svg>
//   );
// };

// export default Home;


import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3'; // Import all d3.js functions as d3
import './App.css';
import App from './App';
import MatrixComponent from './Matrix';
import Test from './Test';

const Home = ({ array }) => {
  const svgRef = useRef();
  console.log(array);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Vertical Line
    setTimeout(() => {
      svg.append("line")
        .attr("x1", 50)
        .attr("y1", 0)
        .attr("x2", 50)
        .attr("y2", 0) // Start the line from top (y1 and y2 both at 0)
        .attr("stroke", "black")
        .transition() // Add transition for animation
        .duration(1000) // Duration in milliseconds
        .attr("y2", 25); // End the line at y-coordinate 25 to form a vertical line
    }, 1000); // Delay for 1000ms (1 second)

    // Horizontal Lines
    setTimeout(() => {
      svg.append("line")
        .attr("x1", 0)
        .attr("y1", 25)
        .attr("x2", 0) // Start the line from left (x1 and x2 both at 0)
        .attr("y2", 25)
        .attr("stroke", "black")
        .transition()
        .duration(800)
        .attr("x2", 100); // End the line at x-coordinate 100 to form a horizontal line
    }, 2000); // Delay for 2000ms (2 seconds)

    setTimeout(() => {
      svg.append("line")
        .attr("x1", 0)
        .attr("y1", 25)
        .attr("x2", 0)
        .attr("y2", 25)
        .attr("stroke", "black")
        .transition()
        .duration(800)
        .attr("x2", 0)
        .attr("y2", 50); // End the line at y-coordinate 50 to form a line downwards
    }, 3000); // Delay for 3000ms (3 seconds)

    setTimeout(() => {
      svg.append("line")
        .attr("x1", 100)
        .attr("y1", 25)
        .attr("x2", 100)
        .attr("y2", 25)
        .attr("stroke", "black")
        .transition()
        .duration(1000)
        .attr("x1", 100)
        .attr("y1", 25)
        .attr("x2", 100)
        .attr("y2", 50); // End the line at y-coordinate 50 to form a line downwards
    }, 4000); // Delay for 4000ms (4 seconds)

    // Adding resizable arrays at the ends of the last vertical lines
    setTimeout(() => {
      svg.append('rect')
      .attr('x', 0)
      .attr('y', 50)
      .attr('width', 40)
      .attr('height', 40)
      .transition()
      .duration(1000)

      .attr('stroke', 'black')
      .attr('fill', '#69a3b2');
    }, 5000); // Delay for 4000ms (4 seconds)

    setTimeout(() => {
      svg.append('rect')
      .attr('x', 85)
      .attr('y', 50)
      .attr('width', 40)
      .attr('height', 40)
      .transition()
      .duration(1000)
      .attr('stroke', 'black')
      .attr('fill', '#69a3b2');
    }, 6000); 
    
   // Delay for 4000ms (4 seconds)

  }, [array]);

  return (
    <svg ref={svgRef} className="container" width={200} height={200}></svg>
  );
};

export default Home;

