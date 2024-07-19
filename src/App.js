// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Sidebar from './components/Layout/Sidebar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import ToggleDarkMode from './components/Shared/ToggleDarkMode';
import './styles/themes.css';

const App = () => {
    const { theme } = useTheme(); // Ensure this is used properly

    return (
        <ThemeProvider>
            <AuthProvider>
                <Router>
                    <div className={`app-container ${theme}`}>
                        <Header />
                        <Sidebar />
                        <main>
                            <Routes>
                                <Route path="/login" element={<Login />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/" element={<Home />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                    <ToggleDarkMode />
                </Router>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
