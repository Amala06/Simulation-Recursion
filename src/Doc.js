import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3'; 

const Doc = () => {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current)
            .attr("width", 500)
            .attr("height", 500);
        
        // Append a vertical line
        svg.append("line")
            .attr("x1", 250) // x-coordinate of the line's starting point
            .attr("y1", 0)   // y-coordinate of the line's starting point
            .attr("x2", 250) // x-coordinate of the line's ending point
            .attr("y2", 500) // y-coordinate of the line's ending point
            .attr("stroke", "black"); // Color of the line

        // Divide the line into multiple sections
        const numberOfSections = 10; // Change this value to change the number of sections
        const sectionHeight = 500 / numberOfSections;

        for (let i = 0; i < numberOfSections; i++) {
            svg.append("line")
                .attr("x1", 0)
                .attr("y1", i * sectionHeight)
                .attr("x2", 500)
                .attr("y2", i * sectionHeight)
                .attr("stroke", "gray") // Color of the horizontal lines
                .attr("stroke-dasharray", "2"); // Dashed line

            svg.append("line")
                .attr("x1", 250)
                .attr("y1", i * sectionHeight)
                .attr("x2", 250)
                .attr("y2", (i + 1) * sectionHeight)
                .attr("stroke", "gray") // Color of the vertical lines
                .attr("stroke-dasharray", "2"); // Dashed line
        }

    }, []);

    return (
        <svg ref={svgRef}></svg>
    );
}

export default Doc;
