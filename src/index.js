import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextComponent from './utilities/Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextComponent>
    <App />
  </ContextComponent>
);

reportWebVitals();
