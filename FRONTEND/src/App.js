// import React, { useState } from 'react';
// import { Route, Routes, Navigate, useLocation } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import Dashboard from './components/pages/Dashboard';
// import ServiceProviderPage from './components/ServiceProviderPage';
// import Profile from './components/Profile';
// import UserSignUp from './components/UserSignUp';
// import ServiceProviderSignUp from './components/ServiceProviderSignUp';
// import LoginPage from './components/LoginPage';
// import OrderDetails from './components/OrderDetails';
// import PopupButton from './components/PopupButton';
// import Admin from './components/Admin';
// import MainNavbar from './navbars/MainNavbar';
// import Navbar2 from './navbars/Navbar2';
// import ServiceCard from './components/ServiceCard';

// function App() {
//   const [activeCategory, setActiveCategory] = useState('');

//   const handleCategoryClick = (category) => {
//     setActiveCategory(category);
//   };

//   const location = useLocation();

//   const isAdminPage = location.pathname === '/admin';
//   const isNav1 = location.pathname === '/nav';

//   return (
//     <div className="App">
//       {/* Conditionally render Navbar based on the current path */}
//       {/* {!isAdminPage && !isNav1 && (
//         <Navbar onCategoryClick={handleCategoryClick} activeCategory={activeCategory} />
//       )} */}
//       <Routes>
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/signup" element={<UserSignUp />} />
//         <Route path="/register" element={<ServiceProviderSignUp />} />
//         <Route path="/orders" element={<OrderDetails />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/popup" element={<PopupButton />} />
//         <Route path="/service/:category" element={<ServiceProviderPage activeCategory={activeCategory} />} />
//         <Route path="/pop" element={<PopupButton />} />
//         {/* Redirect any unknown routes to the dashboard */}
//         {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/nav" element={<MainNavbar />} />
//         <Route path="/nav1" element={<Navbar2 />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
 
import Navbar from './components/Navbar';
import Dashboard from './components/pages/Dashboard';
import ServiceProviderPage from './components/ServiceProviderPage';
import Profile from './components/Profile';
import UserSignUp from './components/UserSignUp';
import ServiceProviderSignUp from './components/ServiceProviderSignUp';
import LoginPage from './components/LoginPage';
import OrderDetails from './components/OrderDetails';
import PopupButton from './components/PopupButton';
import Admin from './components/Admin';
import MainNavbar from './navbars/MainNavbar';
import Navbar2 from './navbars/Navbar2';
import ServiceCard from './components/ServiceCard';
import OrderDetailsSP from './components/OrderDetailsSP';
import ProfileSP from './components/ProfileSP';
import Landing from './components/landing';

function App() {
  const [activeCategory, setActiveCategory] = useState('');
 
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };
 
  const location = useLocation();
 
  const isAdminPage = location.pathname === '/admin';
  const isNav1 = location.pathname === '/nav';
 
  return (
    <div className="App">
      {/* Conditionally render Navbar based on the current path */}
      {/* {!isAdminPage && !isNav1 && (
        <Navbar onCategoryClick={handleCategoryClick} activeCategory={activeCategory} />
      )} */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/register" element={<ServiceProviderSignUp />} />
        <Route path="/orders" element={<OrderDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/popup" element={<PopupButton />} />
        <Route path="/service/:category" element={<ServiceProviderPage activeCategory={activeCategory} />} />
        <Route path="/pop" element={<PopupButton />} />
        {/* Redirect any unknown routes to the dashboard */}
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/nav" element={<MainNavbar />} />
        <Route path="/sppage" element={<OrderDetailsSP />} />
        <Route path="/spprofile" element={<ProfileSP />}/>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </div>
  );
}
 
export default App;

