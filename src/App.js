import React, { useState } from 'react';
import './App.css';

import BasicCalculator from './produit/BasicCalculator';
import CollegeCalculator from './produit/CollegeCalculator';
import LyceeCalculator from './produit/LyceeCalculator';

function App() {
  return (
    <div className="App">
      <h2>BasicCalculator</h2>
      <BasicCalculator/>
      <h2>CollegeCalculator</h2>
      <CollegeCalculator/>
      <h2>LyceeCalculator</h2>
      <LyceeCalculator />
    </div>
  );
}

export default App;