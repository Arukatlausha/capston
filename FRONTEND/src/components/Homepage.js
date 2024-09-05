// // components/Homepage.js
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaSearch, FaUserCircle } from 'react-icons/fa';
// import { GiWaterDrop, GiWoodBeam, GiElectric } from 'react-icons/gi'; // Replacing GiPlumbersPlunger with GiWaterDrop
// import Navbar from './Navbar';
// import ServiceCard from './ServiceCard';

// const HomePage = () => {
//   const [showToast, setShowToast] = useState(false);

//   const handleHireService = () => {
//     setShowToast(true);
//     setTimeout(() => setShowToast(false), 3000);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* <Navbar /> */}
//       <main className="container mx-auto mt-8 px-4">
//         <motion.div
//           className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center"
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           <div className="md:w-1/2">
//             <h2 className="text-3xl font-bold mb-4">Are you looking for Home Services?</h2>
//             <p className="text-gray-600 mb-6">
//               Hire Great Home Service Providers. Fast Home Fix helps you hire elite service providers at a moment's notice.
//             </p>
//             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-blue-500 text-white px-6 py-2 rounded-md"
//                 onClick={handleHireService}
//               >
//                 Hire a Service Provider
//               </motion.button>
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search home services"
//                   className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full"
//                 />
//                 <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               </div>
//             </div>
//           </div>
//           <motion.div
//             className="md:w-1/2 mt-8 md:mt-0"
//             animate={{ rotate: [0, 5, -5, 0] }}
//             transition={{ repeat: Infinity, duration: 1 }}
//           >
//             <img src="1.jpg" alt="Home Services" className="w-full h-auto" />
//           </motion.div>
//         </motion.div>

//         <motion.div
//           className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//         >
//           {[
//             { icon: FaUserCircle, text: 'Create Account' },
//             { icon: GiWaterDrop, text: 'Search Service' }, // Updated icon
//             { icon: GiWoodBeam, text: 'Save and apply' },
//           ].map((item, index) => (
//             <ServiceCard key={index} icon={item.icon} text={item.text} description={index === 0 ? "First you have to create an account here" : index === 1 ? "Search the best home services here" : "Apply or save and start your service"} />
//           ))}
//         </motion.div>
//       </main>

//       {showToast && (
//         <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-md shadow-lg">
//           Service provider hiring initiated!
//         </div>
//       )}
//     </div>
//   );
// };

// export default HomePage;





// components/HomePage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { GiWaterDrop, GiWoodBeam } from 'react-icons/gi'; // Icons are correct
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import Navbar from './Navbar';
import ServiceCard from './ServiceCard';

const HomePage = () => {
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleHireService = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleCreateAccountClick = () => {
    navigate('/signup'); // Navigate to the /signup page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <Navbar /> */}
      <main className="container mx-auto mt-8 px-4">
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Are you looking for Home Services?</h2>
            <p className="text-gray-600 mb-6">
              Hire Great Home Service Providers. Fast Home Fix helps you hire elite service providers at a moment's notice.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-6 py-2 rounded-md"
                onClick={handleHireService}
              >
                Hire a Service Provider
              </motion.button>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search home services"
                  className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
          <motion.div
            className="md:w-1/2 mt-8 md:mt-0"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <img src="1.jpg" alt="Home Services" className="w-full h-auto" />
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {[
            { icon: FaUserCircle, text: 'Create Account', onClick: handleCreateAccountClick }, // Add onClick handler
            { icon: GiWaterDrop, text: 'Search Service' }, 
            { icon: GiWoodBeam, text: 'Save and apply' },
          ].map((item, index) => (
            <ServiceCard 
              key={index} 
              icon={item.icon} 
              text={item.text} 
              description={
                index === 0 
                ? "First you have to create an account here" 
                : index === 1 
                ? "Search the best home services here" 
                : "Apply or save and start your service"
              }
              onClick={item.onClick} // Pass onClick handler to ServiceCard
            />
          ))}
        </motion.div>
      </main>

      {showToast && (
        <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-md shadow-lg">
          Service provider hiring initiated!
        </div>
      )}
    </div>
  );
};

export default HomePage;
