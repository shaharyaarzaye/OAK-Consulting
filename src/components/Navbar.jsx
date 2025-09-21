import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Close the dropdown when the mobile menu is toggled
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navLinkClasses = "relative text-zinc-200 hover:text-white transition-colors duration-300 " +
    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-zinc-50 " +
    "after:transition-all after:duration-300 hover:after:w-full";

  const mobileNavLinkClasses = "text-xl text-gray-800 hover:text-blue-700 transition-colors duration-300 " +
    "relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-700 " +
    "after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="flex items-center justify-between px-4 py-5 bg-gray-900 md:px-3">
      {/* Logo and title */}
      <div className="flex items-center gap-5 text-2xl font-bold text-white">
        <img src="/logo.jpg" alt="logo" className='h-10 rounded-full' />
        <h1 className='font-mono'>OAK Consulting</h1>
      </div>

      {/* Hamburger Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>

      {/* Desktop Links */}
      <ul className="hidden space-x-6 md:flex">
        <li className='text-center'><a href="#" className={`text-[1rem] ${navLinkClasses}`}>Home</a></li>
        <li className='relative text-center'>
          <button onClick={toggleDropdown} className={`text-[1rem] hover:cursor-pointer ${navLinkClasses} flex items-center`}>
            Qustions ?
            <svg className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-48 bg-gray-800 rounded-lg shadow-xl py-2 z-20">
              <a href="#whoweare" className="block px-4 py-2 text-zinc-200 hover:bg-gray-700 hover:text-white transition-colors duration-200" onClick={() => setIsDropdownOpen(false)}>Who We Are ?</a>              
              <a href="#whatwedo" className="block px-4 py-2 text-zinc-200 hover:bg-gray-700 hover:text-white transition-colors duration-200" onClick={() => setIsDropdownOpen(false)}>What We Do ?</a>
              <a href="#whyoak" className="block px-4 py-2 text-zinc-200 hover:bg-gray-700 hover:text-white transition-colors duration-200" onClick={() => setIsDropdownOpen(false)}>Why OAK ?</a>
            </div>
          )}
        </li>
        <li className='text-center'><a href="#ourroots" className={`text-[1rem] ${navLinkClasses}`}>Our Roots</a></li>
        <li className='text-center'><a href="#ourteam" className={`text-[1rem] ${navLinkClasses}`}>Our Team</a></li>
        {/* Solutions Dropdown */}
        <li className='text-center'><a href="#ourreach" className={`text-[1rem] ${navLinkClasses}`}>Our Reach</a></li>
        <li className='text-center'><a href="#clients" className={`text-[1rem] ${navLinkClasses}`}>Clients</a></li>
        <li className='text-center'><a href="#testimonials" className={`text-[1rem] ${navLinkClasses}`}>Testimonials</a></li>
        <li className='text-center'><a href="#recognition" className={`text-[1rem] ${navLinkClasses}`}>Recognition</a></li>
        <li className='text-center'><a href="#contact" className={`text-[1rem] ${navLinkClasses}`}>Contact Us</a></li>
      </ul>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-10 bg-gray-100 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex items-center justify-end px-4 py-5">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-4 text-center mt-10">
          <li><a href="#" className={mobileNavLinkClasses} onClick={toggleMenu}>Home</a></li>
          <li><a href="#whoweare" className={mobileNavLinkClasses} onClick={toggleMenu}>Who We Are</a></li>
          <li><a href="#ourroots" className={mobileNavLinkClasses} onClick={toggleMenu}>Our Roots</a></li>
          <li><a href="#ourteam" className={mobileNavLinkClasses} onClick={toggleMenu}>Our Team</a></li>
          {/* Solutions links within the mobile menu */}
          <li><a href="#whatwedo" className={mobileNavLinkClasses} onClick={toggleMenu}>What We Do</a></li>
          <li><a href="#whyoak" className={mobileNavLinkClasses} onClick={toggleMenu}>Why OAK ?</a></li>
          <li><a href="#ourreach" className={mobileNavLinkClasses} onClick={toggleMenu}>Our Reach</a></li>
          <li><a href="#clients" className={mobileNavLinkClasses} onClick={toggleMenu}>Clients</a></li>
          <li><a href="#testimonials" className={mobileNavLinkClasses} onClick={toggleMenu}>Testimonials</a></li>
          <li><a href="#recognition" className={mobileNavLinkClasses} onClick={toggleMenu}>Recognition</a></li>
          <li><a href="#contact" className={mobileNavLinkClasses} onClick={toggleMenu}>Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
