import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Cpu, Box, Users, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Cpu className="w-8 h-8 text-purple-600" />
            <span className="font-bold text-xl">AI3D Studio</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</Link>
            <Link to="/tools" className="text-gray-700 hover:text-purple-600 transition-colors">AI Tools</Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-purple-600 transition-colors">Portfolio</Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors">About</Link>
            <Link to="/contact" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Contact Us
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Services</Link>
            <Link to="/tools" className="block px-3 py-2 text-gray-700 hover:text-purple-600">AI Tools</Link>
            <Link to="/portfolio" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Portfolio</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-purple-600">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-purple-600 font-medium">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;