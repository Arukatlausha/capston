// import React, { useState, useEffect } from 'react';
// import { FaShoppingCart } from 'react-icons/fa';

// import Navbar2 from '../navbars/Navbar2';
 
// const getCookie = (name) => {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(';').shift();
// };
// const sid = getCookie('sid');
 
// const OrderItem = ({ username, email, contact, profileImg, status, onStatusChange }) => (
//   <div className="flex items-center space-x-4 py-4 border-b border-gray-200 last:border-b-0">
//     <img src={profileImg} alt={username} className="w-16 h-16 object-cover rounded" />
//     <div className="flex-grow">
//       <h3 className="text-sm font-medium text-gray-800">{username}</h3>
//       <p className="text-sm text-gray-500">Email: {email}</p>
//       <p className="text-sm text-gray-500">Contact: {contact}</p>
//     </div>
//     {status === 'IN_PROGRESS' && (
//       <button
//         className="border border-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-100 text-sm"
//         onClick={onStatusChange}
//       >
//         Mark as Completed
//       </button>
//     )}
//   </div>
// );
 
// const OrderDetailsSP = () => {
//   const [currentOrders, setCurrentOrders] = useState([]);
//   const [pastOrders, setPastOrders] = useState([]);
//   const [activeTab, setActiveTab] = useState('current');
 
//   // const [activeCategory, setActiveCategory] = useState('');
//   // const handleCategoryClick = (category) => {
//   //   setActiveCategory(category);
//   // };
 
//   useEffect(() => {
//     fetchOrders();
//   }, []);
 
//   const fetchOrders = async () => {
//     try {
//       const response = await fetch('http://localhost:8090/order/with-user-details');
      
//       const data = await response.json();
//       console.log(data);
     
//       const filteredOrders = data.filter(item => item.order.sid === sid);
//       console.log(filteredOrders);
     
//       const currentOrders = filteredOrders.filter(item => item.order.status === 'IN_PROGRESS');
//       const pastOrders = filteredOrders.filter(item => item.order.status !== 'IN_PROGRESS');
     
//       setCurrentOrders(currentOrders);
//       setPastOrders(pastOrders);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//     }
//   };
 
//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };
 
//   const handleStatusChange = async (uid, sid) => {
//     try {
//       await fetch(`http://localhost:8090/order/updatestatusoforder/${uid}/${sid}/COMPLETED`, {
//         method: 'PUT',
//       });
//       fetchOrders();
//     } catch (error) {
//       console.error('Error updating order status:', error);
//     }
//   };
 
//   return (
//     <>
//       {/* <Navbar onCategoryClick={handleCategoryClick} activeCategory={activeCategory} /> */}
//       <Navbar2/>
//       <br />
//       <div className="bg-white shadow-md rounded-lg w-full max-w-3xl mx-auto p-6">
//         <h1 className="text-2xl font-bold mb-4 flex items-center">
//           <FaShoppingCart className="mr-2 text-blue-500" /> Your Order Details
//         </h1>
//         <div className="flex border-b border-gray-200 mb-4">
//           <button
//             className={`flex-1 py-2 px-4 text-sm font-medium ${activeTab === 'current' ? 'border-b-2 border-blue-500 text-blue-500' : 'border-transparent text-gray-500 hover:text-blue-500'}`}
//             onClick={() => handleTabChange('current')}
//           >
//             Current Orders
//           </button>
//           <button
//             className={`flex-1 py-2 px-4 text-sm font-medium ${activeTab === 'past' ? 'border-b-2 border-blue-500 text-blue-500' : 'border-transparent text-gray-500 hover:text-blue-500'}`}
//             onClick={() => handleTabChange('past')}
//           >
//             Past Orders
//           </button>
//         </div>
//         <div>
//           {activeTab === 'current' ? (
//             currentOrders.length > 0 ? (
//               currentOrders.map((item, index) => (
//                 <OrderItem
//                   key={index}
//                   username={item.userdetails.username}
//                   email={item.userdetails.email}
//                   contact={item.userdetails.contact}
//                   profileImg={item.userdetails.profileImg}
//                   status={item.order.status}
//                   onStatusChange={() => handleStatusChange(item.order.uid, item.order.sid)}
//                 />
//               ))
//             ) : (
//               <p className="text-gray-500">No current orders yet.</p>
//             )
//           ) : (
//             pastOrders.length > 0 ? (
//               pastOrders.map((item, index) => (
//                 <OrderItem
//                   key={index}
//                   username={item.userdetails.username}
//                   email={item.userdetails.email}
//                   contact={item.userdetails.contact}
//                   profileImg={item.userdetails.profileImg}
//                   status={item.order.status}
//                 />
//               ))
//             ) : (
//               <p className="text-gray-500">No past orders yet.</p>
//             )
//           )}
//         </div>
//       </div>
//     </>
//   );
// };
 
