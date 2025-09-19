"use client";

export default function FilterPanel() {
  return (
    <div className="flex justify-between items-center mb-8">
      {/* Items Count */}
      <div className="text-gray-600 font-medium text-base">
        13 Items
      </div>
      
      {/* Controls Section */}
      <div className="flex items-center space-x-8">
        {/* Sort By Dropdown */}
        <div className="flex items-center space-x-3">
          <span className="text-gray-600 font-medium text-base">Sort By</span>
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 font-medium text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer">
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popularity">Popularity</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-gray-500">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Show Dropdown */}
        <div className="flex items-center space-x-3">
          <span className="text-gray-600 font-medium text-base">Show</span>
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 font-medium text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer">
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="48">48</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-gray-500">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* View Toggle Buttons */}
        <div className="flex items-center space-x-1">
          {/* Grid View Button (Active) */}
          <button className="p-2.5 text-blue-500 bg-blue-50 rounded transition-colors duration-200">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
          </button>
          
          {/* List View Button (Inactive) */}
          <button className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded transition-colors duration-200">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6"/>
              <line x1="8" y1="12" x2="21" y2="12"/>
              <line x1="8" y1="18" x2="21" y2="18"/>
              <line x1="3" y1="6" x2="3.01" y2="6"/>
              <line x1="3" y1="12" x2="3.01" y2="12"/>
              <line x1="3" y1="18" x2="3.01" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}