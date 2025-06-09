import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Assuming App.js is in the same directory

// If you have a global CSS file for base styles or resets, import it here.
// For example: import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
