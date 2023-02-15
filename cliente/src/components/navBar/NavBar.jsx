import { useRef } from "react";
import "./NavBar.css";
import logo from './pokebola.png'

function Navbar() {
    const navRef = useRef("");
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    return (
        <header>
            <img src={logo} alt="LOGO" />
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Crear</a>
                <a href="/#">Blog</a>
                <a href="/#">About</a>
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
