import React from 'react';
import './App.css';
import Insurancequotes from './components/Insurancequotes'; // Import the InsuranceQuoteForm component
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {useLocation} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function App() {
  const location = useLocation();
  const account = location.state?.account;
  const navigate = useNavigate();

  const handleSignin = () =>{
    if (account == undefined){
      navigate('signin')
    }
    
  }
  return (
    <div className="App">
      <Toolbar style={{ backgroundColor: '#6b6a67', display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" onClick={() => handleSignin()} >
          {account === undefined ? 'Sign In' : `Welcome ${account}`}
        </Button>
      </Toolbar>
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
