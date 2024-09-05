// import React, { useState } from 'react';
// import { FaEnvelope, FaLock, FaUser, FaMapMarkerAlt, FaBriefcase, FaCity, FaMoneyBill, FaCog } from 'react-icons/fa';
// import { v4 as uuidv4 } from 'uuid';
// import { useNavigate } from 'react-router-dom';
 
// const ServiceProviderSignUp = () => {
//   const [formData, setFormData] = useState({
//     sid: uuidv4(),
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     rating: '',
//     experience: '',
//     city: '',
//     description: '',
//     serviceCost: '',
//     serviceType: '',
//     working: '',
//     status: 'PENDING',
//     profileImg: '',
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [isImageUploaded, setIsImageUploaded] = useState(false);
 
//   const navigate = useNavigate();
 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };
 
//   const validateForm = () => {
//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords don't match");
//       return false;
//     }
//     if (formData.password.length < 8) {
//       setError("Password must be at least 8 characters long");
//       return false;
//     }
//     return true;
//   };
 
//   const uploadImage = async (file) => {
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', "mecsmxsa");
//     formData.append('cloud_name', "dqvpucm8b");
 
//     try {
//       const response = await fetch('https://api.cloudinary.com/v1_1/dqvpucm8b/image/upload', {
//         method: 'POST',
//         body: formData
//       });
 
//       if (!response.ok) {
//         throw new Error('Network response was not ok.');
//       }
 
//       const result = await response.json();
//       const profileImg = result.secure_url;
//       console.log(profileImg);
//       setFormData((prevState) => ({
//         ...prevState,
//         profileImg: profileImg.toString(),
//       }));
//       setIsImageUploaded(true);
//     } catch (error) {
//       console.error('Error:', error);
//       setError('There was a problem with the upload.');
//     }
//   };
 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');
 
//     if (!validateForm()) {
//       return;
//     }
 
//     if (!isImageUploaded) {
//       setTimeout(handleSubmit, 1000);
//       return;
//     }
 
//     const payload = {
//       sid: formData.sid,
//       name: formData.name,
//       email: formData.email,
//       password: formData.password,
//       rating: formData.rating,
//       experience: formData.experience,
//       city: formData.city,
//       description: formData.description,
//       serviceCost: formData.serviceCost,
//       serviceType: formData.serviceType,
//       working: formData.working,
//       status: formData.status,
//       profileImg: formData.profileImg,
//     };
 
//     try {
//       const response = await fetch('http://localhost:8088/provider', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });
 
//       if (response.ok) {
//         setSuccess('Service provider registered successfully!');
//         setFormData({
//           sid: uuidv4(),
//           name: '',
//           email: '',
//           password: '',
//           confirmPassword: '',
//           rating: 0,
//           experience: '',
//           city: '',
//           description: '',
//           serviceCost: 0,
//           serviceType: '',
//           working: '',
//           status: 'PENDING',
//           profileImg: '',
//         });
//         setIsImageUploaded(false);
//         navigate('/');
//       } else {
//         const errorData = await response.json();
//         setError(errorData.message || 'Registration failed. Please check your input and try again.');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setError('Network error. Please check your connection and try again.');
//     }
//   };
 
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
//         <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
//           Service Provider Sign Up
//         </h1>
 
//         {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
//         {success && <p className="text-green-500 text-xs italic mb-4">{success}</p>}
 
