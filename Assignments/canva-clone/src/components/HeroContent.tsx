
import React from 'react';

const HeroContent = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
      <h1 className="font-playfair-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
        A new era of imagination
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl">
        Design anything, publish anywhere. Bring your ideas to life with CanvaClone's intuitive platform.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <button className="bg-white text-black font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
          Start designing for free
        </button>
        <button className="bg-black bg-opacity-20 text-white font-bold py-3 px-8 rounded-full border border-white border-opacity-30 shadow-lg hover:bg-opacity-30 transition duration-300">
          Explore our launches
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
