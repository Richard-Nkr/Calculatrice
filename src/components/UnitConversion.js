import React, { useState } from 'react';

const UnitConversion = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('cm');
  const [convertedValue, setConvertedValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleUnitChange = (event) => {
    setSelectedUnit(event.target.value);
  };

  const handleConvertClick = () => {
    const inputValueFloat = parseFloat(inputValue);

    if (isNaN(inputValueFloat)) {
      setConvertedValue('Invalid Input');
      return;
    }

    let convertedResult;

    switch (selectedUnit) {
      case 'cm':
        convertedResult = inputValueFloat * 0.01; // Convert cm to meters
        break;
      case 'm':
        convertedResult = inputValueFloat * 100; // Convert meters to cm
        break;
      case 'km':
        convertedResult = inputValueFloat * 1000; // Convert km to meters
        break;
      default:
        setConvertedValue('Invalid Unit');
        return;
    }

    setConvertedValue(convertedResult.toString());
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <select value={selectedUnit} onChange={handleUnitChange}>
        <option value="cm">cm</option>
        <option value="m">m</option>
        <option value="km">km</option>
      </select>
      <button onClick={handleConvertClick}>Convert</button>
      <div>{convertedValue}</div>
    </>
  );
};

export default UnitConversion;
