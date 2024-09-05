
import React, { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
 import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar2 from '../navbars/Navbar2';
const ProfileSP = () => {
  const [userData, setUserData] = useState(null); // Holds fetched user data
  const [isEditing, setIsEditing] = useState(false); // Controls editing state
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const navigate = useNavigate(); // Initialize useNavigate
  // Function to get a cookie by name
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };
 
    const handleOrdersClick = () => {
    navigate('/sppage'); // Navigate to the orders page
  };
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Read the role identifiers from cookies
        const uid = getCookie('uid');
        const sid = getCookie('sid');
        const aid = getCookie('aid');
 
        // Determine the URL based on the available ID
        let url;
        if (uid) {
          url = `http://localhost:8087/user/get/${uid}`;
        } else if (sid) {
          url = `http://localhost:8088/provider/${sid}`;
        } else if (aid) {
          url = `http://localhost:8089/admin/get/${aid}`;
        } else {
          console.error('No valid identifier found in cookies');
          return;
        }
 
        // Fetch user data using the identified URL
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
         console.log(data);
          setUserData(data);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
 
    fetchData();
  }, []);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  //console.log(data);
  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };
 
  // Render loading state if userData is not yet available
  if (!userData) return <p>Loading...</p>;
 
  // Conditional rendering based on the class field

  const renderProfileFields = () => {
 /// Use optional chaining to safely access _class
    const userClass = userData?._class || '';
 
    if (userClass.includes('Admin')) {
      return (
        <>
       
          <div className="flex flex-col">
       
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              value={userData.name || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
 
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              value={userData.email || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </>
      );
    } else if (userClass.includes('ServiceProvider')) {
      return (
        <>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              value={userData.name || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
 
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              value={userData.email || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
 
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Experience</label>
            <input
              type="text"
              name="experience"
              placeholder="Experience"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              value={userData.experience || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
 
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              name="city"
              placeholder="City"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              value={userData.city || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
 
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Service Type</label>
            <input
              type="text"
              name="serviceType"
              placeholder="Service Type"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              value={userData.serviceType || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </>
      );
    } else if (userClass.includes('User')) {
      return (
        <>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              value={userData.username || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
 
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              value={userData.email || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
 
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              value={userData.address || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
 
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Contact</label>
            <input
              type="text"
              name="contact"
              placeholder="Contact"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              value={userData.contact || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </>
      );
    }
  };
 
  return (
    <>
    <Navbar2/>
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Welcome, {userData?.name || userData?.username}</h1>
          <p className="text-sm text-gray-500">{today}</p>
        </div>
        <img
          src={userData.profileImg}
          alt="Profile"
          className="w-10 h-10 rounded-full border border-gray-300"
        />
      </header>
 
      {/* Profile Section */}
      <div className="p-6 bg-gradient-to-r from-blue-100 to-yellow-100 rounded-md mb-6">
        <div className="flex items-center space-x-4">
          <img
            src={userData.profileImg}
            alt="image"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{userData?.name || userData?.username}</h2>
            <p className="text-sm text-gray-500">{userData?.email || userData?.contact}</p>
          </div>
          {/* <button
            onClick={handleEditToggle}
            className="ml-auto px-4 py-1 text-sm text-white bg-blue-500 rounded-md flex items-center space-x-2 hover:bg-blue-600"
          >
            <FaEdit className="mr-1" /> {isEditing ? 'Cancel' : 'Edit'}
          </button> */}
        </div>
      </div>
  {/* Orders Button */}
       <button
       onClick={handleOrdersClick}
         className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
         View Orders
       </button>
      {/* Form Section */}
      <form className="space-y-4">
        {renderProfileFields()}
      </form>
    </div>
    </>
  );
};
 
export default ProfileSP;