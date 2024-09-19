


// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom'; 
// import { motion } from 'framer-motion';
// import { MdElectricBolt } from "react-icons/md";
// import { FaHome } from 'react-icons/fa';
// import { GiPipes, GiTeacher } from "react-icons/gi";

// const Landing = () => {
//     const navigate = useNavigate();

//     const handleLoginClick = () => {
//         navigate('/login'); // Replace '/login' with your actual login route
//     };

//     const handleSignUpClick = () => {
//         navigate('/pop'); // Replace '/signup' with your actual sign-up route
//     };

//     return (
//         <div className="flex h-screen">
//             {/* Left side - Blue */}
//             <div className="w-1/2 bg-blue-600 text-white flex flex-col justify-center items-center">
//                 <motion.h1
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1 }}
//                     className="text-4xl font-bold sm:text-6xl"
//                 >
//                     Quick Fix
//                 </motion.h1>
              

               
//             </div>

//             {/* Right side - White */}
//             <div className="w-1/2 bg-white text-blue-600 relative flex flex-col justify-center items-center">
//                 <header className="absolute inset-x-0 top-0 z-10 w-full">
//                     <div className="px-4 mx-auto sm:px-6 lg:px-8">
//                         <div className="flex items-center justify-between h-16 lg:h-20">
//                             <div className="flex-shrink-0">
//                                 <div className="flex items-center space-x-4">
//                                     <motion.h1
//                                         initial={{ opacity: 0 }}
//                                         animate={{ opacity: 1 }}
//                                         className="text-xl font-bold"
//                                     >
//                                         <Link to="">Quick Fix</Link>
//                                     </motion.h1>
//                                     <Link to="" className="text-blue-600 hover:text-blue-800">
//                                         <FaHome size={30} />
//                                     </Link>
//                                 </div>
//                             </div>

//                             <div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
//                                 <a
//                                     onClick={handleLoginClick}
//                                     className="inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 bg-blue-600/10 hover:bg-blue-600/20 focus:bg-blue-600/20 rounded-lg cursor-pointer no-underline"
//                                     role="button"
//                                     title=""
//                                 >
//                                     Log in
//                                 </a>

//                                 <a
//                                     onClick={handleSignUpClick}
//                                     className="inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 bg-blue-600/10 hover:bg-blue-600/20 focus:bg-blue-600/20 rounded-lg cursor-pointer no-underline"
//                                     role="button"
//                                     title=""
//                                 >
//                                     Sign Up 
//                                 </a>
//                             </div> 
//                         </div>
//                     </div>
//                 </header>
//                 <div className='px-4 mx-auto sm:px-6 lg:px-8'>
//                             <p className="mt-5 text-base sm:text-xl text-blue">
//                                 Welcome! You're on the right path. Get started with Quickfix and find all the services!
//                             </p>
//                             <div className="grid grid-cols-1 px-20 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-3 sm:px-0">
//                             <div className="flex items-center">
//                                 <GiPipes size={30} />
//                                 <p className="ml-3 text-sm sm:text-base">Find all the best plumbers</p>
//                             </div>

//                             <div className="flex items-center">
//                                 <GiTeacher size={30} />
//                                 <p className="ml-3 text-sm sm:text-base">The best certified tutors!</p>
//                             </div>

//                             <div className="flex items-center">
//                                 <MdElectricBolt size={30} />
//                                 <p className="ml-3 text-sm sm:text-base">Qualified Electricians</p>
//                             </div>
//                             </div>
//                         </div>
//             </div>
//         </div>
//     );
// };

// export default Landing;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import { MdElectricBolt } from "react-icons/md";
import { FaHome } from 'react-icons/fa';
import { GiPipes, GiTeacher } from "react-icons/gi";

const Landing = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login'); // Replace '/login' with your actual login route
    };

    const handleSignUpClick = () => {
        navigate('/pop'); // Replace '/signup' with your actual sign-up route
    };

    return (
        <div className="flex h-screen">
            {/* Left side - Blue */}
            <div className="w-1/2 bg-blue-600 text-white flex flex-col justify-center items-center">
                <motion.h1
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-4xl font-bold sm:text-6xl"
                >
                    Quick Fix
                </motion.h1>
            </div>

            {/* Right side - White */}
            <div className="w-1/2 bg-white text-blue-600 relative flex flex-col justify-center items-center">
                {/* Navigation Bar */}
                <motion.header 
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }} 
                    className="absolute inset-x-0 top-0 z-10 w-full"
                >
                    <div className="px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16 lg:h-20">
                            <div className="flex-shrink-0">
                                <div className="flex items-center space-x-4">
                                    <motion.h1
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1, delay: 2.2 }}
                                        className="text-xl font-bold"
                                    >
                                        <p>Quick Fix</p>
                                    </motion.h1>
                                    <Link to="" className="text-blue-600 hover:text-blue-800">
                                        <FaHome size={30} />
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
                                <a
                                    onClick={handleLoginClick}
                                    className="inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 bg-blue-600/10 hover:bg-blue-600/20 focus:bg-blue-600/20 rounded-lg cursor-pointer no-underline"
                                    role="button"
                                    title=""
                                >
                                    Log in
                                </a>

                                <a
                                    onClick={handleSignUpClick}
                                    className="inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 bg-blue-600/10 hover:bg-blue-600/20 focus:bg-blue-600/20 rounded-lg cursor-pointer no-underline"
                                    role="button"
                                    title=""
                                >
                                    Sign Up 
                                </a>
                            </div> 
                        </div>
                    </div>
                </motion.header>

                {/* Right Side Content */}
                <motion.div 
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="px-4 mx-auto sm:px-6 lg:px-8"
                >
                    <p className="mt-5 text-base sm:text-xl">
                        Welcome! You're on the right path. Get started with Quickfix and find all the services!
                    </p>

                    <div className="grid grid-cols-1 px-20 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-3 sm:px-0">
                        <div className="flex items-center">
                            <GiPipes size={30} />
                            <p className="ml-3 text-sm sm:text-base">Find all the best plumbers</p>
                        </div>

                        <div className="flex items-center">
                            <GiTeacher size={30} />
                            <p className="ml-3 text-sm sm:text-base">The best certified tutors!</p>
                        </div>

                        <div className="flex items-center">
                            <MdElectricBolt size={30} />
                            <p className="ml-3 text-sm sm:text-base">Qualified Electricians</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Landing;
