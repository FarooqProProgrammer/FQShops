import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-blue-500 text-white rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;
