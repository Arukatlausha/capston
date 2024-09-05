// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaSearch, FaUserCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { GiTeacher,GiWaterDrop, GiWoodBeam, GiElectric } from 'react-icons/gi';
// import { MdCleaningServices } from 'react-icons/md';
// import Navbar from '../../components/Navbar'; // Corrected path to Navbar
// import ServiceCard from '../../components/ServiceCard'; // Corrected path to ServiceCard

// const CombinedComponent = () => {
//   const [showToast, setShowToast] = useState(false);
 
//   const handleHireService = () => {
//     setShowToast(true);
//     setTimeout(() => setShowToast(false), 3000);
//   };
//   const [activeCategory, setActiveCategory] = useState('');
//   const handleCategoryClick = (category) => {
//     setActiveCategory(category);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* <Navbar /> */}
//       <Navbar onCategoryClick={handleCategoryClick} activeCategory={activeCategory} />
//       <main className="container mx-auto mt-8 px-4">
//         {/* Section from HomePage */}
//         <motion.div
//           className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center mb-12"
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

//         {/* Service Cards Section */}
//         <motion.div
//           className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//         >
//           {[
//             { icon: FaUserCircle, text: 'Create Account', description: 'First you have to create an account here' },
//             { icon: GiWaterDrop, text: 'Search Service', description: 'Search the best home services here' },
//             { icon: GiWoodBeam, text: 'Save and apply', description: 'Apply or save and start your service' },
//           ].map((item, index) => (
//             <ServiceCard key={index} icon={item.icon} text={item.text} description={item.description} />
//           ))}
//         </motion.div>

//         {/* Section from ServicesDashboard */}
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-12">
//           <div className="flex flex-col md:flex-row p-8">
//             <div className="md:w-1/2 pr-8">
//               <img src="2.png" alt="Service Provider" className="w-full h-auto" />
//             </div>
//             <div className="md:w-1/2 mt-8 md:mt-0">
//               <h1 className="text-4xl font-bold mb-4">
//                 Find The Best <span className="text-blue-500">Services</span> Here
//               </h1>
//               <p className="text-gray-600 mb-8">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat bibendum ornare urna, cursus eget convallis.
//                 Feugiat imperdiet posuere justo, ultrices interdum sed erat nunc, mattis. Ipsum viverra viverra neque adipiscing
//                 arcu, quam dictum. Dui mi viverra dui, sit accumsan, tincidunt massa. Dui cras magna.
//               </p>
//               <div className="flex space-x-8 mb-8">
//                 <motion.div
//                   className="text-center p-4 bg-blue-100 rounded-lg"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <h2 className="text-3xl font-bold text-blue-600">500+</h2>
//                   <p className="text-sm text-gray-600">Service Providers</p>
//                 </motion.div>
//                 <motion.div
//                   className="text-center p-4 bg-blue-100 rounded-lg"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <h2 className="text-3xl font-bold text-blue-600">300+</h2>
//                   <p className="text-sm text-gray-600">Home Services Posted</p>
//                 </motion.div>
//               </div>
//             </div>
//           </div>

//           <div className="px-8 pb-8">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-semibold">
//                 The latest home services! <span className="text-blue-500">Recently Posted Works</span>
//               </h2>
//               <div className="flex space-x-2">
//                 <button className="p-2 bg-gray-200 rounded-full"><FaArrowLeft /></button>
//                 <button className="p-2 bg-blue-500 text-white rounded-full"><FaArrowRight /></button>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[
//                 { icon: GiTeacher, title: "Teaching", description: "Need a professional logo and brand identity for our jewellery company" },
//                 { icon: GiElectric, title: "Electrician", description: "We need a UI/UX designer with UI/UX skills for our furniture company" },
//                 { icon: GiWaterDrop, title: "Plumber", description: "Need an SEO expert to elevate our company's online presence" }
//               ].map((service, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-white p-6 rounded-lg shadow-md"
//                   whileHover={{ y: -5 }}
//                 >
//                   <service.icon className="text-5xl text-blue-500 mb-4" />
//                   <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//                   <p className="text-gray-600 mb-4">{service.description}</p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-700 font-semibold">Price <br />5000/-</span>
//                     <button className="text-blue-500 font-semibold">Apply now</button>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>

