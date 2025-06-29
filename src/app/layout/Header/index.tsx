'use client';

import { Layers2, Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import SearchBar from './SearchBar';
const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const HandleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  return (
    <div
      className={`min-w-393 px-16 py-20 flex justify-between lg:items-center shadow-2xs shadow-neutral-300 absolute top-0 left-0 right-0 ${
        isMenuActive ? 'h-screen bg-white' : 'h-64'
      }`}
    >
      {/* Logo */}
      <div className='flex gap-6'>
        <Layers2 />
        <div>Your Logo</div>
      </div>

      {/* Search Bar */}

      <SearchBar />
      {/* Menu Bar */}
      <div
        className={`${
          isMenuActive ? 'block' : 'hidden'
        } flex flex-col gap-16 absolute text-center left-0 right-0 top-1/6`}
      >
        <div>
          <button className='border-b-2 border-blue-400 text-blue-400'>
            Login
          </button>
        </div>
        <div>
          <button className='h-44 min-w-214 bg-blue-400 rounded-full text-white'>
            Register
          </button>
        </div>
      </div>

      {/* Icons */}
      <div className='flex justify-between gap-24 lg:hidden'>
        <Search />
        <Menu
          onClick={HandleMenu}
          className={`${isMenuActive ? 'hidden' : 'block'}`}
        />
        <X
          onClick={HandleMenu}
          className={`${isMenuActive ? 'block' : 'hidden'}`}
        />
      </div>
    </div>
  );
};

export default Header;
