// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext'; // Import ThemeProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider> {/* Wrap App with ThemeProvider */}
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
