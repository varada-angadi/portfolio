import React, {useState} from 'react'
import { HiMenu, HiX } from "react-icons/hi";

  

function NavBar(){
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-transparent z-[999]">
      {/* Main div */}
      <div className="pt-4 md:pt-8 flex justify-center items-center gap-16 text-xl tracking-wide">

        {/* Default div */}
        <div className="hidden md:flex gap-16">
            {/* About */}
            {/*<a href="#" className="text-[#fff] hover:text-[#0c6b2c] visited:text-white transition duration-200 no-underline">ABOUT</a>*/}

            {/* Projects */}
            <a href="#projects" className="text-[#fff] hover:text-[#0c6b2c] visited:text-white font-oxanium transition duration-200 no-underline">PROJECTS</a>

            {/* Logo */}
            {/*<img src={logo} alt="logo" className="h-[60px]"/>*/}
            <a href="#projects" className="text-[#fff] visited:text-white no-underline font-megrim text-[24px]">VARADA</a>

            {/* Blog */}
            {/*<a href="#" className="text-[#fff] hover:text-[#0c6b2c] visited:text-white transition duration-200 no-underline">BLOG</a>*/}

            {/* Resume */}
            <a href="/VaradaAngadi_Resume.pdf"  target="_blank" rel="noopener noreferrer"
            className="text-[#fff] hover:text-[#0c6b2c] visited:text-white transition font-oxanium duration-200 no-underline">RESUME</a>
        </div>
      
        {/* Mobile menu button */}
        <div className="md:hidden flex justify-center my-4">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            {menuOpen ? <HiX size={28}/>: <HiMenu size={28} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        // Main div
        <div className="md:hidden bg-[#0D1A11] flex flex-col items-center gap-4 py-8 z-[1000]">
          
          

          {/* Logo */}
          <a href="#projects" className="text-white font-megrim text-[24px] hover:text-[#0c6b2c] transition" onClick={() => setMenuOpen(false)}>
            VARADA
          </a>

          {/* Project */}
          <a href="#projects" className="text-white font-oxanium hover:text-[#0c6b2c] transition" onClick={() => setMenuOpen(false)}>
            PROJECTS
          </a>
          
          {/* Resume */}
          <a href="/files/VaradaAngadi_Resume.pdf" target="_blank" rel="noopener noreferrer"
            className="text-white font-oxanium hover:text-[#0c6b2c] transition" onClick={() => setMenuOpen(false)}>
            RESUME
          </a>

        </div>
      )}

    </nav>
  )
}

export default NavBar
