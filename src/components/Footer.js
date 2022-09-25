import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {

    const now = new Date();
    const year = now.getFullYear();

    return (
        <footer>
            <p><Link to="/faq#contact-us">Contact Us</Link></p>
            <p>&copy; {year} Courtney McDonald</p>
        </footer>
    );
}

export default Footer;