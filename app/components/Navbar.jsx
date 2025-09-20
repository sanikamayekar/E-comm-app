// 'use client';

// import Link from 'next/link';
// import { useState, useEffect } from 'react';

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [cartTotal, setCartTotal] = useState(0);
//   const [activeLink, setActiveLink] = useState('HOME');

//   // Mock cart data - in a real app this would come from your state management
//   useEffect(() => {
//     // Simulate loading cart data
//     setCartTotal(0.00);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//     setIsMenuOpen(false);
//   };

//   return (
//     <>
//       <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex justify-between items-center relative">
//         {/* Logo Section */}
//         <Link href="/" className="flex items-center space-x-3">
//           <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
//             E
//           </div>
//           <span className="text-2xl font-bold text-gray-800">E-Comm</span>
//         </Link>

//         {/* Desktop Navigation Links */}
//         <ul className="hidden lg:flex space-x-8 text-base font-medium">
//           <li>
//             <Link 
//               href="/" 
//               className={`${activeLink === 'HOME' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700 hover:text-blue-600'} pb-1 transition-colors duration-200`}
//               onClick={() => handleLinkClick('HOME')}
//             >
//               HOME
//             </Link>
//           </li>
//           <li>
//             <Link 
//               href="/products" 
//               className={`${activeLink === 'BAG' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700 hover:text-blue-600'} pb-1 transition-colors duration-200`}
//               onClick={() => handleLinkClick('BAG')}
//             >
//               BAG
//             </Link>
//           </li>
//           <li>
//             <Link 
//               href="/products" 
//               className={`${activeLink === 'SNEAKERS' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700 hover:text-blue-600'} pb-1 transition-colors duration-200`}
//               onClick={() => handleLinkClick('SNEAKERS')}
//             >
//               SNEAKERS
//             </Link>
//           </li>
//           <li>
//             <Link 
//               href="/products" 
//               className={`${activeLink === 'BELT' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700 hover:text-blue-600'} pb-1 transition-colors duration-200`}
//               onClick={() => handleLinkClick('BELT')}
//             >
//               BELT
//             </Link>
//           </li>
//           <li>
//             <Link 
//               href="/contact" 
//               className={`${activeLink === 'CONTACT' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700 hover:text-blue-600'} pb-1 transition-colors duration-200`}
//               onClick={() => handleLinkClick('CONTACT')}
//             >
//               CONTACT
//             </Link>
//           </li>
//         </ul>

//         {/* Cart Section */}
//         <div className="flex items-center space-x-3 text-base font-medium text-gray-700">
//           <div className="w-8 h-8 flex items-center justify-center relative">
//             <svg 
//               width="24" 
//               height="24" 
//               viewBox="0 0 24 24" 
//               fill="none" 
//               stroke="currentColor" 
//               strokeWidth="2" 
//               strokeLinecap="round" 
//               strokeLinejoin="round"
//               className="text-gray-700"
//             >
//               <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
//               <line x1="3" y1="6" x2="21" y2="6"/>
//               <path d="m16 10a4 4 0 0 1-8 0"/>
//             </svg>
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
//               0
//             </span>
//           </div>
//           <span className="text-gray-800 hidden sm:block">Items</span>
//           <span className="font-semibold text-gray-900">${cartTotal.toFixed(2)}</span>
//         </div>

//         {/* Mobile Menu Button */}
//         <button 
//           className="lg:hidden p-2"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           <svg 
//             width="24" 
//             height="24" 
//             viewBox="0 0 24 24" 
//             fill="none" 
//             stroke="currentColor" 
//             strokeWidth="2" 
//             strokeLinecap="round" 
//             strokeLinejoin="round"
//             className="text-gray-700"
//           >
//             <line x1="3" y1="6" x2="21" y2="6"/>
//             <line x1="3" y1="12" x2="21" y2="12"/>
//             <line x1="3" y1="18" x2="21" y2="18"/>
//           </svg>
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden bg-white shadow-md border-b border-gray-200">
//           <ul className="flex flex-col space-y-4 p-6 text-base font-medium">
//             <li>
//               <Link 
//                 href="/" 
//                 className={`${activeLink === 'HOME' ? 'text-blue-500' : 'text-gray-700'} block py-2`}
//                 onClick={() => handleLinkClick('HOME')}
//               >
//                 HOME
//               </Link>
//             </li>
//             <li>
//               <Link 
//                 href="/products" 
//                 className={`${activeLink === 'BAG' ? 'text-blue-500' : 'text-gray-700'} block py-2`}
//                 onClick={() => handleLinkClick('BAG')}
//               >
//                 BAG
//               </Link>
//             </li>
//             <li>
//               <Link 
//                 href="/products" 
//                 className={`${activeLink === 'SNEAKERS' ? 'text-blue-500' : 'text-gray-700'} block py-2`}
//                 onClick={() => handleLinkClick('SNEAKERS')}
//               >
//                 SNEAKERS
//               </Link>
//             </li>
//             <li>
//               <Link 
//                 href="/products" 
//                 className={`${activeLink === 'BELT' ? 'text-blue-500' : 'text-gray-700'} block py-2`}
//                 onClick={() => handleLinkClick('BELT')}
//               >
//                 BELT
//               </Link>
//             </li>
//             <li>
//               <Link 
//                 href="/contact" 
//                 className={`${activeLink === 'CONTACT' ? 'text-blue-500' : 'text-gray-700'} block py-2`}
//                 onClick={() => handleLinkClick('CONTACT')}
//               >
//                 CONTACT
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// }

