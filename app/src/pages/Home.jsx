import React from 'react';
import SearchBar from '../components/SearchBar';

function Home({ darkMode }) {
  return (
    <div className={`flex flex-col items-center justify-center h-screen ${darkMode ? 'dark' : 'light'}`}>
      <h1 className={`text-4xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-black'}`}>
        <span className="font-apple">IA-Reviews</span>
        <br />
        <span className="text-base mt-4">¡Bienvenido a nuestra web de reseñas de productos!</span>
      </h1>
      <SearchBar />
    </div>
  );
}

export default Home;