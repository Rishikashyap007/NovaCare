import React from 'react';

const services = [
  { name: 'Child care', icon: '👶' },
  { name: 'Senior care', icon: '🤝' },
  { name: 'Housekeeping', icon: '🏠' },
  { name: 'Pet care', icon: '🐾' },
  { name: 'Tutoring', icon: '📝' },
];

const ServiceCard = ({ name, icon }) => (
  <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center transition-transform hover:scale-105">
    <div className="text-3xl mb-2">{icon}</div>
    <p className="text-gray-700 text-center">{name}</p>
  </div>
);

const ServiceGrid = () => (
  <div className="bg-pink-50 p-4 sm:p-6 md:p-8">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {services.map((service) => (
        <ServiceCard key={service.name} {...service} />
      ))}
    </div>
  </div>
);

export default ServiceGrid;