'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [activeLink, setActiveLink] = useState('HOME');

  // Mock cart data
  useEffect(() => {
    setCartTotal(0.00);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-200 px-4 sm:px-6 py-4 flex justify-between items-center relative">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 relative">
            <Image
              src="/images/icon.png"
              alt="E-Comm Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="text-xl font-medium text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
            E-Comm
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-8 text-base font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <li>
            <Link 
              href="/" 
              className={`${activeLink === 'HOME' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700 hover:text-blue-600'} pb-1 transition-colors duration-200`}
              onClick={() => handleLinkClick('HOME')}
              style={{ fontWeight: 500, fontSize: '20px', lineHeight: '100%', letterSpacing: '0%' }}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link 
              href="/products" 
              className={`${activeLink === 'BAG' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700 hover:text-blue-600'} pb-1 transition-colors duration-200`}
              onClick={() => handleLinkClick('BAG')}
              style={{ fontWeight: 500, fontSize: '20px', lineHeight: '100%', letterSpacing: '0%' }}
            >
              BAG
            </Link>
          </li>
          <li>
            <Link 
              href="/products" 
              className={`${activeLink === 'SNEAKERS' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700 hover:text-blue-600'} pb-1 transition-colors duration-200`}
              onClick={() => handleLinkClick('SNEAKERS')}
              style={{ fontWeight: 500, fontSize: '20px', lineHeight: '100%', letterSpacing: '0%' }}
            >
              SNEAKERS
            </Link>
          </li>
          <li>
            <Link 
              href="/products" 
              className={`${activeLink === 'BELT' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700 hover:text-blue-600'} pb-1 transition-colors duration-200`}
              onClick={() => handleLinkClick('BELT')}
              style={{ fontWeight: 500, fontSize: '20px', lineHeight: '100%', letterSpacing: '0%' }}
            >
              BELT
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`${activeLink === 'CONTACT' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700 hover:text-blue-600'} pb-1 transition-colors duration-200`}
              onClick={() => handleLinkClick('CONTACT')}
              style={{ fontWeight: 500, fontSize: '20px', lineHeight: '100%', letterSpacing: '0%' }}
            >
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Cart Section */}
        <div className="flex items-center space-x-3 text-base font-medium text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <div className="w-8 h-8 flex items-center justify-center relative">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-gray-700"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="m16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>
          <span className="text-gray-800 hidden sm:block">Items</span>
          <span className="font-semibold text-gray-900">${cartTotal.toFixed(2)}</span>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-gray-700"
          >
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md border-b border-gray-200" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <ul className="flex flex-col space-y-4 p-6 text-base font-medium">
            <li>
              <Link 
                href="/" 
                className={`${activeLink === 'HOME' ? 'text-blue-500' : 'text-gray-700'} block py-2`}
                onClick={() => handleLinkClick('HOME')}
                style={{ fontWeight: 500, fontSize: '20px', lineHeight: '100%', letterSpacing: '0%' }}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                href="/products" 
                className={`${activeLink === 'BAG' ? 'text-blue-500' : 'text-gray-700'} block py-2`}
                onClick={() => handleLinkClick('BAG')}
                style={{ fontWeight: 500, fontSize: '20px', lineHeight: '100%', letterSpacing: '0%' }}
              >
                BAG
              </Link>
            </li>
            <li>
              <Link 
                href="/products" 
                className={`${activeLink === 'SNEAKERS' ? 'text-blue-500' : 'text-gray-700'} block py-2`}
                onClick={() => handleLinkClick('SNEAKERS')}
                style={{ fontWeight: 500, fontSize: '20px', lineHeight: '100%', letterSpacing: '0%' }}
              >
                SNEAKERS
              </Link>
            </li>
            <li>
              <Link 
                href="/products" 
                className={`${activeLink === 'BELT' ? 'text-blue-500' : 'text-gray-700'} block py-2`}
                onClick={() => handleLinkClick('BELT')}
                style={{ fontWeight: 500, fontSize: '20px', lineHeight: '100%', letterSpacing: '0%' }}
              >
                BELT
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`${activeLink === 'CONTACT' ? 'text-blue-500' : 'text-gray-700'} block py-2`}
                onClick={() => handleLinkClick('CONTACT')}
                style={{ fontWeight: 500, fontSize: '20px', lineHeight: '100%', letterSpacing: '0%' }}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}