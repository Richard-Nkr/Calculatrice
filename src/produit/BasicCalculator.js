import React, { useState } from 'react';

const BasicCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClearClick = () => {
    setInput('');
    setResult('');
  };

  const handleEqualsClick = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div>

<div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
        <div className="calculator">
          <input type="text" value={input} readOnly />
          <input type="text" value={result} readOnly />
          <div className="buttons">
            <div className="row">
              <button onClick={() => handleButtonClick('1')}>1</button>
              <button onClick={() => handleButtonClick('2')}>2</button>
              <button onClick={() => handleButtonClick('3')}>3</button>
            </div>
            <div className="row">
              <button onClick={() => handleButtonClick('4')}>4</button>
              <button onClick={() => handleButtonClick('5')}>5</button>
              <button onClick={() => handleButtonClick('6')}>6</button>
            </div>
            <div className="row">
              <button onClick={() => handleButtonClick('7')}>7</button>
              <button onClick={() => handleButtonClick('8')}>8</button>
              <button onClick={() => handleButtonClick('9')}>9</button>
            </div>
            <div className="row">
              <button onClick={() => handleButtonClick('+')}>+</button>
              <button onClick={() => handleButtonClick('0')}>0</button>
              <button onClick={() => handleButtonClick('.')}>.</button>
            </div>
            <div className="row">
              <button onClick={() => handleButtonClick('-')}>-</button>
              <button onClick={() => handleButtonClick('*')}>*</button>
              <button onClick={() => handleButtonClick('/')}>/</button>
            </div>
            <div className="row">
              <button onClick={handleClearClick}>Clear</button>
              <button onClick={handleEqualsClick}>=</button>
            </div>
          </div>
        </div>
      </header>
    </div>
    </div>
  );
};

export default BasicCalculator;



