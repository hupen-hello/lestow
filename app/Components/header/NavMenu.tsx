'use client';

import React, { useState, useEffect, useRef } from 'react';

// isMobileMenuOpen prop receive kar rahe hain
const NavMenu = ({ isMobileMenuOpen }: { isMobileMenuOpen?: boolean }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>('Pr Agency');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { name: 'Home', hasDropdown: false },
    { name: 'Developer', hasDropdown: true },
    { name: 'App Developers', hasDropdown: true },
    { name: 'Digital Marketing', hasDropdown: true },
    { name: 'Pr Agency', hasDropdown: true, dropdownItems: [
      'Pr Agency', 'Digital Strategy', 'Content Markting', 'Advertising Agency', 'Market Research'
    ]},
    { name: 'Staffing', hasDropdown: true },
    { name: 'Tourism', hasDropdown: true },
    { name: 'Services', hasDropdown: true },
    { name: 'Traders', hasDropdown: true },
    { name: 'Design', hasDropdown: true },
  ];

  return (
    <div className="w-full relative">
      
      {/* ========================================= */}
      {/* DESKTOP MENU (Mobile par hide ho jayega)  */}
      {/* ========================================= */}
      <nav className="hidden md:flex w-full bg-white border-b border-gray-100 z-40 relative">
        <div className="max-w-[1920px] mx-auto flex items-center justify-center space-x-12 py-3.5 px-12 text-sm font-medium">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              <button
                onClick={() => item.hasDropdown ? setActiveDropdown(activeDropdown === item.name ? null : item.name) : null}
                className="flex items-center space-x-1 text-black cursor-pointer hover:text-red-700 transition-colors"
              >
                <span>{item.name}</span>
                {item.hasDropdown && (
                  <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>

              {/* Desktop Dropdown Panel */}
              {item.name === activeDropdown && item.dropdownItems && (
                <div ref={dropdownRef} className="absolute top-full left-0 mt-3.5 w-[220px] bg-white border border-gray-100 shadow-xl z-50 rounded-b-md">
                  {item.dropdownItems.map((subItem, index) => (
                    <a
                      href="#"
                      key={subItem}
                      className={`block px-5 py-3 text-black text-sm font-medium hover:bg-gray-50 transition-colors ${index === 0 ? 'border-t-4 border-[#c61c23]' : ''}`}
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

      {/* ========================================= */}
      {/* MOBILE MENU (Jab toggle true hoga tabhi dikhega) */}
      {/* ========================================= */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-0 left-0 w-full bg-white shadow-xl z-50 border-t border-gray-100 max-h-[70vh] overflow-y-auto">
          <div className="flex flex-col">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between py-3.5 px-6 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
              >
                {/* Text color slightly dark blueish-black as per your screenshot */}
                <span className="text-[15px] font-medium text-[#002b5e]">{item.name}</span>
                
                {/* '+' icon for items that have a dropdown */}
                {item.hasDropdown && (
                  <span className="text-2xl text-black font-semibold leading-none mb-1">+</span>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}

    </div>
  );
};

export default NavMenu;