//       {showToast && (
//         <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-md shadow-lg">
//           Service provider hiring initiated!
//         </div>
//       )}
//     </div>
//   );
// };

// export default CombinedComponent;





import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaUserCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { GiTeacher, GiWaterDrop, GiWoodBeam, GiElectric } from 'react-icons/gi';
import { MdCleaningServices } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Navbar from '../../components/Navbar'; // Corrected path to Navbar
import ServiceCard from '../../components/ServiceCard'; // Corrected path to ServiceCard

const CombinedComponent = () => {
  const [showToast, setShowToast] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleHireService = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    navigate('/service/plumber'); // Redirect to Plumber service
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleServiceRedirect = (service) => {
    switch (service) {
      case 'tutor':
        navigate('/service/tutor');
        break;
      case 'electrician':
        navigate('/service/electrician');
        break;
      case 'plumber':
        navigate('/service/plumber');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onCategoryClick={handleCategoryClick} activeCategory={activeCategory} />
      <main className="container mx-auto mt-8 px-4">
        {/* Section from HomePage */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center mb-12"
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

        {/* Service Cards Section */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {[
            { icon: FaUserCircle, text: 'Create Account', description: 'First you have to create an account here' },
            { icon: GiWaterDrop, text: 'Search Service', description: 'Search the best home services here' },
            { icon: GiWoodBeam, text: 'Save and apply', description: 'Apply or save and start your service' },
          ].map((item, index) => (
            <ServiceCard key={index} icon={item.icon} text={item.text} description={item.description} />
          ))}
        </motion.div>

        {/* Section from ServicesDashboard */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-12">
          <div className="flex flex-col md:flex-row p-8">
            <div className="md:w-1/2 pr-8">
              <img src="2.png" alt="Service Provider" className="w-full h-auto" />
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h1 className="text-4xl font-bold mb-4">
                Find The Best <span className="text-blue-500">Services</span> Here
              </h1>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat bibendum ornare urna, cursus eget convallis.
                Feugiat imperdiet posuere justo, ultrices interdum sed erat nunc, mattis. Ipsum viverra viverra neque adipiscing
                arcu, quam dictum. Dui mi viverra dui, sit accumsan, tincidunt massa. Dui cras magna.
              </p>
              <div className="flex space-x-8 mb-8">
                <motion.div
                  className="text-center p-4 bg-blue-100 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <h2 className="text-3xl font-bold text-blue-600">500+</h2>
                  <p className="text-sm text-gray-600">Service Providers</p>
                </motion.div>
                <motion.div
                  className="text-center p-4 bg-blue-100 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <h2 className="text-3xl font-bold text-blue-600">300+</h2>
                  <p className="text-sm text-gray-600">Home Services Posted</p>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="px-8 pb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">
                The latest home services! <span className="text-blue-500">Recently Posted Works</span>
              </h2>
              <div className="flex space-x-2">
                <button className="p-2 bg-gray-200 rounded-full"><FaArrowLeft /></button>
                <button className="p-2 bg-blue-500 text-white rounded-full"><FaArrowRight /></button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: GiTeacher, title: "Teaching", description: "Need a professional logo and brand identity for our jewellery company", service: 'tutor' },
                { icon: GiElectric, title: "Electrician", description: "We need a UI/UX designer with UI/UX skills for our furniture company", service: 'electrician' },
                { icon: GiWaterDrop, title: "Plumber", description: "Need an SEO expert to elevate our company's online presence", service: 'plumber' }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
                  whileHover={{ y: -5 }}
                  onClick={() => handleServiceRedirect(service.service)} // Redirect on click
                >
                  <service.icon className="text-5xl text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Price <br />5000/-</span>
                    <button className="text-blue-500 font-semibold">Apply now</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {showToast && (
        <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-md shadow-lg">
          Service provider hiring initiated!
        </div>
      )}
    </div>
  );
};

export default CombinedComponent;







