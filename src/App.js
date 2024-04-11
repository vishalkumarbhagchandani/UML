import React from 'react';
import './App.css';
import Insurancequotes from './components/Insurancequotes'; // Import the InsuranceQuoteForm component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Insurance</h1>
        <div className="button-container">
          <button className="button">Automobile</button>
          <button className="button">Health</button>
        </div>
      </header>
      {/* Render the InsuranceQuoteForm component */}
      <Insurancequotes />
    </div>
  );
}

export default App;
