import React, { useState } from 'react';

function SearchBar() {
  const [url, setUrl] = useState('');
  const [resumen, setResumen] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3001/producto?url=${encodeURIComponent(url)}`);
      const data = await response.json();
      setResumen(data.resumen);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="py-2 px-4 w-72 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
      <button
        onClick={handleSearch}
        className="ml-[-1px] py-2 px-4 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-shrink-0"
      >
        Generate Review
      </button>
      {resumen && <p>{resumen}</p>}
    </div>
  );
}

export default SearchBar;