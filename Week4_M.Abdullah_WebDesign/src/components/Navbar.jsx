import { Flame } from 'lucide-react';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const NavLinks = () => (
        <>
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/menu" onClick={toggleMenu}>Menu</Link>
            <Link to="/about" onClick={toggleMenu}>About</Link>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </>
    );

    return (
            <nav className="sticky top-0 z-10 px-8 md:px-16 lg:px-32 xl:px-48 bg-black/80 py-3 flex justify-between items-center font-bold text-white">
                <Link to="/" className="text-xl flex"><Flame fill='red'/> NextGenBites</Link>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6">
                    <NavLinks />
                </div>

                {/* Hamburger Icon */}
                <div className="size-8 md:hidden flex items-center justify-center">
                    <button onClick={toggleMenu} className='cursor-pointer text-2xl'>
                        {isOpen ? "X" : "☰"}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute bg-black/80 top-14 right-0 w-1/3 px-6 py-4 rounded-bl-2xl flex flex-col items-center space-y-4 md:hidden shadow-lg">
                        <NavLinks />
                    </div>
                )}
            </nav>
    )
}

export default Navbar