//         <form onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             <div className="relative">
//               <FaUser className="absolute top-3 left-3 text-gray-400" />
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 className="pl-10 pr-4 py-2 w-full border rounded-md"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="relative">
//               <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 className="pl-10 pr-4 py-2 w-full border rounded-md"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="relative">
//               <FaLock className="absolute top-3 left-3 text-gray-400" />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 className="pl-10 pr-4 py-2 w-full border rounded-md"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="relative">
//               <FaLock className="absolute top-3 left-3 text-gray-400" />
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 className="pl-10 pr-4 py-2 w-full border rounded-md"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="relative">
//               <FaBriefcase className="absolute top-3 left-3 text-gray-400" />
//               <input
//                 type="text"
//                 name="experience"
//                 placeholder="Experience"
//                 className="pl-10 pr-4 py-2 w-full border rounded-md"
//                 value={formData.experience}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="relative">
//               <FaCity className="absolute top-3 left-3 text-gray-400" />
//               <input
//                 type="text"
//                 name="city"
//                 placeholder="City"
//                 className="pl-10 pr-4 py-2 w-full border rounded-md"
//                 value={formData.city}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="relative">
//               <FaMapMarkerAlt className="absolute top-3 left-3 text-gray-400" />
//               <input
//                 type="text"
//                 name="description"
//                 placeholder="Description"
//                 className="pl-10 pr-4 py-2 w-full border rounded-md"
//                 value={formData.description}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="relative">
//               <FaMoneyBill className="absolute top-3 left-3 text-gray-400" />
//               <input
//                 type="number"
//                 name="serviceCost"
//                 placeholder="Service Cost"
//                 className="pl-10 pr-4 py-2 w-full border rounded-md"
//                 value={formData.serviceCost}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="relative">
//               <FaCog className="absolute top-3 left-3 text-gray-400" />
//               <input
//                 type="text"
//                 name="serviceType"
//                 placeholder="Service Type"
//                 className="pl-10 pr-4 py-2 w-full border rounded-md"
//                 value={formData.serviceType}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="relative">
//               <FaUser className="absolute top-3 left-3 text-gray-400" />
//               <select
//                 name="working"
//                 className="pl-10 pr-4 py-2 w-full border rounded-md"
//                 value={formData.working}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="" disabled>Select Working Status</option>
//                 <option value="Full-time">Full-time</option>
//                 <option value="Part-time">Part-time</option>
//               </select>
//             </div>
//             <div className="relative">
//               <input
//                 type="file"
//                 className="pl-10 pr-4 py-2 w-full border rounded-md"
//                 onChange={(e) => uploadImage(e.target.files[0])}
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
//             >
//               Sign up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
 
// export default ServiceProviderSignUp;


import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaUser, FaMapMarkerAlt, FaBriefcase, FaCity, FaMoneyBill, FaCog, FaStar } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
 
const ServiceProviderSignUp = () => {
  const [formData, setFormData] = useState({
    sid: uuidv4(),
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    rating: '',
    experience: '',
    city: '',
    description: '',
    serviceCost: '',
    serviceType: '',
    working: '',
    status: 'PENDING',
    profileImg: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isImageUploaded, setIsImageUploaded] = useState(false);
 
  const navigate = useNavigate();
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
 
  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return false;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }
    return true;
  };
 
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', "mecsmxsa");
    formData.append('cloud_name', "dqvpucm8b");
 
    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/dqvpucm8b/image/upload', {
        method: 'POST',
        body: formData
      });
 
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
 
      const result = await response.json();
      const profileImg = result.secure_url;
      console.log(profileImg);
      setFormData((prevState) => ({
        ...prevState,
        profileImg: profileImg.toString(),
      }));
      setIsImageUploaded(true);
    } catch (error) {
      console.error('Error:', error);
      setError('There was a problem with the upload.');
    }
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
 
    if (!validateForm()) {
      return;
    }
 
    if (!isImageUploaded) {
      setTimeout(handleSubmit, 1000);
      return;
    }
 
    const payload = {
      sid: formData.sid,
      name: formData.name,
      email: formData.email,
      password: formData.password,
      rating: formData.rating,
      experience: formData.experience,
      city: formData.city,
      description: formData.description,
      serviceCost: formData.serviceCost,
      serviceType: formData.serviceType,
      working: formData.working,
      status: formData.status,
      profileImg: formData.profileImg,
    };
 
    try {
      const response = await fetch('http://localhost:8088/provider', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
 
      if (response.ok) {
        setSuccess('Service provider registered successfully!');
        setFormData({
          sid: uuidv4(),
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          rating: 0,
          experience: '',
          city: '',
          description: '',
          serviceCost: 0,
          serviceType: '',
          working: '',
          status: 'PENDING',
          profileImg: '',
        });
        setIsImageUploaded(false);
        navigate('/');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Registration failed. Please check your input and try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Network error. Please check your connection and try again.');
    }
  };
 
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Service Provider Sign Up
        </h1>
 
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        {success && <p className="text-green-500 text-xs italic mb-4">{success}</p>}
 
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <FaStar className="absolute top-3 left-3 text-gray-400" />
              <input
                type="number"
                name="rating"
                placeholder="Rating (1-5)"
                min="1"
                max="5"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={formData.rating}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <FaBriefcase className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="experience"
                placeholder="Experience"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={formData.experience}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <FaCity className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="city"
                placeholder="City"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <FaMapMarkerAlt className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <FaMoneyBill className="absolute top-3 left-3 text-gray-400" />
              <input
                type="number"
                name="serviceCost"
                placeholder="Service Cost"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={formData.serviceCost}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <FaCog className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="serviceType"
                placeholder="Service Type"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={formData.serviceType}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <select
                name="working"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={formData.working}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Working Status</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
              </select>
            </div>
            <div className="relative">
              <input
                type="file"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                onChange={(e) => uploadImage(e.target.files[0])}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default ServiceProviderSignUp;

