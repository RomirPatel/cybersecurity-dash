import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    return (
        <BootstrapNavbar bg="dark" variant="dark" fixed="top">
            <BootstrapNavbar.Brand href="/">Cyber Security Dashboard</BootstrapNavbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="/" className="nav-link">Home</Nav.Link>
                <Nav.Link href="/features" className="nav-link">Features</Nav.Link>
                <Nav.Link href="/profile" className="nav-link">
                    <FontAwesomeIcon icon={faUser} size="lg" />
                </Nav.Link>
            </Nav>
        </BootstrapNavbar>
    );
};

export default Navbar;
