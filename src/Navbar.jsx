import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCog, faHome, faCompass, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

import "./index.css"

const SteampunkNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-black shadow-2xl p-4 font-cinzel text-green-400 border-b-4 border-green-600">
      <AnimatedLogo />
        <div className="container mx-auto flex justify-between items-center">
          {/* Brand / Logo */}
          <h1 className="text-3xl font-bold text-green-400">
           
          
          </h1>
     
          {/* Hamburger Button */}
          <button
            className="text-green-500 focus:outline-none lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex justify-end space-x-6 ">
        
          
                 <NavItem icon={faHome} label="Home" />
            <NavItem icon={faCompass} label="Explore" />
            <NavItem icon={faEnvelope} label="Contact" />
            <NavItem icon={faCog} label="Settings" />
    
     
          </div>
        </div>


      </nav>

      {/* Side Pop-Out Menu */}
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

const NavItem = ({  label, }) => (
  <a href="/" className="flex items-center space-x-2 group hover:text-yellow-400 transition duration-200">
    <FontAwesomeIcon icon={AnimatedLogo} className="text-green-600 group-hover:rotate-90 group-hover:scale-110 transition duration-300" />
    <span className="font-cinzel text-green-600">{label}</span>
  </a>
  
);

const AnimatedLogo = () => (
  <div className="flex items-center space-x-2">
    {/* Rotating Icon */}
    <FontAwesomeIcon 
      icon={AnimatedLogo}  
      className="text-green-400 text-3xl animate-spin-slow" 
    />
    {/* Glowing Text */}
    <h1 className="text-3xl font-bold text-green-400 neon-glow">
      CoolLogo
    </h1>
  </div>
);

export default SteampunkNavbar;
