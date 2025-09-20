'use client';
import { useState } from 'react';

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    hotDeals: true,
    prices: true,
    color: true,
    brand: true
  });
  const [selectedColor, setSelectedColor] = useState('blue'); // Default blue selected as shown in Figma
  const [showMoreHotDeals, setShowMoreHotDeals] = useState(false);
  const [showMoreBrands, setShowMoreBrands] = useState(false);
  const [showMoreColors, setShowMoreColors] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  // Hot Deals data - ensuring at least 6 items
  const hotDealsData = [
    { name: 'Nike', count: 2, isHighlighted: false },
    { name: 'Airmax', count: 48, isHighlighted: true },
    { name: 'Nike', count: 14, isHighlighted: false },
    { name: 'Adidas', count: 15, isHighlighted: false },
    { name: 'Vans', count: 23, isHighlighted: false },
    { name: 'All Stars', count: 1, isHighlighted: false },
    { name: 'Adidas', count: 95, isHighlighted: false },
    { name: 'Converse', count: 12, isHighlighted: false },
    { name: 'Jordan', count: 34, isHighlighted: false },
    { name: 'New Balance', count: 18, isHighlighted: false }
  ];

  // Brand data - ensuring at least 6 items
  const brandData = [
    { name: 'Nike', count: 99, isHighlighted: false },
    { name: 'Nike', count: 99, isHighlighted: true },
    { name: 'Adidas', count: 99, isHighlighted: false },
    { name: 'Siemens', count: 99, isHighlighted: false },
    { name: 'Puma', count: 87, isHighlighted: false },
    { name: 'Reebok', count: 65, isHighlighted: false },
    { name: 'Converse', count: 43, isHighlighted: false },
    { name: 'Jordan', count: 78, isHighlighted: false },
    { name: 'New Balance', count: 52, isHighlighted: false },
    { name: 'Under Armour', count: 29, isHighlighted: false }
  ];

  // Color data - ensuring at least 6 items with more options
  const colorData = [
    { name: 'blue', color: 'bg-blue-500' },
    { name: 'red', color: 'bg-red-500' },
    { name: 'black', color: 'bg-black' },
    { name: 'yellow', color: 'bg-yellow-400' },
    { name: 'pink', color: 'bg-pink-500' },
    { name: 'lightPink', color: 'bg-pink-200' },
    { name: 'green', color: 'bg-green-500' },
    { name: 'purple', color: 'bg-purple-500' },
    { name: 'orange', color: 'bg-orange-500' },
    { name: 'gray', color: 'bg-gray-500' },
    { name: 'teal', color: 'bg-teal-500' },
    { name: 'indigo', color: 'bg-indigo-500' }
  ];

  // Helper function to get visible items
  const getVisibleItems = (items, showMore, minItems = 6) => {
    if (items.length <= minItems) return items;
    return showMore ? items : items.slice(0, minItems);
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
        w-80 md:w-96 lg:w-80 xl:w-96
        bg-gray-50 min-h-screen flex flex-col
        transform transition-transform duration-300 ease-in-out z-40
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        
        {/* Hot Deals Section */}
        <div className="bg-white mx-8 mt-8 rounded-lg shadow-sm">
          <div 
            className="p-8 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors rounded-t-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-inset"
            onClick={() => toggleSection('hotDeals')}
          >
            <button
              className="flex items-center justify-between w-full text-left focus:outline-none"
              aria-expanded={expandedSections.hotDeals}
              aria-controls="hot-deals-content"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleSection('hotDeals');
                }
              }}
            >
              <h3 className="text-xl font-medium text-gray-900">Hot Deals</h3>
              <svg 
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${expandedSections.hotDeals ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="sr-only">
                {expandedSections.hotDeals ? 'Collapse Hot Deals section' : 'Expand Hot Deals section'}
              </span>
            </button>
          </div>
          
          <div
            id="hot-deals-content"
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              expandedSections.hotDeals ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
            aria-hidden={!expandedSections.hotDeals}
          >
            <div className="px-8 pb-8">
              <ul className="space-y-5" role="list">
                {getVisibleItems(hotDealsData, showMoreHotDeals).map((item, index) => (
                  <li key={index} className="flex justify-between items-center cursor-pointer hover:text-blue-500 transition-colors focus-within:bg-gray-50 rounded px-2 py-1" role="listitem">
                    <button className="flex justify-between items-center w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded">
                      <span className={`text-base ${item.isHighlighted ? 'text-blue-500 font-medium' : 'text-gray-700'}`}>
                        {item.name}
                      </span>
                      <span className={`text-base ${item.isHighlighted ? 'text-blue-400' : 'text-gray-400'}`}>
                        {item.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              {hotDealsData.length > 6 && (
                <div className="mt-4 text-center">
                  <button 
                    onClick={() => setShowMoreHotDeals(!showMoreHotDeals)}
                    className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-3 py-1"
                    aria-expanded={showMoreHotDeals}
                    aria-label={showMoreHotDeals ? 'Show fewer hot deals' : `Show ${hotDealsData.length - 6} more hot deals`}
                  >
                    {showMoreHotDeals ? 'Show Less' : `View More (${hotDealsData.length - 6} more)`}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Prices Section */}
        <div className="bg-white mx-8 mt-6 rounded-lg shadow-sm">
          <div 
            className="p-8 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors rounded-t-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-inset"
            onClick={() => toggleSection('prices')}
          >
            <button
              className="flex items-center justify-between w-full text-left focus:outline-none"
              aria-expanded={expandedSections.prices}
              aria-controls="prices-content"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleSection('prices');
                }
              }}
            >
              <h3 className="text-xl font-medium text-gray-900 tracking-wider">PRICES</h3>
              <svg 
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${expandedSections.prices ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="sr-only">
                {expandedSections.prices ? 'Collapse Prices section' : 'Expand Prices section'}
              </span>
            </button>
          </div>
          
          <div
            id="prices-content"
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              expandedSections.prices ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
            }`}
            aria-hidden={!expandedSections.prices}
          >
            <div className="px-8 pb-8">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600 text-base">Range:</span>
                <span className="font-medium text-base text-gray-900">$13.99 - $25.99</span>
              </div>
              <div className="relative" role="slider" aria-label="Price range slider" aria-valuemin="13.99" aria-valuemax="25.99" aria-valuenow="19.99" tabIndex="0">
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div 
                    className="h-3 bg-blue-500 rounded-full relative" 
                    style={{width: '70%'}}
                  >
                    <div className="absolute -left-2.5 -top-1.5 w-5 h-5 bg-blue-500 rounded-full border-3 border-white shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" tabIndex="0" role="button" aria-label="Minimum price handle"></div>
                    <div className="absolute -right-2.5 -top-1.5 w-5 h-5 bg-blue-500 rounded-full border-3 border-white shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" tabIndex="0" role="button" aria-label="Maximum price handle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Color Section */}
        <div className="bg-white mx-8 mt-6 rounded-lg shadow-sm">
          <div 
            className="p-8 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors rounded-t-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-inset"
            onClick={() => toggleSection('color')}
          >
            <button
              className="flex items-center justify-between w-full text-left focus:outline-none"
              aria-expanded={expandedSections.color}
              aria-controls="color-content"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleSection('color');
                }
              }}
            >
              <h3 className="text-xl font-medium text-gray-900 tracking-wider">COLOR</h3>
              <svg 
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${expandedSections.color ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="sr-only">
                {expandedSections.color ? 'Collapse Color section' : 'Expand Color section'}
              </span>
            </button>
          </div>
          
          <div
            id="color-content"
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              expandedSections.color ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
            aria-hidden={!expandedSections.color}
          >
            <div className="px-8 pb-8">
              <div className="flex items-center space-x-4 flex-wrap gap-y-3" role="group" aria-label="Color selection">
                {getVisibleItems(colorData, showMoreColors).map((colorItem, index) => (
                  <button
                    key={index}
                    onClick={() => handleColorSelect(colorItem.name)}
                    className={`w-10 h-10 rounded-full cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${colorItem.color} ${
                      selectedColor === colorItem.name 
                        ? 'ring-3 ring-offset-3 ring-blue-500' 
                        : 'hover:ring-3 hover:ring-offset-3 hover:ring-gray-300'
                    }`}
                    aria-label={`Select ${colorItem.name} color`}
                    aria-pressed={selectedColor === colorItem.name}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleColorSelect(colorItem.name);
                      }
                    }}
                  />
                ))}
              </div>
              {colorData.length > 6 && (
                <div className="mt-4 text-center">
                  <button 
                    onClick={() => setShowMoreColors(!showMoreColors)}
                    className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-3 py-1"
                    aria-expanded={showMoreColors}
                    aria-label={showMoreColors ? 'Show fewer colors' : `Show ${colorData.length - 6} more colors`}
                  >
                    {showMoreColors ? 'Show Less' : `View More Colors (${colorData.length - 6} more)`}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Brand Section */}
        <div className="bg-white mx-8 mt-6 rounded-lg shadow-sm flex-1">
          <div 
            className="p-8 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors rounded-t-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-inset"
            onClick={() => toggleSection('brand')}
          >
            <button
              className="flex items-center justify-between w-full text-left focus:outline-none"
              aria-expanded={expandedSections.brand}
              aria-controls="brand-content"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleSection('brand');
                }
              }}
            >
              <h3 className="text-xl font-medium text-gray-900 tracking-wider">BRAND</h3>
              <svg 
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${expandedSections.brand ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="sr-only">
                {expandedSections.brand ? 'Collapse Brand section' : 'Expand Brand section'}
              </span>
            </button>
          </div>
          
          <div
            id="brand-content"
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              expandedSections.brand ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
            aria-hidden={!expandedSections.brand}
          >
            <div className="px-8 pb-8">
              <ul className="space-y-5" role="list">
                {getVisibleItems(brandData, showMoreBrands).map((item, index) => (
                  <li key={index} className="flex justify-between items-center cursor-pointer hover:text-blue-500 transition-colors focus-within:bg-gray-50 rounded px-2 py-1" role="listitem">
                    <button className="flex justify-between items-center w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded">
                      <span className={`text-base ${item.isHighlighted ? 'text-blue-500 font-medium' : 'text-gray-700'}`}>
                        {item.name}
                      </span>
                      <span className={`text-base ${item.isHighlighted ? 'text-blue-400' : 'text-gray-400'}`}>
                        {item.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              {brandData.length > 6 && (
                <div className="mt-4 text-center">
                  <button 
                    onClick={() => setShowMoreBrands(!showMoreBrands)}
                    className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-3 py-1"
                    aria-expanded={showMoreBrands}
                    aria-label={showMoreBrands ? 'Show fewer brands' : `Show ${brandData.length - 6} more brands`}
                  >
                    {showMoreBrands ? 'Show Less' : `View More Brands (${brandData.length - 6} more)`}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* More Button */}
        <div className="p-8 text-center">
          <button className="text-xl font-medium text-gray-900 hover:text-blue-500 transition-colors tracking-wider">
            MORE
          </button>
        </div>
      </div>
    </>
  );
}