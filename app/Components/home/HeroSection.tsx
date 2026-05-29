'use client'; 

import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="w-full min-h-[380px] bg-[#1a1a1a] bg-no-repeat bg-cover bg-center flex items-center relative overflow-hidden px-6 md:px-12 lg:px-26 "
      style={{ backgroundImage: `url('/bg-hero.webp')` }}
    >
      {/* 3. Left Content Area - Text & Search */}
      <div className="flex-1 max-w-[650px] relative z-10 py-20">
        
        {/* Main Heading Text */}
        <h1 className="text-white text-5xl md:text-3xl font-bold leading-tight mb-12">
          Powerful Digital <br /> IT-Solution & Services Around The World
        </h1>

        {/* Search & Find Area */}
        <div className="flex flex-col md:flex-row items-center gap-4 bg-white/5 p-2 rounded-lg">
          
          {/* Select Your Service... Input Block */}
          <div className="relative flex-1 w-full h-14 bg-white rounded-md border border-gray-200">
            <input
              type="text"
              placeholder="Select Your Service..."
              className="w-full h-full px-6 text-sm text-gray-900 placeholder:text-gray-500 outline-none"
            />
            {/* Simple Downward Triangle caret icon matching screenshot */}
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 text-sm">▼</span>
          </div>

          {/* Enter Location Input Block with Icon */}
          <div className="relative flex-1 w-full h-14 bg-gray-100/90 rounded-md border border-gray-200 flex items-center gap-2">
            {/* Location SVG Icon from screenshot */}
            <div className="pl-6 flex-shrink-0">
              <svg
                className="w-5 h-5 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>
            {/* Actual Input Field */}
            <input
              type="text"
              placeholder="Enter Location"
              className="w-full h-full pr-6 text-sm text-black placeholder:text-gray-600 bg-transparent outline-none"
            />
          </div>

          {/* Red Find Button */}
          <button className="flex-shrink-0 w-full md:w-auto h-14 px-8 bg-[#c61c23] text-white text-lg font-semibold rounded-md hover:bg-opacity-95 transition-all">
            Find
          </button>
        </div>

      </div>

    </section>
  );
};

export default HeroSection;