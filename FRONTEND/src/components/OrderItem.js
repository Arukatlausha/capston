import React from 'react';

const OrderItem = ({ title, orderNumber, quantity, image, username, serviceProviderName }) => {
  return (
    <div className="flex items-center space-x-4 py-4 border-b border-gray-200 last:border-b-0">
      <img src={image} alt={title} className="w-16 h-16 object-cover rounded" />
      <div className="flex-grow">
        <h3 className="text-sm font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">Order: #{orderNumber}</p>
        <p className="text-sm text-gray-500">Qty: {quantity}</p>
        <p className="text-sm text-gray-500">User: {username}</p>
        <p className="text-sm text-gray-500">Service Provider: {serviceProviderName}</p>
      </div>
    </div>
  );
};

export default OrderItem;
