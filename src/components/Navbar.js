import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ handleLogout }) => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>BloggerAnuj</h1>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">Create Post</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login" onClick={handleLogout}>Logout</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
