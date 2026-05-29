import React from 'react';
import TopBar from './TopBar';
import NavMenu from './NavMenu';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full flex flex-col shadow-[0_15px_30px_-10px_rgba(255,255,255,0.5)]">
      <TopBar/>
      <NavMenu/>
    </header>
  );
};

export default Header;