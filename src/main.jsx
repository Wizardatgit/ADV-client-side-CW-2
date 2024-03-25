// import bootstrap css and other components
import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const root = document.getElementById('root');
const reactRoot = createRoot(root);

// Render the App component within a StrictMode
reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);