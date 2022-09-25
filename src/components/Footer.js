import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer>
            <p><Link to="/faq#contact-us">Contact Us</Link></p>
            <p>&copy; 2022 Courtney McDonald</p>
        </footer>
    );
}

export default Footer;