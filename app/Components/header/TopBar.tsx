import React from 'react';

// Props mein toggleMenu function receive kar rahe hain
const TopBar = ({ toggleMenu }: { toggleMenu?: () => void }) => {
  return (
    <div className="w-full bg-[#2c2c2c] py-3 px-4 md:px-12 flex items-center justify-between z-50 relative">
      
      {/* 1. Logo Section */}
      <div className="flex-shrink-0 cursor-pointer">
        <img 
          src="/logo.png" 
          alt="Lestow Logo" 
          className="h-9 md:h-12 w-auto" 
        />
      </div>

      {/* 2. Desktop Search Bar Section */}
      <div className="hidden md:flex flex-1 max-w-3xl mx-8">
        <div className="relative flex items-center w-full h-10 rounded-md bg-white overflow-hidden">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full h-full px-4 text-gray-700 outline-none placeholder-gray-500 text-sm"
          />
          <button className="flex items-center justify-center h-full px-4 bg-white cursor-pointer">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* 3. Buttons & Mobile Icons Section */}
      <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
        
        <button className="hidden md:block px-4 py-1.5 text-sm font-semibold text-white bg-transparent border border-white rounded hover:bg-white/10 transition-colors">
          List Your Company
        </button>
        
        <button className="px-3 py-1 md:px-6 md:py-1.5 text-[11px] md:text-sm font-semibold text-white bg-[#c61c23] rounded hover:bg-[#a5151c] transition-colors">
          Login
        </button>

        {/* Mobile Only Icons */}
        <div className="flex md:hidden items-center gap-3 text-white ml-1">
          <button aria-label="Search">
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>

          {/* Hamburger Menu Icon jisme onClick lagaya hai */}
          <button aria-label="Menu" onClick={toggleMenu} className="cursor-pointer">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

      </div>

    </div>
  );
};

export default TopBar;