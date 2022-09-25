import React, {useState} from "react";
import Bars from "../img/bars.svg";
import X from "../img/x.svg";
import { useLocation } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const whiteNav = ["/faq"];
    return (
        <header>
            <nav className={whiteNav.includes(location.pathname) ? "white" : ""}>
                <img onClick={() => setMenuOpen(true)} src={Bars} id="bars"></img>
                <div className={menuOpen ? "open" : ""} id="main-navigation">
                    <img onClick={() => setMenuOpen(false)} src={X} id="x"></img>
                    <a href="/" alt="Home">Home</a>
                    <a href="/wedding-info" alt="Wedding Info">Wedding Info</a>
                    <a href="/our-story" alt="Our Story">Our Story</a>
                    <a href="/registry" alt="Registry">Registry</a>
                    <a href="/faq" alt="FAQ">FAQ</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;

