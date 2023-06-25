import React from 'react';

const AdvancedFunctions = ({ handleButtonClick }) => {

  return (
    <>
      <button onClick={() => handleButtonClick('^')}>^</button>
      <button onClick={() => handleButtonClick('!')}>!</button>
      <button onClick={() => handleButtonClick('√')}>√</button>
    </>
  );
};

export default AdvancedFunctions;
