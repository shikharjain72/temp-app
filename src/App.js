import './App.css';
import React, { useState } from 'react';

import Plot from './Fragments/Plot.js';
import Heading from './Fragments/Heading.js';
import Form from './Fragments/Form.js';
import DisplayArea from './Fragments/DisplayArea.js';

function App() {

  const [currentTemp, setCurrentTemp] = useState("");
  const [dates, setDate] = useState([]);
  const [temps, setTemp] = useState([]);

  const [selected, setSelected] = useState({ date: '', temp: '' });

  return (
    <div className="App">
      <Heading />
      <div className='body-alignment'>
        <Form setCurrentTemp={setCurrentTemp} setDate={setDate} setTemp={setTemp} setSelected={setSelected} />
        <DisplayArea currentTemp={currentTemp} selected={selected} />
        <Plot dates={dates} temps={temps} setSelected={setSelected} />
      </div>
    </div>
  );
}


export default App;
