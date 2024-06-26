import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignIn from './components/SignIn';
import Admin from './components/Admin';
import Support from './components/SupportTicket';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AccountProvider} from './components/AccountContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AccountProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signin" element={<SignIn />}  />
          <Route path="/admin" element={<Admin />} />
          <Route path="/support" element={<Support />} />
        </Routes>  
        </AccountProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
