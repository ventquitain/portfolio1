import React from 'react'
import { BsRCircle } from "react-icons/bs";

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#home">
                <span className="navbar-logo">
                    <BsRCircle className='text-6xl'/>
                    <span className="navbar-title">Vent</span>
                </span>
            </a>

            <div className="navbar-links">
                <a href="#home" className="nav-link">Home</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#contact" className="nav-link">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar