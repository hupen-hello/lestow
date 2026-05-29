import React from 'react';
// import Image from 'next/image'; // Agar Next Image tag use karna ho

const TopBar = () => {
  return (
    <div className="w-full bg-[#2c2c2c] py-3 px-6 md:px-27 flex items-center justify-between">
      
      {/* 1. Logo Section */}
      <div className="flex-shrink-0 cursor-pointer">
        {/* Yahan aap apne downloaded logo ka path daal dena */}
        <img 
          src="/logo.png" 
          alt="Lestow Logo" 
          className="h-12 w-auto" 
        />
      </div>

      {/* 2. Search Bar Section */}
      <div className="flex-1 max-w-3xl mx-8">
        <div className="relative flex items-center w-full h-10 rounded-md bg-white overflow-hidden">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full h-full px-4 text-gray-700 outline-none placeholder-gray-500 text-sm"
          />
          <button className="flex items-center justify-center h-full px-4 bg-white cursor-pointer">
            <svg
              className="w-5 h-5 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* 3. Buttons Section */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <button className="px-4 py-1.5 text-sm font-semibold text-white bg-transparent border border-white rounded hover:bg-white/10 transition-colors">
          List Your Company
        </button>
        <button className="px-6 py-1.5 text-sm font-semibold text-white bg-[#c61c23] rounded hover:bg-[#a5151c] transition-colors">
          Login
        </button>
      </div>

    </div>
  );
};

export default TopBar;