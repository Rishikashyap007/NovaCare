import React, { useState } from 'react';

const ServiceCard = ({ title, imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`transition-transform duration-300 ease-in-out ${isHovered ? 'scale-150' : 'scale-100'}`}
        style={{ transformOrigin: 'center' }}
      >
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
      </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button className="bg-white text-teal-700 px-4 py-2 rounded-full text-sm">
            Know More
          </button>
        </div>
    </div>
  );
};

const ExtensiveServices = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-teal-700 text-sm font-semibold mb-2">Our Concern</h2>
      <h1 className="text-center text-teal-700 text-4xl font-bold mb-8">Extensive Range Of Services</h1>
      
      <div className="flex flex-col md:flex-row gap-4">
        <ServiceCard 
          title="Housekeeping" 
          imageSrc="https://novahome.care/wp-content/uploads/2024/07/img1.jpg" 
        />
        <ServiceCard 
          title="Health Monitoring" 
          imageSrc="https://novahome.care/wp-content/uploads/2024/07/Img2.jpg" 
        />
        <ServiceCard 
          title="Recreational Activities" 
          imageSrc="https://novahome.care/wp-content/uploads/2024/07/Img3.jpg" 
        />
      </div>
    </div>
  );
};

export default ExtensiveServices;
