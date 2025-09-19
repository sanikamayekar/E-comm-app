

'use client';
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import products from "../data/products";

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('name');
  const [itemsPerPage, setItemsPerPage] = useState(12);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 px-6 py-6">
          {/* Product Banner */}
          <div 
            className="rounded-2xl p-8 mb-8 flex items-center justify-between text-white relative overflow-hidden"
            style={{ backgroundColor: '#40BFFF' }}
          >
            <div className="z-10">
              <h1 
                className="mb-3"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  fontSize: '30px',
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}
              >
                Adidas Men Running
              </h1>
              <h1 
                className="mb-4"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  fontSize: '30px',
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}
              >
                Sneakers
              </h1>
              <p 
                className="mb-6 opacity-90"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  lineHeight: '150%'
                }}
              >
                Performance and design. Taken right to the edge.
              </p>
              <span 
                className="underline cursor-pointer hover:opacity-80 transition-opacity duration-200"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.5px'
                }}
              >
                SHOP NOW
              </span>
            </div>
            <div className="relative z-10">
              <img
                src="/images/shoe.png"
                alt="Adidas Running Sneaker"
                className="w-80 h-auto transform rotate-12"
              />
            </div>
          </div>

          {/* Sorting and Controls */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-gray-600 font-medium">
              {products.length} Items
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 font-medium">Sort By</span>
                <div className="relative">
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
                  >
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
              
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 font-medium">Show</span>
                <div className="relative">
                  <select 
                    value={itemsPerPage} 
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
                  >
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

              {/* Grid/List Toggle */}
              <div className="flex items-center space-x-1">
                <button className="p-2.5 text-blue-500 bg-blue-50 rounded transition-colors duration-200">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="3" width="7" height="7" rx="1"/>
                    <rect x="14" y="3" width="7" height="7" rx="1"/>
                    <rect x="3" y="14" width="7" height="7" rx="1"/>
                    <rect x="14" y="14" width="7" height="7" rx="1"/>
                  </svg>
                </button>
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

          {/* Product Grid */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {products
              .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
              .map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            }
          </div>

          {/* Pagination */}
          <Pagination 
            currentPage={currentPage} 
            totalPages={Math.ceil(products.length / itemsPerPage)}
            onPageChange={setCurrentPage}
          />
        </main>
      </div>

      <Footer />
    </div>
  );
}