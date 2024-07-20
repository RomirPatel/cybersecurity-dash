import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import custom CSS for app-wide styles

const App = () => {
    return (
        <Router>
            <div className="bg-dark min-vh-100 text-light">
                <Navbar />
                <div className="content">
                    <Dashboard />
                </div>
            </div>
        </Router>
    );
};

export default App;
