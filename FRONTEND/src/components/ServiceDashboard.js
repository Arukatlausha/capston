// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { MdCleaningServices } from 'react-icons/md';
// import { GiTeacher,GiElectric, GiWaterDrop } from 'react-icons/gi';


// const ServicesDashboard = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//         <div className="flex flex-col md:flex-row p-8">
//           <div className="md:w-1/2 pr-8">
//             <img src="2.png" alt="Service Provider" className="w-full h-auto" />
//           </div>
//           <div className="md:w-1/2 mt-8 md:mt-0">
//             <h1 className="text-4xl font-bold mb-4">
//               Find The Best <span className="text-blue-500">Services</span> Here
//             </h1>
//             <p className="text-gray-600 mb-8">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat bibendum ornare
//               urna, cursus eget convallis. Feugiat imperdiet posuere justo, ultrices interdum
//               sed erat nunc, mattis. Ipsum viverra viverra neque adipiscing arcu, quam dictum. Dui mi viverra dui, sit accumsan,
//               tincidunt massa. Dui cras magna.
//             </p>
//             <div className="flex space-x-8 mb-8">
//               <motion.div 
//                 className="text-center p-4 bg-blue-100 rounded-lg"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <h2 className="text-3xl font-bold text-blue-600">500+</h2>
//                 <p className="text-sm text-gray-600">Service Providers</p>
//               </motion.div>
//               <motion.div 
//                 className="text-center p-4 bg-blue-100 rounded-lg"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <h2 className="text-3xl font-bold text-blue-600">300+</h2>
//                 <p className="text-sm text-gray-600">Home Services Posted</p>
//               </motion.div>
//             </div>
//           </div>
//         </div>
        
//         <div className="px-8 pb-8">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-semibold">
//               The latest home services ! <span className="text-blue-500">Recently Posted Works</span>
//             </h2>
//             <div className="flex space-x-2">
//               <button className="p-2 bg-gray-200 rounded-full"><FaArrowLeft /></button>
//               <button className="p-2 bg-blue-500 text-white rounded-full"><FaArrowRight /></button>
//             </div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//             { icon: GiTeacher, title: "Teacher", description: "Need a professional logo and brand identity for our jewellery company" },
//               { icon: GiElectric, title: "Electrician", description: "We need a UI/UX designer with UI/UX skills for our furniture company" },
//               { icon: GiWaterDrop, title: "Plumber", description: "Need a SEO for our company who will our company to a higher level" }
//             ].map((service, index) => (
//               <motion.div 
//                 key={index} 
//                 className="bg-white p-6 rounded-lg shadow-md"
//                 whileHover={{ y: -5 }}
//               >
//                 <service.icon className="text-5xl text-blue-500 mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//                 <p className="text-gray-600 mb-4">{service.description}</p>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-700 font-semibold">Price <br />5000/-</span>
//                   <button className="text-blue-500 font-semibold">Apply now</button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesDashboard;