import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/portfolio_logo.png';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', link: '/'  },
    { id: 2, text: 'About', link: '/#about' },
    { id: 3, text: 'Skills', link: '/#exp' },
    { id: 4, text: 'Technologies', link: '/#serv' },
    { id: 5, text: 'Certifications', link: '/Certificates' },
    { id: 6, text: 'Contact', link: '/Contact' },
  ];

  return (
    <div className='bg-gray-800 flex justify-between sticky items-center h-20 w-full mx-auto px-4 text-white'>
      {/* Logo */}
      <div className='w-full text-3xl'>
        <img className='rounded-lg' width={150} src={logo} alt="Not Found" />
      </div>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            <a href={item.link}>{item.text}</a>

          </li>
        ))}
        <li className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300'>
        <a href="/Hireme" className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl hover:text-white">
          HireMe
        </a>
        </li>
      </ul>

     

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-fit border-r border-r-gray-900 bg-gray-800 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        {/* <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1> */}
        <div className='w-full text-3xl p-2'>
          <img className='rounded-lg' width={100} src={logo} alt="Not Found" />
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
        <li className='p-3 border-b rounded-xl hover:bg-[#00df9a] duration-300  cursor-pointer border-gray-600'>
        <a href="/Hireme" className="px-2 py-2 bg-orange-500 shadow rounded-full text-1xl hover:text-white">
          Hire-Me
        </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;