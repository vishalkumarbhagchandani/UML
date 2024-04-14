import React, { useState, useEffect } from 'react';
import './App.css';
import Insurancequotes from './components/Insurancequotes'; // Import the InsuranceQuoteForm component
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { MenuItem, Menu } from '@mui/material';
import AccountContext from './components/AccountContext';


function App() {
  const location = useLocation();
  const account = location.state?.account;
  const accountList = React.useContext(AccountContext);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    // Handle sign out logic here
    navigate('.', { state: {} });
    setAnchorEl(null);
  };


  const handleSignin = () => {
    if (account == undefined) {
      navigate('signin')
    }
  }

  const handleAdmin = () => {
    if (account == 'admin') {
      navigate('admin')
    }
  }


  return (
    <div className="App">
      <Toolbar style={{ backgroundColor: '#6b6a67', display: 'flex', justifyContent: 'flex-end' }}>
        {account === 'admin' && (
          <Button variant="contained" style={{ marginRight: '10px' }} onClick={() => handleAdmin()}>Admin Panel</Button>
        )}
        {account === undefined ? (
          <Button variant="contained" onClick={() => handleSignin()}>
            Sign In
          </Button>
        ) : (
          <div>
            <Button variant="contained" onClick={handleClick}>
              Welcome {account}
            </Button>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
            </Menu>
          </div>
        )}
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
