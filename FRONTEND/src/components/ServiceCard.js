// components/ServiceCard.js
import React ,{useState}from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
const ServiceCard = ({ icon: Icon, text, description }) => {
  const [activeCategory, setActiveCategory] = useState('');
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };
  return (
      <><motion.div
      className="bg-white p-6 rounded-lg shadow-md text-center"
      whileHover={{ y: -5 }}
    >
      <Icon className="text-4xl mx-auto mb-4 text-blue-500" />
      <p className="font-semibold">{text}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </motion.div></>
  );
};

export default ServiceCard;
