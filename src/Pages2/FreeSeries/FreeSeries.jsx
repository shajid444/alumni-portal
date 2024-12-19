import React from "react";

const FreeSeries = () => {

  
  return (
    <section className="w-full bg-gradient-to-r from-pink-500 to-purple-600 p-8 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">ACCESS ALL OUR ORIGINAL SERIES FOR FREE</h2>
          <p className="mb-4">You are just one step away from thousands of unique stories.</p>
          <button className="bg-black px-4 py-2 rounded">Discover Now</button>
        </div>
        {/* Image placeholder */}
        <div className="grid grid-cols-4 gap-2 md:w-1/2 mt-6 md:mt-0">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="w-full h-32 bg-gray-300 animate-pulse"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeSeries;
