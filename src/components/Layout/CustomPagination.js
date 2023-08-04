import React from "react";
const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  return (
    <div className="flex justify-center items-center mt-8">
      <button
        style={currentPage === 1 ? { pointerEvents: "none", opacity: 0.5 } : {}}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-2 border border-gray-300 rounded-l-md"
      >
        Previous
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`px-3 py-2 border-t border-b border-gray-300 ${
            currentPage === pageNumber ? "bg-blue-500 text-white" : ""
          }`}
        >
          {pageNumber}
        </button>
      ))}
      <button
        style={
          currentPage === totalPages
            ? { pointerEvents: "none", opacity: 0.5 }
            : {}
        }
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-2 border border-gray-300 rounded-r-md"
      >
        Next
      </button>
    </div>
  );
};
export default CustomPagination;
