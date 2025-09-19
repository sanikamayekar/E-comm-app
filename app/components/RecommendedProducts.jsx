import React from 'react';

const RecommendedProducts = () => {
  const recommendedProducts = [
    {
      id: 1,
      name: "Nike Air Max 270 React ENG",
      image: "/images/img4.png", // Blue Nike sneaker
      currentPrice: 299.43,
      originalPrice: 534.33,
      discount: 24,
      rating: 5,
      category: "Shoes"
    },
    {
      id: 2,
      name: "Nike Air Max 270 React ENG",
      image: "/images/img5.png", // Red bag
      currentPrice: 299.43,
      originalPrice: 534.33,
      discount: 24,
      rating: 5,
      category: "Bag"
    },
    {
      id: 3,
      name: "Nike Air Max 270 React ENG",
      image: "/images/img6.png", // Light colored bag/wallet
      currentPrice: 299.43,
      originalPrice: 534.33,
      discount: 24,
      rating: 5,
      category: "Accessories"
    },
    {
      id: 4,
      name: "Nike Air Max 270 React ENG",
      image: "/images/img7.png", // Red Nike sneaker
      currentPrice: 299.43,
      originalPrice: 534.33,
      discount: 24,
      rating: 5,
      category: "Shoes"
    }
  ];

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center space-x-1 mb-2">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${
              index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      {/* Header Banner */}
      <div className="relative mb-6 rounded-lg overflow-hidden">
        <div 
          className="bg-gradient-to-r from-gray-800 to-red-900 text-white px-6 py-8 md:px-8 md:py-10"
          style={{
            backgroundImage: `url('/images/recommended-bg.png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            minHeight: '200px'
          }}
        >
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-1">Recommended</h2>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Product</h2>
            <p className="text-gray-200 text-sm md:text-base">We recommend the best for you</p>
          </div>
          {/* Decorative elements overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-6 right-10 w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="absolute top-12 right-16 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute bottom-8 right-12 w-3 h-3 bg-red-400 rounded-full"></div>
          </div>
        </div>
      </div>
 
      {/* Products Grid - 2x2 Layout */}
      <div className="grid grid-cols-2 gap-4">
        {recommendedProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
            {/* Product Image Container */}
            <div className="relative bg-gray-50 p-8" style={{ aspectRatio: '3/2', minHeight: '100px' }}>
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
 
            {/* Product Details */}
            <div className="p-4">
              {/* Product Title */}
              <h3 className="text-sm font-medium text-gray-800 mb-2 leading-tight">
                {product.name}
              </h3>
 
              {/* Star Rating */}
              <StarRating rating={product.rating} />
 
              {/* Price Section */}
              <div className="flex flex-col space-y-2">
                <div className="text-lg font-bold text-blue-400">
                  ${product.currentPrice.toFixed(2)}
                </div>
                                 
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-sm font-medium text-red-500">
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

export default RecommendedProducts;