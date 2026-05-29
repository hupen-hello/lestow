'use client'; // State use karne ke liye ise client component banayenge

import React, { useState } from 'react';
import TopBar from './TopBar';
import NavMenu from './NavMenu';

const Header = () => {
  // Mobile menu open/close check karne ka state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col shadow-[0_15px_30px_-10px_rgba(255,255,255,0.5)]">
      {/* TopBar ko toggle function pass kar rahe hain */}
      <TopBar toggleMenu={toggleMobileMenu} />
      {/* NavMenu ko bata rahe hain ki menu open hai ya close */}
      <NavMenu isMobileMenuOpen={isMobileMenuOpen} />
    </header>
  );
};

export default Header;