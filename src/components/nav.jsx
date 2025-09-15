import React from 'react'
import logo from '../assets/images/logo.png'

function NavBar(){
  return (
    <nav>
      <div className="pt-[16px] flex flex-row justify-center items-center gap-x-[80px] font-cute text-[30px] tracking-wide">
        <a href="#" className="text-[#fff] hover:text-[#0c6b2c] visited:text-white transition duration-200 no-underline">ABOUT</a>
        <a href="#" className="text-[#fff] hover:text-[#0c6b2c] visited:text-white transition duration-200 no-underline">PROJECTS</a>
        <img src={logo} alt="logo" className="h-[60px]"/>
        <a href="#" className="text-[#fff] hover:text-[#0c6b2c] visited:text-white transition duration-200 no-underline">BLOG</a>
        <a href="#" className="text-[#fff] hover:text-[#0c6b2c] visited:text-white transition duration-200 no-underline">RESUME</a>
      </div>
    </nav>
  )
}

export default NavBar
