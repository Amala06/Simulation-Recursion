import React, { useEffect, useState } from 'react';
import './style.css'; // Import CSS for styling (create this file)

const ExcelSheetContainer = () => {
  const [numRows, setNumRows] = useState(0);
  const [numCols, setNumCols] = useState(0);

  useEffect(() => {
    const calculateRowsAndCols = () => {
      const screenWidth = window.innerWidth/4;
      const screenHeight = window.innerHeight;

      const maxRows = Math.floor(screenHeight / 20); // Max rows based on 20px height per cell
      const maxCols = Math.floor(screenWidth / 20); // Max columns based on 20px width per cell

      setNumRows(maxRows);
      setNumCols(maxCols);
    };

    calculateRowsAndCols();

    window.addEventListener('resize', calculateRowsAndCols);

    return () => {
      window.removeEventListener('resize', calculateRowsAndCols);
    };
  }, []);

  // Generate rows and columns for the Excel sheet
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    const cols = [];
    for (let j = 0; j < numCols; j++) {
      cols.push(<td key={j}>{`Row ${i + 1}, Col ${j + 1}`}</td>);
    }
    rows.push(<tr key={i}>{cols}</tr>);
  }

  return (
   <> <div className="excel-sheet-container">
      <table className="excel-sheet-table">
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
   { rows[0]="red"}
    
    </>
  );
};

export default ExcelSheetContainer;
