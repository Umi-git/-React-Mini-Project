import React from 'react';
import ReactDOM from 'react-dom/client'; // Use this for React 18 and above
import App from './app';
import './index.css'; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);