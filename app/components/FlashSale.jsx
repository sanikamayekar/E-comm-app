// // components/FlashSale.jsx
// import ProductCard from "./ProductCard";

// const flashSaleProducts = [
//   {
//     id: 1,
//     name: "Nike Air Max 270 React",
//     price: 534.33,
//     discountPrice: 299.43,
//     discountPercent: 44,
//     ratingValue: 4.5,
//     ratingCount: 124,
//     isHot: true,
//     colors: ["#EF4444", "#3B82F6", "#1F2937"],
//     category: "Nike",
//     imageUrl: "/images/image11.png",
//   },
//   {
//     id: 2,
//     name: "Quilted Maxi Cross Bag",
//     price: 534.33,
//     discountPrice: 299.43,
//     discountPercent: 24,
//     ratingValue: 4.2,
//     ratingCount: 89,
//     isHot: true,
//     colors: ["#78350F", "#FFFFFF"],
//     category: "Bags",
//     imageUrl: "/images/image22.png",
//   },
//   {
//     id: 3,
//     name: "Nike Air Max Red",
//     price: 534.33,
//     discountPrice: 299.43,
//     discountPercent: 24,
//     ratingValue: 4.0,
//     ratingCount: 156,
//     isHot: true,
//     colors: ["#EF4444", "#FFFFFF"],
//     category: "Nike",
//     imageUrl: "/images/image33.png",
//   },
// ];

// const FlashSale = () => {
//   return (
//     <div className="mb-10">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-bold">Flash Sale</h2>
//         <button className="text-gray-500 hover:text-black">See More &gt;</button>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {flashSaleProducts.map((product) => (
//           <ProductCard key={product.id} product={product} prefix="FS" />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FlashSale;



import React from 'react';

const FlashSale = () => {
  const flashSaleProducts = [
    {
      id: 1,
      name: "Nike Air Max 270 React",
      price: 534.33,
      discountPrice: 299.43,
      discountPercent: 24,
      ratingValue: 4.5,
      ratingCount: 124,
      colors: ["#EF4444", "#3B82F6", "#1F2937"],
      category: "Nike",
      imageUrl: "/images/image11.png",
    },
    {
      id: 2,
      name: "QUILTED MAXI CROS",
      price: 534.33,
      discountPrice: 299.43,
      discountPercent: 24,
      ratingValue: 4.2,
      ratingCount: 89,
      colors: ["#78350F", "#FFFFFF"],
      category: "Bags",
      imageUrl: "/images/image22.png",
    },
    {
      id: 3,
      name: "Nike Air Max Red",
      price: 534.33,
      discountPrice: 299.43,
      discountPercent: 24,
      ratingValue: 4.0,
      ratingCount: 156,
      colors: ["#EF4444", "#FFFFFF"],
      category: "Nike",
      imageUrl: "/images/image33.png",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-3 h-3 ${
          index < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300 fill-current'
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-gray-800">
          Flash Sale
        </h2>
        <button className="text-blue-400 hover:text-blue-600 transition-colors duration-200 text-sm font-medium">
          See More
        </button>
      </div>

      {/* Products Grid - 3 columns */}
      <div className="grid grid-cols-3 gap-4 lg:gap-6">
        {flashSaleProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            {/* Product Image Container */}
            <div className="relative bg-gray-50 p-4" style={{ aspectRatio: '1/1' }}>
              <img 
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="p-3 lg:p-4">
              {/* Product Title */}
              <h3 className="text-xs lg:text-sm font-medium text-gray-800 mb-2 leading-tight line-clamp-2">
                FS - {product.name}
              </h3>

              {/* Star Rating */}
              <div className="flex items-center space-x-1 mb-2">
                {renderStars(product.ratingValue)}
              </div>

              {/* Price Section */}
              <div className="flex flex-col space-y-1">
                <div className="text-sm lg:text-base font-bold text-blue-400">
                  ${product.discountPrice.toFixed(2)}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 line-through">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-xs font-medium text-red-500">
                    {product.discountPercent}% Off
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

export default FlashSale;