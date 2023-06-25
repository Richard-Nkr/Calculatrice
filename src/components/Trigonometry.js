import React from 'react';

const Trigonometry = ({ handleButtonClick }) => {
  return (
    <div>
      <button onClick={() => handleButtonClick('sin(')}>sin</button>
      <button onClick={() => handleButtonClick('cos(')}>cos</button>
      <button onClick={() => handleButtonClick('tan(')}>tan</button>
    </div>
  );
};

export default Trigonometry;
