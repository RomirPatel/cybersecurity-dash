import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

function Sidebar() {
    const { user, logout } = useAuth();

    return (
        <nav className="sidebar">
            <ul>
                <li><Link to="/">Home</Link></li>
                {user ? (
                    <>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><a href="#" onClick={logout}>Logout</a></li>
                    </>
                ) : (
                    <li><Link to="/login">Login</Link></li>
                )}
            </ul>
        </nav>
    );
}

export default Sidebar;
