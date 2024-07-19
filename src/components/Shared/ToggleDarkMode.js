// src/components/Shared/ToggleDarkMode.js
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Button } from 'react-bootstrap';
import { FaMoon, FaSun } from 'react-icons/fa';

const ToggleDarkMode = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            variant="outline-light"
            onClick={toggleTheme}
            className="position-fixed bottom-0 end-0 m-3"
        >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </Button>
    );
};

export default ToggleDarkMode;
