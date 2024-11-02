import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
<FontAwesomeIcon icon="fa-solid fa-flag-checkered" fade style={{color: "#000000",}} />
import { faBars, faTimes, faCog, faHome, faCompass, faEnvelope } from '@fortawesome/free-solid-svg-icons';

  const AnimatedLogo2 = <FontAwesomeIcon icon="fa-solid fa-flag-checkered" style={{color: "#ffffff",}} />


const CoolNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <nav className="bg-black p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo with Animation */}
        <AnimatedLogo />

        {/* Hamburger Button */}
        <button
          className="text-green-500 focus:outline-none lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </button>
        
        {/* Navigation Links */}
        <div className="flex space-x-8">
          <NavItem label="Home" />
          <NavItem label="About" />
          <NavItem label="Services" />
          <NavItem label="Contact" />
        </div>
      </div>
    </nav>
    <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? '0%' : '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 w-64 h-full bg-black shadow-2xl z-50 p-4 font-cinzel border-r-4 border-green-600"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-green-600">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-green-500">
            <FontAwesomeIcon icon={faTimes} className="text-2xl" />
          </button>
        </div>
        <div className="space-y-6">
          <NavItem icon={faHome} label="Home" />
          <NavItem icon={faCompass} label="prto" />
          <NavItem icon={faEnvelope} label="Contact" />
          <NavItem icon={faCog} label="Settings" />
        
        </div>
      </motion.div>
    </>
  );
};

const NavItem = ({ label }) => (
  <a 
    href="#" 
    className="text-green-400 hover:text-green-500 transition-colors duration-300"
  >
    {label}
  </a>
);

const AnimatedLogo = () => (
  <div className="flex items-center space-x-2">
    {/* Rotating Icon */}
    <FontAwesomeIcon 
      icon={AnimatedLogo2}  
      className="text-green-400 text-3xl animate-spin-slow" 
    />
    {/* Glowing Text */}
    <h1 className="text-3xl font-bold text-green-400 neon-glow">
      Garage X
    </h1>
  </div>
);

export default CoolNavbar;