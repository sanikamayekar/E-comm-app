'use client';

export default function Pagination({ currentPage = 1, totalPages = 5, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  const handlePageClick = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center items-center mt-8 space-x-1">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`
            w-12 h-12 flex items-center justify-center text-lg font-medium transition-all duration-200
            ${page === currentPage
              ? 'bg-blue-500 text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-blue-500'
            }
          `}
        >
          {page}
        </button>
      ))}
    </div>
  );
}