import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

function Header() {
    const { user, logout } = useAuth();

    return (
        <header className="header">
            <h1>Cybersecurity Dashboard</h1>
            {user ? (
                <div>
                    <span>Welcome, {user.email}</span>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <a href="/login">Login</a>
                </div>
            )}
        </header>
    );
}

export default Header;
