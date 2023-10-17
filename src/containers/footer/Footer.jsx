import React from "react";
import { FaFacebookF } from "react-icons/fa";
import logo from '../../assets/wlogo.png';


const Footer = () => {
    return (
        <footer className="footer section-padding">
            <div className="footer-content">
                <div className="social-icons">
                    {/* Replace the links below with your Facebook page URL */}
                    <a href="https://www.facebook.com/dhnsku" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                </div>
                <nav className="footer-links">
                    <a href="/">සුරාසුර විශ්වය</a>
                    <a href="/about">කාලසර</a>
                    <a href="/contact">Contact</a>
                </nav>
                <div className="footer-logo">
                    <div className='navbar-logo'>
                        <img src={logo} alt='logo' />
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                © {new Date().getFullYear()} kalasara. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
