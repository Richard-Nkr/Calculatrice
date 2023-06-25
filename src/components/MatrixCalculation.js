import React from 'react';

const MatrixCalculation = ({ handleButtonClick }) => {
  return (
    <div>
      <button onClick={() => handleButtonClick('matrixAdd(')}>Add</button>
      <button onClick={() => handleButtonClick('matrixSubtract(')}>Subtract</button>
      <button onClick={() => handleButtonClick('matrixMultiply(')}>Multiply</button>
    </div>
  );
};

export default MatrixCalculation;
