import React, { useState } from 'react';
import BasicCalculator from './BasicCalculator';
import AdvancedFunctions from '../components/AdvancedFunctions';
import UnitConversion from '../components/UnitConversion';

const CollegeCalculator = () => {
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
      <BasicCalculator />
      <div className="row">
      <AdvancedFunctions handleButtonClick={handleButtonClick}/>
      </div>
      <div className="row">
      <UnitConversion handleButtonClick={handleButtonClick}/>
      </div>
    </div>
  );
};

export default CollegeCalculator;
