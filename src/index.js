import React from 'react';
import ReactDOM from 'react-dom/client';
import './vendor/normalize.css';
import './vendor/fonts/fonts.css'
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
