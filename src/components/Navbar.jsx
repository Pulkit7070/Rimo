import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTimes, FaTwitter, FaBars } from 'react-icons/fa';
import logo from '../assets/logo1.png'; // Make sure the path to your logo image is correct
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMobileMenu = () => setIsOpen(!isOpen);

    const navlinks = [
        { name: "Home", path: "/" },
        { name: "Works", path: "/how-it-works" },
        { name: "Mission", path: "/our-mission" },
        { name: "Contact", path: "/contact" },
        { name: "FAQ", path: "/faq" }
    ];

    return (
        <nav className="w-full px-4 sm:px-6 py-4 bg-gradient-to-b from-gray-900 to-black shadow-2xl border-b border-indigo-500/30 font-[Poppins] relative overflow-hidden">
            {/* Background elements */}
            <div className="max-w-7xl mx-auto flex justify-between items-center relative z-50">
                {/* Logo with Image */}
                <div className="flex items-center">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-15 w-20" />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden z-50">
                    <button onClick={toggleMobileMenu} className="text-gray-300 hover:text-indigo-400 transition-all duration-300 p-2">
                        {isOpen ? <FaTimes className="w-7 h-7" /> : <FaBars className="w-7 h-7" />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 px-8 py-2 rounded-full border border-white/10 bg-gray-900/50 backdrop-blur-lg shadow-xl">
                    {navlinks.map(({ name, path }) => (
                        <div key={name} className="relative group">
                            <Link to={path} className="text-gray-300 group-hover:text-indigo-400 transition-colors duration-300 text-lg font-semibold tracking-wide cursor-pointer">
                                {name}
                            </Link>
                            <div className="absolute h-0.5 bg-gradient-to-r from-purple-500 to-blue-400 w-0 group-hover:w-full transition-all duration-300 mt-1"></div>
                        </div>
                    ))}
                </div>

                {/* Desktop Social Icons */}
                <div className="hidden md:flex items-center space-x-6">
                    <div className="flex space-x-4 bg-gray-900/50 backdrop-blur-lg px-4 py-2 rounded-full border-white/10">
                        <a href="https://x.com/Pulkit70baseeth" className="p-2 rounded-full bg-gray-800 hover:bg-indigo-500/80 transition-all duration-300 hover:animate-pulse">
                            <FaTwitter className="w-5 h-5 text-gray-300 hover:text-indigo-400" />
                        </a>
                        <a href="https://www.facebook.com/sudhansu24/" className="p-2 rounded-full bg-gray-800 hover:bg-indigo-500/80 transition-all duration-300 hover:animate-pulse">
                            <FaFacebook className="w-5 h-5 text-gray-300 hover:text-indigo-400" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-0 left-0 w-full bg-gray-900/95 h-screen z-40 backdrop-blur-sm transition-all duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
                    <ul className="w-full">
                        {navlinks.map(({ name, path }) => (
                            <li key={name} className="mb-4 text-center">
                                <Link to={path} onClick={toggleMobileMenu} className="text-2xl text-gray-300 hover:text-indigo-400 font-medium transition-colors duration-300 relative group block">
                                    {name}
                                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 transform w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Social Icons */}
                    <div className="flex space-x-6 mt-4">
                        <a href="https://x.com/Pulkit70baseeth" className="p-3 rounded-full bg-gray-800 hover:bg-indigo-500/20 transition-all duration-300 active:scale-95">
                            <FaTwitter className="w-7 h-7 text-gray-300 hover:text-indigo-400" />
                        </a>
                        <a href="https://www.facebook.com/sudhansu24/" className="p-3 rounded-full bg-gray-800 hover:bg-indigo-500/20 transition-all duration-300 active:scale-95">
                            <FaFacebook className="w-7 h-7 text-gray-300 hover:text-indigo-400" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;