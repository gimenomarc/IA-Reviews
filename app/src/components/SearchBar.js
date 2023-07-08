import React from 'react';

function SearchBar() {
  return (
    <div className="flex items-center justify-center mt-10">
      <input
        type="text"
        placeholder="Buscar productos..."
        className="py-2 px-4 w-96 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="ml-2 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
