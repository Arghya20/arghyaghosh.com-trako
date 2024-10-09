import React from 'react'

import logo from '../Trako-logo.png';


const Header = () => {
  return (
    <header className="fixed w-full bg-black bg-opacity-50 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
         <img src={logo} alt="logo" className='w-1/12'/>
          <span className="text-xl font-bold text-white">Trako</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#features" className="text-gray-300 hover:text-green-400 transition duration-300">Features</a></li>
            <li><a href="#download" className="text-gray-300 hover:text-green-400 transition duration-300">Download</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header