// export default OrderDetailsSP;

import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Navbar from './Navbar';
import Navbar2 from '../navbars/Navbar2';
 
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};
const sid = getCookie('sid');
 
const OrderItem = ({ username, email, contact, profileImg, status, onStatusChange }) => (
  <div className="flex items-center space-x-4 py-4 border-b border-gray-200 last:border-b-0">
    <img src={profileImg} alt={username} className="w-16 h-16 object-cover rounded" />
    <div className="flex-grow">
      <h3 className="text-sm font-medium text-gray-800">{username}</h3>
      <p className="text-sm text-gray-500">Email: {email}</p>
      <p className="text-sm text-gray-500">Contact: {contact}</p>
    </div>
    {/* {status === 'IN_PROGRESS' && (
      // <button
      //   className="border border-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-100 text-sm"
      //   onClick={onStatusChange}
      // >
      //   Mark as Completed
      // </button>
    )} */}
  </div>
);
 
const OrderDetailsSP = () => {
  const [currentOrders, setCurrentOrders] = useState([]);
  const [pastOrders, setPastOrders] = useState([]);
  const [activeTab, setActiveTab] = useState('current');
 
  const [activeCategory, setActiveCategory] = useState('');
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };
 
  useEffect(() => {
    fetchOrders();
  }, []);
 
  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:8090/order/with-user-details');
      const data = await response.json();
     
      const filteredOrders = data.filter(item => item.order.sid === sid);
     
      const currentOrders = filteredOrders.filter(item => item.order.status === 'IN_PROGRESS');
      const pastOrders = filteredOrders.filter(item => item.order.status !== 'IN_PROGRESS');
     
      setCurrentOrders(currentOrders);
      setPastOrders(pastOrders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
 
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
 
  const handleStatusChange = async (uid, sid) => {
    try {
      await fetch(`http://localhost:8090/order/updatestatusoforder/${uid}/${sid}/COMPLETED`, {
        method: 'PUT',
      });
      fetchOrders();
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };
 
  return (
    <>
      {/* <Navbar onCategoryClick={handleCategoryClick} activeCategory={activeCategory} /> */}
      <Navbar2/>
      <br />
      <div className="bg-white shadow-md rounded-lg w-full max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4 flex items-center">
          <FaShoppingCart className="mr-2 text-blue-500" /> Your Order Details
        </h1>
        <div className="flex border-b border-gray-200 mb-4">
          <button
            className={`flex-1 py-2 px-4 text-sm font-medium ${activeTab === 'current' ? 'border-b-2 border-blue-500 text-blue-500' : 'border-transparent text-gray-500 hover:text-blue-500'}`}
            onClick={() => handleTabChange('current')}
          >
            Current Orders
          </button>
          <button
            className={`flex-1 py-2 px-4 text-sm font-medium ${activeTab === 'past' ? 'border-b-2 border-blue-500 text-blue-500' : 'border-transparent text-gray-500 hover:text-blue-500'}`}
            onClick={() => handleTabChange('past')}
          >
            Past Orders
          </button>
        </div>
        <div>
          {activeTab === 'current' ? (
            currentOrders.length > 0 ? (
              currentOrders.map((item, index) => (
                <OrderItem
                  key={index}
                  username={item.userdetails.username}
                  email={item.userdetails.email}
                  contact={item.userdetails.contact}
                  profileImg={item.userdetails.profileImg}
                  status={item.order.status}
                  onStatusChange={() => handleStatusChange(item.order.uid, item.order.sid)}
                />
              ))
            ) : (
              <p className="text-gray-500">No current orders yet.</p>
            )
          ) : (
            pastOrders.length > 0 ? (
              pastOrders.map((item, index) => (
                <OrderItem
                  key={index}
                  username={item.userdetails.username}
                  email={item.userdetails.email}
                  contact={item.userdetails.contact}
                  profileImg={item.userdetails.profileImg}
                  status={item.order.status}
                />
              ))
            ) : (
              <p className="text-gray-500">No past orders yet.</p>
            )
          )}
        </div>
      </div>
    </>
  );
};
 
export default OrderDetailsSP;