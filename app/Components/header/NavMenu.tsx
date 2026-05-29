'use client'; // Kyunki hum state aur dropdown close karne ke liye client-side logic use karenge

import React, { useState, useEffect, useRef } from 'react';

const NavMenu = () => {
  // State to manage active dropdown. Keeping 'Pr Agency' open by default to match screenshot.
  const [activeDropdown, setActiveDropdown] = useState<string | null>('Pr Agency');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Function to close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    { name: 'Home', hasDropdown: false },
    { name: 'Developer', hasDropdown: true },
    { name: 'App Developers', hasDropdown: true },
    { name: 'Digital Marketing', hasDropdown: true },
    { name: 'Pr Agency', hasDropdown: true, dropdownItems: [
      'Pr Agency',
      'Digital Strategy',
      'Content Markting', // Retaining spelling from screenshot
      'Advertising Agency',
      'Market Research'
    ]},
    { name: 'Staffing', hasDropdown: true },
    { name: 'Tourism', hasDropdown: true },
    { name: 'Services', hasDropdown: true },
    { name: 'Traders', hasDropdown: true },
    { name: 'Design', hasDropdown: true },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 z-40 relative lg:px-26">
      <div className="max-w-[1920px] mx-auto flex items-center justify-center space-x-8 py-2.5 text-sm font-medium">
        {menuItems.map((item) => (
          <div key={item.name} className="relative group">
            <button
              onClick={() => item.hasDropdown ? setActiveDropdown(activeDropdown === item.name ? null : item.name) : null}
              className="flex items-center space-x-1 text-black cursor-pointer hover:text-red-700 transition-colors"
            >
              <span>{item.name}</span>
              {item.hasDropdown && (
                <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>

            {/* Dropdown Panel */}
            {item.name === activeDropdown && item.dropdownItems && (
              <div ref={dropdownRef} className="absolute top-full left-0 mt-3.5 w-[220px] bg-white border border-gray-100 shadow-xl z-50 rounded-b-md">
                {item.dropdownItems.map((subItem, index) => (
                  <a
                    href="#"
                    key={subItem}
                    className={`block px-5 py-3 text-black text-sm font-medium hover:bg-gray-50 transition-colors
                      ${index === 0 ? 'border-t-4 border-[#c61c23]' : ''} // Red active line from screenshot
                    `}
                  >
                    {subItem}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavMenu;