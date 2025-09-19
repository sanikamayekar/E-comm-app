// import Image from "next/image";

// const CategoryGrid = () => {
//   const categories = [
//     { name: "Man Shirt", image: "/images/category1.png" },
//     { name: "Dress", image: "/images/category2.png" },
//     { name: "Woman Bag", image: "/images/category3.png" },
//     { name: "Man Shoes", image: "/images/category4.png" },
//   ];

//   return (
//     <div className="mb-10">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-base md:text-lg font-bold text-gray-900">Category</h2>
//         <button className="text-sm font-medium text-blue-500 hover:text-blue-600">
//           More Category
//         </button>
//       </div>

//       {/* Categories */}
//       <div className="grid grid-cols-4 gap-4 md:gap-6">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center group"
//           >
//             {/* Circle Icon */}
//             <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-gray-200 flex items-center justify-center mb-2 group-hover:shadow-md transition">
//               <Image
//                 src={category.image}
//                 alt={category.name}
//                 width={40}
//                 height={40}
//                 className="object-contain"
//               />
//             </div>
//             {/* Category Name */}
//             <h3 className="text-sm md:text-base font-medium text-gray-700">
//               {category.name}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryGrid;


import React from 'react';

const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      name: "Man Shirt",
      icon: "/images/category1.png",
      color: "#40BFFF"
    },
    {
      id: 2,
      name: "Dress",
      icon: "/images/category2.png",
      color: "#FB7181"
    },
    {
      id: 3,
      name: "Woman Bag",
      icon: "/images/category3.png",
      color: "#FFC833"
    },
    {
      id: 4,
      name: "Man Shoes",
      icon: "/images/category4.png",
      color: "#53D1B6"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-gray-800">
          Category
        </h2>
        <button className="text-blue-400 hover:text-blue-600 transition-colors duration-200 text-sm font-medium">
          More Category
        </button>
      </div>

      {/* Categories Grid - 4 columns */}
      <div className="grid grid-cols-4 gap-4 lg:gap-6">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity">
            {/* Icon Container */}
            <div 
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center mb-3"
              style={{ backgroundColor: `${category.color}20` }}
            >
              <div 
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: category.color }}
              >
                <img 
                  src={category.icon} 
                  alt={category.name}
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 object-contain filter brightness-0 invert"
                />
              </div>
            </div>
            
            {/* Category Name */}
            <span className="text-xs text-gray-500 text-center font-medium">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;