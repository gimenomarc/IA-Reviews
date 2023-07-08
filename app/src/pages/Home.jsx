import React from 'react';
import SearchBar from '../components/SearchBar';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">¡Bienvenido a nuestra web de reseñas de productos!</h1>
      <SearchBar />
    </div>
  );
}

export default Home;