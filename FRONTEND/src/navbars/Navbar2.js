// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaUserCircle, FaBars, FaTimes, FaHome } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar2 = ({ onCategoryClick, activeCategory }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const categories = ['orders', 'myprofile'];

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-white shadow-md p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center space-x-4">
//           <motion.h1
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-xl font-bold"
//           >
//             <Link to="/">Quick Fix</Link>
//           </motion.h1>
//           <Link to="/" className="text-gray-600 hover:text-blue-500">
//             <FaHome size={24} />
//           </Link>
//         </div>
//         {/* Desktop Menu */}
//         <motion.ul
//           className="hidden md:flex space-x-4"
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           {categories.map((item) => (
//             <li key={item} className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors duration-200">
//               <Link to={`/${item === 'orders' ? 'orders' : 'profile'}`}>
//                 {item === 'orders' ? 'Orders' : 'My Profile'}
//               </Link>
//             </li>
//           ))}
//         </motion.ul>
//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-gray-600">
//             {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//         <Link to="/profile">
//           <FaUserCircle className="text-2xl text-gray-600" />
//         </Link>
//       </div>
//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           className="md:hidden mt-4"
//         >
//           <ul className="flex flex-col space-y-2">
//             {categories.map((item) => (
//               <li key={item} className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors duration-200">
//                 <Link to={`/${item === 'orders' ? 'orders' : 'profile'}`}>
//                   {item === 'orders' ? 'Orders' : 'My Profile'}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </motion.div>
//       )}
//     </nav>
//   );
// };

// export default Navbar2;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserCircle, FaBars, FaTimes, FaHome, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import js-cookie

const Navbar2 = ({ onCategoryClick, activeCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const categories = ['orders', 'myprofile'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Delete the specific cookie
    Cookies.remove('yourCookieName'); // Replace 'yourCookieName' with the actual cookie name you want to delete
    navigate('/'); // Redirect to login page
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
            <li key={item} className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors duration-200">
              <Link to={`/${item === 'orders' ? 'sppage' : 'spprofile'}`}>
                {item === 'orders' ? 'Orders' : 'My Profile'}
              </Link>
            </li>
          ))}
          {/* Logout Button */}
          <li
            className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors duration-200 flex items-center"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </li>
        </motion.ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleMenu} className="text-gray-600">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <Link to="/spprofile">
            <FaUserCircle className="text-2xl text-gray-600" />
          </Link>
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
              <li key={item} className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors duration-200">
                <Link to={`/${item === 'orders' ? 'orders' : 'spprofile'}`}>
                  {item === 'orders' ? 'Orders' : 'My Profile'}
                </Link>
              </li>
            ))}
            {/* Logout Button for Mobile */}
            <li
              className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors duration-200 flex items-center"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar2;

