// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from '../../assests/logo.png'
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="w-full mx-auto py-4 px-4">
//         <div className="flex justify-between h-16">
//           <div className="flex-shrink-0 flex items-center p-2">
//             <img
//               className="h-full w-auto"
//               src={logo}
//               alt="Nova Home Care"
//             />
//           </div>
//           <div className="hidden sm:ml-6 sm:flex items-center sm:space-x-8">
//             {/* Use <a> tag with '#' to simulate navigation */}
//             {['Home', 'About', 'Services', 'Careers', "FAQ's", 'Contact'].map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//           <div className="hidden sm:ml-6 sm:flex sm:items-center">
//             <button className="bg-teal-700 text-white px-6 py-3 rounded-full text-xl font-medium hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
//               Appointment
//             </button>
//           </div>
//           <div className="-mr-2 flex items-center sm:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
//             >
//               {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="sm:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {['Home', 'About', 'Services', 'Careers', "FAQ's", 'Contact'].map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 {item}
//               </a>
//             ))}
//             <button className="w-full bg-teal-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
//               Appointment
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assests/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-full mx-auto py-4 px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center p-2">
            <img
              className="h-full w-auto"
              src={logo}
              alt="Nova Home Care"
            />
          </div>
          <div className="hidden sm:ml-6 sm:flex items-center sm:space-x-8">
            {/* Updated navigation items */}
            {['About Us', 'Services', 'Careers', "FAQ's", 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium"
              >
                {item}
              </a>
            ))}
            {/* New buttons for desktop view */}
            <a
              href="#"
             className="bg-teal-700 text-white px-6 py-3 rounded-full text-xl font-medium hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Partner with Us
            </a>
            <a
              href="#"
              className="bg-teal-700 text-white px-6 py-3 rounded-full text-xl font-medium hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Login
            </a>
            <a
              href="#"
              className="bg-teal-700 text-white px-6 py-3 rounded-full text-xl font-medium hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Signup
            </a>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Updated navigation items for mobile view */}
            {['About', 'Services', 'Careers', "FAQ's", 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item}
              </a>
            ))}
            <button
             className="w-full bg-teal-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
             
              Partner with Us
            </button>
            <button className="w-full bg-teal-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              Login
            </button>
            <button className="w-full bg-teal-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              Signup
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
