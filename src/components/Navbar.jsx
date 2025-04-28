import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { CgProfile } from 'react-icons/cg';
import { CartContext } from './CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [showMenu, setShowMenu] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (loginStatus === 'true' && savedUser) {
      setIsLoggedIn(true);
      setUser(savedUser);
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  }, []);

  const toggleMenu = () => setShowMenu(!showMenu);

  const changeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    navigate('/');
    window.location.reload();
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-md py-2 fixed w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <NavLink to="/">Exclusive</NavLink>
        </div>

        {/* Hamburger icon - mobile */}
        <div className="md:hidden text-2xl text-white" onClick={toggleMenu}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/"
            className="relative inline-block text-white px-4 py-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="relative inline-block px-4 py-2 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </NavLink>

          <NavLink
            to="/product"
            className="relative inline-block px-4 py-2 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Product
          </NavLink>

          <NavLink
            to="/contact"
            className="relative inline-block px-4 py-2 text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </NavLink>


          <input
            type="search"
            placeholder="Search..."
            className="hidden sm:block px-3 py-1.5 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#222] text-sm text-white"
          />

          <select
            value={language}
            onChange={changeLanguage}
            className="bg-[#222] text-white border border-gray-600 rounded-md px-2 py-1 text-sm"
          >
            <option value="EN">EN</option>
            <option value="UZ">UZ</option>
            <option value="RU">RU</option>
          </select>

          {/* Cart */}
          <NavLink to="/cart" className="text-white flex gap-1 hover:text-green-400 text-xl relative">
            <FaShoppingCart />
            {totalCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {totalCount}
              </span>
            )}
          </NavLink>

          {/* Auth button */}
          {isLoggedIn ? (
            <div className="flex items-center gap-2 text-white">
              <NavLink to="/account" className="flex items-center gap-1 hover:text-green-400">
                <CgProfile className="text-xl" />
                <span>{user?.name}</span>
              </NavLink>
              <button
                onClick={handleLogout}
                className="text-sm bg-red-600 px-2 py-1 rounded hover:bg-red-700 ml-2"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink to="/register" className="flex items-center gap-2 nav-link text-white">
              <CgProfile className="text-xl" />
              <span>Register</span>
            </NavLink>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-6 space-y-4 absolute w-full top-16 left-0 z-40 transition-all duration-500 ease-in-out ${showMenu ? 'translate-y-0 opacity-100' : '-translate-y-96 opacity-0 pointer-events-none'
          }`}
      >
        <NavLink onClick={toggleMenu} to="/" className="block nav-link">Home</NavLink>
        <NavLink onClick={toggleMenu} to="/about" className="block nav-link">About</NavLink>
        <NavLink onClick={toggleMenu} to="/product" className="block nav-link">Product</NavLink>
        <NavLink onClick={toggleMenu} to="/contact" className="block nav-link">Contact</NavLink>
        <NavLink onClick={toggleMenu} to="/cart" className="flex items-center gap-2 nav-link">

          <FaShoppingCart className="text-xl" />
          Cart ({totalCount})
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to="/account" className="flex items-center gap-2 nav-link">
              <CgProfile className="text-xl" />
              {user?.name}
            </NavLink>
            <button onClick={handleLogout} className="text-sm bg-red-600 px-2 py-1 rounded hover:bg-red-700 ml-2">Logout</button>
          </>
        ) : (
          <NavLink to="/register" className="flex items-center gap-2 nav-link">
            <CgProfile className="text-xl" />
            Register
          </NavLink>
        )}
        <select
          value={language}
          onChange={changeLanguage}
          className="bg-[#222] text-white border border-gray-600 rounded-md px-2 py-1 text-sm w-full"
        >
          <option value="EN">EN</option>
          <option value="UZ">UZ</option>
          <option value="RU">RU</option>
        </select>
      </div>
    </header>
  );
};

export default Navbar;
