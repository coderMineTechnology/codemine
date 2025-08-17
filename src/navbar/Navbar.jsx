import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img 
                    src="logo.png" 
                    alt="logo" 
                    style={{ width: "200px", height: "50px"}}
                />
            </div>
            <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="menu-toggle" onClick={toggleMobileMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};

export default Navbar;