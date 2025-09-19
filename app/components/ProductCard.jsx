export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg p-3 sm:p-4 relative hover:shadow-md transition-shadow duration-200 border border-gray-100">
      {/* HOT Badge */}
      {product.isHot && (
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
          HOT
        </div>
      )}
      
      <div className="relative mb-3 sm:mb-4 flex items-center justify-center h-32 sm:h-40 bg-gray-50 rounded">
        <img 
          src={product.imageUrl || `/images/image${product.id}.png`}
          alt={product.name}
          className="w-full h-full object-contain p-2"
        />
      </div>
      
      <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 sm:mb-2 line-clamp-2">
        {product.name}
      </h3>
      
      <div className="flex items-center mb-2 sm:mb-3">
        <div className="flex space-x-0.5">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              className="w-3 h-3 sm:w-3.5 sm:h-3.5"
              viewBox="0 0 24 24"
              fill={i < Math.floor(product.ratingValue || 4) ? "#FCD34D" : "#E5E7EB"}
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <span className="text-xs text-gray-500 ml-1">({product.reviewCount || 120})</span>
      </div>
      
      <div className="flex flex-wrap items-center gap-1 sm:gap-2">
        <span className="text-base sm:text-lg font-bold text-blue-500">
          ${product.discountPrice?.toFixed(2) || "299.43"}
        </span>
        <span className="text-xs sm:text-sm text-gray-400 line-through">
          ${product.price?.toFixed(2) || "534.33"}
        </span>
        <span className="text-xs sm:text-sm text-red-500 font-medium bg-red-50 px-1.5 py-0.5 rounded">
          {product.discountPercent || "24"}% Off
        </span>
      </div>

      <button className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm sm:text-base transition-colors">
        Add to Cart
      </button>
    </div>
  );
}