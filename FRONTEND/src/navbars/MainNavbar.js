import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserCircle, FaBars, FaTimes, FaHome } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ onCategoryClick = () => {}, activeCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const navigate = useNavigate();
  const categories = [ 'signup'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryClick = (category) => {
    onCategoryClick(category);
    setIsMenuOpen(false);

    if (category === 'login') {
      navigate('/login');
    } else if (category === 'signup') {
      navigate('/pop'); // Show the signup popup
    }
  };

  const closeModal = () => {
    setIsSignupModalOpen(false);
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold"
          >
            <Link to="/">Quick Fix</Link>
          </motion.h1>
          <Link to="/" className="text-gray-600 hover:text-blue-500">
            <FaHome size={24} />
          </Link>
        </div>
        {/* Desktop Menu */}
        <motion.ul
          className="hidden md:flex space-x-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((item) => (
            <li
              key={item}
              className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors duration-200"
              onClick={() => handleCategoryClick(item)}
            >
              {item}
            </li>
          ))}
        </motion.ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <Link to="/profile">
          <FaUserCircle className="text-2xl text-gray-600" />
        </Link>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden mt-4"
        >
          <ul className="flex flex-col space-y-2">
            {categories.map((item) => (
              <li
                key={item}
                className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors duration-200"
                onClick={() => handleCategoryClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
      {/* Signup Modal */}
      {isSignupModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white p-8 rounded-md shadow-md"
          >
            <h2 className="text-xl font-bold mb-4">Signup Form</h2>
            <p>Signup form content goes here.</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
