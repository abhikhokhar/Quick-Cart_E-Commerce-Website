import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

 
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false); // Close the menu on link click
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-2 sm:px-8 bg-transparent z-50">
      <button
        id="menu-toggle"
        className="sm:hidden text-violet-900 focus:outline-none"
        onClick={toggleMobileMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <img src="logo.png" alt="Logo" className="w-32 h-auto" />

      <div className="middle flex items-center px-2 sm:px-20 flex-grow">
        <div className="search_box hidden ml-4 sm:flex items-center border border-gray-400 rounded-[20px] w-full max-w-2xl sm:max-w-xl">
          <a href="/search_page.html" className="flex items-center w-full">
            <input
              className="flex-grow h-8 sm:h-10 bg-transparent px-2 sm:px-3 w-52 focus:outline-none rounded-l-[20px]"
              type="text"
              placeholder="Search for products, brands, or categories"
            />
            <button className="flex items-center justify-center w-9 h-8 sm:w-14 sm:h-10 hover:bg-gray-200 rounded-r-[20px]">
              <img className="w-5 h-5 sm:w-6 sm:h-6" src="search.png" alt="Search Icon" />
            </button>
          </a>
        </div>

      

        <div className="relative items-center justify-center ml-2 hidden sm:block">
          <div className="absolute inset-0 bg-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <img
            className="w-6 h-6 sm:w-8 sm:h-7 cursor-pointer hover:bg-gray-200 rounded-full p-1 transition duration-300 z-10"
            src="voice_search.png"
            alt="Voice Search"
          />
        </div>
      </div>

      <nav id="menu" className="space-x-8 hidden sm:flex mr-16">
  <NavLink
    to="/"
    className={({ isActive }) =>
        `font-medium text-2xl ${
          isActive
            ? "text-teal-700"
            : "text-violet-800"
        }`
      }
  >
    Home
  </NavLink>
  <NavLink
    to="/shop"
    className={({ isActive }) =>
        `font-medium text-2xl ${
          isActive
            ? "text-yellow-500"
            : "text-violet-800"
        }`
      }
  >
    Shop
  </NavLink>
  <NavLink
    to="/Coffee"
    className={({ isActive }) =>
      `font-medium text-2xl ${
        isActive
          ? "text-yellow-500"
          : "text-violet-800"
      }`
    }
  >
    Dark Coffees
  </NavLink>
  <NavLink
    to="/offers"
    className={({ isActive }) =>
        `font-medium text-2xl ${
          isActive
            ? "text-yellow-500 "
            : "text-violet-800"
        }`
      }
  >
    Offers
  </NavLink>
</nav>

<NavLink to="/cart">
  <button className="relative flex items-center bg-gradient-to-r from-purple-500 to-violet-900 text-white text-lg font-bold font-sans px-8 py-3 rounded-full shadow-lg hover:from-purple-600 hover:to-violet-800 transition-all duration-300">
    My Cart
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 ml-2 text-white group-hover:text-yellow-400 transition duration-300"
    >
      <path d="M3 4h2l3.6 7.59L5.25 15.04A2 2 0 007 18h12v-2H7.42a.5.5 0 01-.42-.23l1.1-2h7a1 1 0 00.92-.62l3.24-7.24A1 1 0 0018.76 4H5.21l-.94-2H1v2h2z" />
    </svg>
  </button>
</NavLink>

      
      <div
  id="mobile-menu"
  className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-violet-100 to-purple-200 shadow-lg transform z-50 transition-transform duration-300 ${
    isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>
  <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-purple-600 to-violet-800 text-white">
    <h2 className="text-xl font-bold">Menu</h2>
    <button
      id="close-menu"
      className="text-white focus:outline-none"
      onClick={toggleMobileMenu}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6 hover:text-violet-300"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
  <nav className="mt-4">
    <NavLink
      to="/"
      className="flex items-center text-violet-900 py-4 px-6 font-medium text-lg hover:bg-gradient-to-r from-purple-400 to-violet-600 hover:text-white rounded-lg"
      onClick={handleLinkClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 mr-3 text-purple-700 hover:text-white"
      >
        <path d="M12 3L2 12h3v9h6v-6h2v6h6v-9h3L12 3z" />
      </svg>
      Home
    </NavLink>

    <NavLink
      to="/shop"
      className="flex items-center text-violet-900 py-4 px-6 font-medium text-lg hover:bg-gradient-to-r from-purple-400 to-violet-600 hover:text-white rounded-lg"
      onClick={handleLinkClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 mr-3 text-purple-700 hover:text-white"
      >
        <path d="M20 7H4v10a4 4 0 004 4h8a4 4 0 004-4V7zm-6 8a2 2 0 11-4 0h4zm3-8H7V4h10v3z" />
      </svg>
      Shop
    </NavLink>

    <NavLink
      to="/ladies"
      className="flex items-center text-violet-900 py-4 px-6 font-medium text-lg hover:bg-gradient-to-r from-purple-400 to-violet-600 hover:text-white rounded-lg"
      onClick={handleLinkClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 mr-3 text-purple-700 hover:text-white"
      >
        <path d="M12 2a4 4 0 014 4 4 4 0 01-1 2.586V10h2v2h-2v2h-2v-2H9v2H7v-2H5v-2h2V8.586A4 4 0 0112 2z" />
      </svg>
      Women's Fashion
    </NavLink>
    <NavLink
      to="/coffee"
      className="flex items-center text-violet-900 py-4 px-6 font-medium text-lg hover:bg-gradient-to-r from-purple-400 to-violet-600 hover:text-white rounded-lg"
      onClick={handleLinkClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 mr-3 text-purple-700 hover:text-white"
      >
        <path d="M18 8h2a2 2 0 010 4h-2v2a6 6 0 11-12 0V4h12v4zm-2 0H8v6a4 4 0 108 0V8z" />
      </svg>
      Dark Coffees
    </NavLink>


    <NavLink
      to="/offers"
      className="flex items-center text-violet-900 py-4 px-6 font-medium text-lg hover:bg-gradient-to-r from-purple-400 to-violet-600 hover:text-white rounded-lg"
      onClick={handleLinkClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 mr-3 text-purple-700 hover:text-white"
      >
        <path d="M19 13h-6v6h6v-6zm1-8h-2V3H6v2H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2zm0 14H4V7h16v12z" />
      </svg>
      Offers
    </NavLink>

    <NavLink
      to="/cart"
      className="flex items-center text-violet-900 py-4 px-6 font-medium text-lg hover:bg-gradient-to-r from-purple-400 to-violet-600 hover:text-white rounded-lg"
      onClick={handleLinkClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 mr-3 text-purple-700 hover:text-white"
      >
        <path d="M3 4h2l3.6 7.59L5.25 15.04A2 2 0 007 18h12v-2H7.42a.5.5 0 01-.42-.23l1.1-2h7a1 1 0 00.92-.62l3.24-7.24A1 1 0 0018.76 4H5.21l-.94-2H1v2h2z" />
      </svg>
      My Cart
    </NavLink>

    <NavLink
      to="/business"
      className="flex items-center text-violet-900 py-4 px-6 font-medium text-lg hover:bg-gradient-to-r from-purple-400 to-violet-600 hover:text-white rounded-lg"
      onClick={handleLinkClick}
    >
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 mr-3 text-purple-700 hover:text-white"
      >
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
      QuickCart Business
    </NavLink>

  </nav>
</div>

    </header>
    
  );
}

export default Header;
