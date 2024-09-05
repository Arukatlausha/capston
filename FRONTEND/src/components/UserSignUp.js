// import React, { useState } from 'react';
// import axios from 'axios';
// import { FaEnvelope, FaLock, FaUser, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
// import { v4 as uuidv4 } from 'uuid';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const UserSignUp = () => {
//   const [formData, setFormData] = useState({
//     uid: uuidv4(),
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     address: '',
//     contact: '',
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const navigate = useNavigate(); // Initialize useNavigate hook

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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!validateForm()) {
//       return;
//     }

//     const payload = {
//       uid: formData.uid,
//       username: formData.username,
//       email: formData.email,
//       password: formData.password,
//       address: formData.address,
//       contact: formData.contact,
//     };

//     try {
//       const response = await axios.post('http://localhost:8087/user/add', payload);
//       console.log('Response:', response);

//       if (response.status === 201) {
//         setSuccess('User registered successfully!');
//         setFormData({
//           uid: uuidv4(),
//           username: '',
//           email: '',
//           password: '',
//           confirmPassword: '',
//           address: '',
//           contact: '',
//         });
//         setTimeout(10)
//         navigate('/'); // Redirect to home page after successful registration
//       } else {
//         setError('Registration failed. Please check your input and try again.');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       if (error.response) {
//         setError(error.response.data.message || 'Registration failed. Please check your input and try again.');
//       } else {
//         setError('Network error. Please check your connection and try again.');
//       }
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
//         <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
//           Sign Up
//         </h1>

//         {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
//         {success && <p className="text-green-500 text-xs italic mb-4">{success}</p>}

//         <form onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             <div className="relative">
//               <FaUser className="absolute top-3 left-3 text-gray-400" />
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 className="pl-10 pr-4 py-2 w-full border rounded-md"
//                 value={formData.username}
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
//               <FaMapMarkerAlt className="absolute top-3 left-3 text-gray-400" />
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Address"
//                 className="pl-10 pr-4 py-2 w-full border rounded-md"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="relative">
//               <FaPhoneAlt className="absolute top-3 left-3 text-gray-400" />
//               <input
//                 type="tel"
//                 name="contact"
//                 placeholder="Phone Number"
//                 className="pl-10 pr-4 py-2 w-full border rounded-md"
//                 value={formData.contact}
//                 onChange={handleChange}
//                 required
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

// export default UserSignUp;
























import React, { useState } from 'react';
import axios from 'axios';
import { FaEnvelope, FaLock, FaUser, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
 
const UserSignUp = () => {
  const [formData, setFormData] = useState({
    uid: uuidv4(),
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    contact: '',
    profileImg: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
 
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
      const profileImg = result.secure_url; // Use the secure_url instead of url
      console.log(profileImg);
      setFormData((prevState) => ({
        ...prevState,
        profileImg: profileImg.toString(), // Convert the URL to a string
      }));
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
 
    const payload = {
      uid: formData.uid,
      username: formData.username,
      email: formData.email,
      password: formData.password,
      address: formData.address,
      contact: formData.contact,
      profileImg: formData.profileImg,
    };
 
    try {
      const response = await axios.post('http://localhost:8087/user/add', payload);
      console.log('Response:', response);
 
      if (response.status === 201) {
        setSuccess('User registered successfully!');
        setFormData({
          uid: uuidv4(),
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          address: '',
          contact: '',
          profileImg: '',
        });
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setError('Registration failed. Please check your input and try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response) {
        setError(error.response.data.message || 'Registration failed. Please check your input and try again.');
      } else {
        setError('Network error. Please check your connection and try again.');
      }
    }
  };
 
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Sign Up
        </h1>
 
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        {success && <p className="text-green-500 text-xs italic mb-4">{success}</p>}
 
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={formData.username}
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
              <FaMapMarkerAlt className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <FaPhoneAlt className="absolute top-3 left-3 text-gray-400" />
              <input
                type="tel"
                name="contact"
                placeholder="Phone Number"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={formData.contact}
                onChange={handleChange}
                required
              />
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
 
export default UserSignUp;