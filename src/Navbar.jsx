import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCog, faHome, faCompass, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const SteampunkNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-gradient-to-b from-gray-800 to-gray-700 shadow-lg p-4 font-cinzel text-yellow-300">
        <div className="container mx-auto flex justify-between items-center">
          {/* Brand / Logo */}
          <h1 className="text-3xl font-bold text-yellow-500">Steampunk</h1>

          {/* Hamburger Button */}
          <button
            className="text-yellow-300 focus:outline-none lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
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
        className="fixed top-0 left-0 w-64 h-full bg-gradient-to-b from-gray-800 to-gray-700 shadow-lg z-50 p-4 font-cinzel"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-yellow-500">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-yellow-300">
            <FontAwesomeIcon icon={faTimes} className="text-2xl" />
          </button>
        </div>
        <div className="space-y-6">
          <NavItem icon={faHome} label="Home" />
          <NavItem icon={faCompass} label="Explore" />
          <NavItem icon={faEnvelope} label="Contact" />
          <NavItem icon={faCog} label="Settings" />
        </div>
      </motion.div>
    </>
  );
};

const NavItem = ({ icon, label }) => (
  <a href="#" className="flex items-center space-x-2 group hover:text-yellow-400 transition duration-200">
    <FontAwesomeIcon icon={icon} className="text-yellow-300 group-hover:rotate-45 transition duration-300" />
    <span className="font-cinzel text-yellow-200">{label}</span>
  </a>
);

export default SteampunkNavbar;
