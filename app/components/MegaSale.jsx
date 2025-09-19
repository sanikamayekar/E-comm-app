// import React from 'react';

// const MegaSale = () => {
//   const megaSaleProducts = [
//     {
//       id: 1,
//       name: "Nike Air Max 270 React ENG",
//       image: "/images/img1.png",
//       currentPrice: 299.43,
//       originalPrice: 534.33,
//       discount: 24,
//       category: "Bag"
//     },
//     {
//       id: 2,
//       name: "Nike Air Max 270 React ENG",
//       image: "/images/img2.png",
//       currentPrice: 299.43,
//       originalPrice: 534.33,
//       discount: 24,
//       category: "Shoes"
//     },
//     {
//       id: 3,
//       name: "Nike Air Max 270 React ENG",
//       image: "/images/img3.png",
//       currentPrice: 299.43,
//       originalPrice: 534.33,
//       discount: 24,
//       category: "Bag"
//     }
//   ];

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 py-6">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-8">
//         <h2 className="text-2xl font-bold text-gray-800">Mega Sale</h2>
//         <button className="text-blue-400 hover:text-blue-600 transition-colors duration-200 text-base font-medium">
//           See More
//         </button>
//       </div>

//       {/* Products Grid - 3 products in one row */}
//       <div className="grid grid-cols-3 gap-4 lg:gap-6">
//         {megaSaleProducts.map((product) => (
//           <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
//             {/* Product Image Container */}
//             <div className="relative bg-gray-100 aspect-square p-4">
//               <img 
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-full object-contain"
//               />
//             </div>

//             {/* Product Details */}
//             <div className="p-3 lg:p-4">
//               {/* Product Title */}
//               <h3 className="text-sm lg:text-base font-medium text-gray-800 mb-2 lg:mb-3 leading-tight">
//                 MS - {product.name}
//               </h3>

//               {/* Price Section */}
//               <div className="flex flex-col space-y-1 lg:space-y-2">
//                 <div className="text-lg lg:text-xl font-bold text-blue-400">
//                   ${product.currentPrice.toFixed(2)}
//                 </div>
                
//                 <div className="flex items-center space-x-2 lg:space-x-3">
//                   <span className="text-xs lg:text-sm text-gray-400 line-through">
//                     ${product.originalPrice.toFixed(2)}
//                   </span>
//                   <span className="text-xs lg:text-sm font-medium text-red-500">
//                     {product.discount}% Off
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MegaSale;


import React from 'react';

const MegaSale = () => {
  const megaSaleProducts = [
    {
      id: 1,
      name: "Nike Air Max 270 React ENG",
      image: "/images/img1.png",
      currentPrice: 299.43,
      originalPrice: 534.33,
      discount: 24,
      category: "Bag"
    },
    {
      id: 2,
      name: "Nike Air Max 270 React ENG",
      image: "/images/img2.png",
      currentPrice: 299.43,
      originalPrice: 534.33,
      discount: 24,
      category: "Shoes"
    },
    {
      id: 3,
      name: "Nike Air Max 270 React ENG",
      image: "/images/img3.png",
      currentPrice: 299.43,
      originalPrice: 534.33,
      discount: 24,
      category: "Bag"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-gray-800">
          Mega Sale
        </h2>
        <button className="text-blue-400 hover:text-blue-600 transition-colors duration-200 text-sm font-medium">
          See More
        </button>
      </div>

      {/* Products Grid - 3 columns */}
      <div className="grid grid-cols-3 gap-4 lg:gap-6">
        {megaSaleProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            {/* Product Image Container */}
            <div className="relative bg-gray-100 p-4" style={{ aspectRatio: '1/1' }}>
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="p-3 lg:p-4">
              {/* Product Title */}
              <h3 className="text-xs lg:text-sm font-medium text-gray-800 mb-3 leading-tight line-clamp-2">
                MS - {product.name}
              </h3>

              {/* Price Section */}
              <div className="flex flex-col space-y-1">
                <div className="text-sm lg:text-base font-bold text-blue-400">
                  ${product.currentPrice.toFixed(2)}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-xs font-medium text-red-500">
                    {product.discount}% Off
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaSale;