import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import custom CSS for app-wide styles

const App = () => {
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const timer = setTimeout(() => {
            setTimeout(() => setLoading(false), 1000); // Matches CSS fade-out duration
        }, 1000); // Initial loading period
        // Cleanup timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <div className={`bg-dark min-vh-100 text-light ${!loading ? 'fade-in' : ''}`}>
                {loading && (
                    <div className={`spinner-container `}>
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                {!loading && (
                    <>
                        <Navbar />
                        <div className="content fade-in">
                            <Dashboard />
                        </div>
                    </>
                )}
            </div>
        </Router>
    );
};

export default App;
