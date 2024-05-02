import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SmoothScrolling from './components/Smoothly-scroll';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <SmoothScrolling>
    <App />
  </SmoothScrolling>
);

