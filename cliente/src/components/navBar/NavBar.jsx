import { useRef } from "react";
import "./NavBar.css";
import logo from './pokebola.png'
import { Link } from "react-router-dom";

function Navbar() {
    const navRef = useRef("");
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="LOGO" />
            </Link>
            <nav ref={navRef}>
                <Link to="/create">nuevo pokemon</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    x
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                |||
            </button>
        </header>
    );
}

export default Navbar;
