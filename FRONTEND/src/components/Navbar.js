import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserCircle, FaBars, FaTimes, FaHome } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ onCategoryClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const categories = ['Plumber', 'Carpenter', 'Electrician', 'Saloon', 'Tutor'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryClick = (category) => {
    onCategoryClick(category);
    setIsMenuOpen(false);
    navigate(`/service/${category.toLowerCase()}`);
  };

  // Logout function to clear cookies and navigate to the home page
  const handleLogout = () => {
    // Clear cookies (example assumes cookies are not HttpOnly and can be cleared via JavaScript)
    document.cookie.split(';').forEach((cookie) => {
      const cookieName = cookie.split('=')[0].trim();
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    });
    navigate('/'); // Redirect to home page after logout
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
            <Link to="/dashboard">Quick Fix</Link>
          </motion.h1>
          <Link to="/dashboard" className="text-gray-600 hover:text-blue-500">
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
              className={`cursor-pointer text-gray-600 hover:text-blue-500 transition-colors duration-200`}
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

        {/* Profile and Logout */}
        <div className="flex items-center space-x-4">
          <Link to="/profile">
            <FaUserCircle className="text-2xl text-gray-600" />
          </Link>
          <button
            onClick={handleLogout}
            className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
          >
            Logout
          </button>
        </div>
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
                className={`cursor-pointer text-gray-600 hover:text-blue-500 transition-colors duration-200`}
                onClick={() => handleCategoryClick(item)}
              >
                {item}
              </li>
            ))}
            <li>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
              >
                Logout
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
