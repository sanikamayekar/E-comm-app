// export default function Sidebar() {
//   return (
//     <aside className="w-80 bg-white px-4 py-6 h-fit space-y-6">
//       <div className="bg-gray-100 px-6 py-8 rounded-md">
//         <h3 className="text-xl font-bold text-gray-800 mb-8">Hot Deals</h3>
//         <ul className="space-y-6">
//           <li className="flex justify-between items-center text-gray-700 hover:text-blue-500 cursor-pointer transition-colors">
//             <span className="text-base">Nike</span>
//             <span className="text-gray-400 font-medium">2</span>
//           </li>
//           <li className="flex justify-between items-center text-blue-500 hover:text-blue-600 cursor-pointer transition-colors">
//             <span className="text-base font-medium">Airmax</span>
//             <span className="text-blue-400 font-medium">48</span>
//           </li>
//           <li className="flex justify-between items-center text-gray-700 hover:text-blue-500 cursor-pointer transition-colors">
//             <span className="text-base">Nike</span>
//             <span className="text-gray-400 font-medium">14</span>
//           </li>
//           <li className="flex justify-between items-center text-gray-700 hover:text-blue-500 cursor-pointer transition-colors">
//             <span className="text-base">Adidas</span>
//             <span className="text-gray-400 font-medium">15</span>
//           </li>
//           <li className="flex justify-between items-center text-gray-700 hover:text-blue-500 cursor-pointer transition-colors">
//             <span className="text-base">Vans</span>
//             <span className="text-gray-400 font-medium">23</span>
//           </li>
//           <li className="flex justify-between items-center text-gray-700 hover:text-blue-500 cursor-pointer transition-colors">
//             <span className="text-base">All Stars</span>
//             <span className="text-gray-400 font-medium">1</span>
//           </li>
//           <li className="flex justify-between items-center text-gray-700 hover:text-blue-500 cursor-pointer transition-colors">
//             <span className="text-base">Adidas</span>
//             <span className="text-gray-400 font-medium">95</span>
//           </li>
//         </ul>
//       </div>

//       <div className="bg-gray-100 px-6 py-8 rounded-md">
//         <h3 className="text-xl font-bold text-gray-800 mb-8">PRICES</h3>
//         <div className="space-y-4">
//           <div className="flex justify-between items-center">
//             <span className="text-base text-gray-700">Ranger:</span>
//             <span className="text-base font-medium text-gray-800">$13.99 - $25.99</span>
//           </div>
//           <div className="relative">
//             <div className="w-full h-2 bg-white rounded-full">
//               <div className="h-2 bg-blue-500 rounded-full relative" style={{ width: '100%' }}>
//                 <div className="absolute -left-2 -top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow"></div>
//                 <div className="absolute -right-2 -top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gray-100 px-6 py-8 rounded-md">
//         <h3 className="text-xl font-bold text-gray-800 mb-8">COLOR</h3>
//         <div className="flex space-x-4 items-center">
//           <div className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer hover:scale-110 transition ring-2 ring-blue-500 ring-offset-2 ring-offset-white"></div>
//           <div className="w-8 h-8 rounded-full bg-red-500 cursor-pointer hover:scale-110 transition hover:ring-2 hover:ring-offset-2 hover:ring-offset-white hover:ring-red-500"></div>
//           <div className="w-8 h-8 rounded-full bg-black cursor-pointer hover:scale-110 transition hover:ring-2 hover:ring-offset-2 hover:ring-offset-white hover:ring-gray-400"></div>
//           <div className="w-8 h-8 rounded-full bg-yellow-400 cursor-pointer hover:scale-110 transition hover:ring-2 hover:ring-offset-2 hover:ring-offset-white hover:ring-yellow-400"></div>
//           <div className="w-8 h-8 rounded-full bg-pink-500 cursor-pointer hover:scale-110 transition hover:ring-2 hover:ring-offset-2 hover:ring-offset-white hover:ring-pink-500"></div>
//           <div className="w-8 h-8 rounded-full bg-pink-100 cursor-pointer hover:scale-110 transition hover:ring-2 hover:ring-offset-2 hover:ring-offset-white hover:ring-pink-100"></div>
//         </div>
//       </div>

//       <div className="bg-gray-100 px-6 py-8 rounded-md">
//         <h3 className="text-xl font-bold text-gray-800 mb-8">BRAND</h3>
//         <ul className="space-y-6">
//           <li className="flex justify-between items-center text-gray-700 hover:text-blue-500 cursor-pointer transition-colors">
//             <span className="text-base">Nike</span>
//             <span className="text-gray-400 font-medium">99</span>
//           </li>
//           <li className="flex justify-between items-center text-blue-500 hover:text-blue-600 cursor-pointer transition-colors">
//             <span className="text-base font-medium">Nike</span>
//             <span className="text-blue-400 font-medium">99</span>
//           </li>
//           <li className="flex justify-between items-center text-gray-700 hover:text-blue-500 cursor-pointer transition-colors">
//             <span className="text-base">Adidas</span>
//             <span className="text-gray-400 font-medium">99</span>
//           </li>
//           <li className="flex justify-between items-center text-gray-700 hover:text-blue-500 cursor-pointer transition-colors">
//             <span className="text-base">Siemens</span>
//             <span className="text-gray-400 font-medium">99</span>
//           </li>
//         </ul>
//       </div>

//       <div className="bg-gray-100 px-6 py-4 rounded-md text-center">
//         <button className="text-xl font-bold text-gray-800 hover:text-blue-500 transition-colors">MORE</button>
//       </div>
//     </aside>
//   );
// }


