import React, { useState } from 'react';
import Trigonometry from '../components/Trigonometry';
import MatrixCalculation from '../components/MatrixCalculation';
import CollegeCalculator from './CollegeCalculator';

const LyceeCalculator = () => {
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
      <CollegeCalculator />
      <div className="row">
      <Trigonometry handleButtonClick={handleButtonClick}/>
      </div>
      <div className="row">
      <MatrixCalculation handleButtonClick={handleButtonClick}/>
      </div>
      <br></br>
    </div>
   
  );
};

export default LyceeCalculator;