'use client';
import { useState } from 'react';

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button - Only visible on mobile */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-lg border border-gray-200"
      >
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Overlay - Only visible when menu is open */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`
        fixed md:relative
        top-0 left-0
        w-80 md:w-80 lg:w-64
        bg-white min-h-screen flex flex-col
        transform transition-transform duration-300 ease-in-out z-40
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
      {/* Hot Deals Section */}
      <div className="p-4 md:p-6 border-b border-gray-100">
        <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 md:mb-6">Hot Deals</h3>
        <ul className="space-y-3 md:space-y-4">
          <li className="flex justify-between items-center text-gray-700 cursor-pointer hover:text-blue-500 transition-colors">
            <span className="text-sm md:text-base">Nike</span>
            <span className="text-gray-400 text-xs md:text-sm">2</span>
          </li>
          <li className="flex justify-between items-center text-blue-500 cursor-pointer">
            <span className="font-medium text-sm md:text-base">Airmax</span>
            <span className="text-blue-400 text-xs md:text-sm">48</span>
          </li>
          <li className="flex justify-between items-center text-gray-700 cursor-pointer hover:text-blue-500 transition-colors">
            <span className="text-sm md:text-base">Nike</span>
            <span className="text-gray-400 text-xs md:text-sm">14</span>
          </li>
          <li className="flex justify-between items-center text-gray-700 cursor-pointer hover:text-blue-500 transition-colors">
            <span className="text-sm md:text-base">Adidas</span>
            <span className="text-gray-400 text-xs md:text-sm">15</span>
          </li>
          <li className="flex justify-between items-center text-gray-700 cursor-pointer hover:text-blue-500 transition-colors">
            <span className="text-sm md:text-base">Vans</span>
            <span className="text-gray-400 text-xs md:text-sm">23</span>
          </li>
          <li className="flex justify-between items-center text-gray-700 cursor-pointer hover:text-blue-500 transition-colors">
            <span className="text-sm md:text-base">All Stars</span>
            <span className="text-gray-400 text-xs md:text-sm">1</span>
          </li>
          <li className="flex justify-between items-center text-gray-700 cursor-pointer hover:text-blue-500 transition-colors">
            <span className="text-sm md:text-base">Adidas</span>
            <span className="text-gray-400 text-xs md:text-sm">95</span>
          </li>
        </ul>
      </div>

      {/* Prices Section */}
      <div className="p-4 md:p-6 border-b border-gray-100">
        <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 md:mb-6">PRICES</h3>
        <div className="mb-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-600 text-sm md:text-base">Range:</span>
            <span className="font-medium text-sm md:text-base">$13.99 - $25.99</span>
          </div>
          <div className="relative">
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-blue-500 rounded-full relative" 
                style={{width: '70%'}}
              >
                <div className="absolute -left-2 -top-1 w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full border-2 border-white shadow"></div>
                <div className="absolute -right-2 -top-1 w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full border-2 border-white shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Color Section */}
      <div className="p-4 md:p-6 border-b border-gray-100">
        <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 md:mb-6">COLOR</h3>
        <div className="flex items-center space-x-2 md:space-x-3 flex-wrap gap-y-2">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-500 cursor-pointer ring-2 ring-blue-500 ring-offset-2"></div>
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-red-500 cursor-pointer hover:ring-2 hover:ring-red-500 hover:ring-offset-2 transition-all"></div>
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-black cursor-pointer hover:ring-2 hover:ring-gray-400 hover:ring-offset-2 transition-all"></div>
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-yellow-400 cursor-pointer hover:ring-2 hover:ring-yellow-400 hover:ring-offset-2 transition-all"></div>
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-pink-500 cursor-pointer hover:ring-2 hover:ring-pink-500 hover:ring-offset-2 transition-all"></div>
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-pink-100 cursor-pointer hover:ring-2 hover:ring-pink-100 hover:ring-offset-2 transition-all"></div>
        </div>
      </div>

      {/* Brand Section */}
      <div className="p-4 md:p-6 border-b border-gray-100 flex-1">
        <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 md:mb-6">BRAND</h3>
        <ul className="space-y-3 md:space-y-4">
          <li className="flex justify-between items-center text-gray-700 cursor-pointer hover:text-blue-500 transition-colors">
            <span className="text-sm md:text-base">Nike</span>
            <span className="text-gray-400 text-xs md:text-sm">99</span>
          </li>
          <li className="flex justify-between items-center text-blue-500 cursor-pointer">
            <span className="font-medium text-sm md:text-base">Nike</span>
            <span className="text-blue-400 text-xs md:text-sm">99</span>
          </li>
          <li className="flex justify-between items-center text-gray-700 cursor-pointer hover:text-blue-500 transition-colors">
            <span className="text-sm md:text-base">Adidas</span>
            <span className="text-gray-400 text-xs md:text-sm">99</span>
          </li>
          <li className="flex justify-between items-center text-gray-700 cursor-pointer hover:text-blue-500 transition-colors">
            <span className="text-sm md:text-base">Siemens</span>
            <span className="text-gray-400 text-xs md:text-sm">99</span>
          </li>
        </ul>
      </div>

      {/* More Button */}
      <div className="p-4 md:p-6 text-center">
        <button className="text-base md:text-lg font-bold text-gray-800 hover:text-blue-500 transition-colors">
          MORE
        </button>
      </div>
          </div>
    </>
  );
}