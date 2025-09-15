// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaDownload, FaArrowUp} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {

  const scrollToTop = () => {
  window.scrollTo({
    top: 0, // or a little negative to account for navbar
    behavior: "smooth"
  });
}; 
  return (
    <footer className="text-center" style={{paddingTop:"40px",paddingBottom:"0px"}}>
     <img src="/images/logo.png" className="w-[80px] h-[60px] " />
     <p className="font-poppins text-2xl font-bold leading-[1.1] pb-8">Reach out — I’d love to hear from you!</p>


  <div className="flex justify-center gap-8 items-center" style={{gap:"30px"}}>
      {/* Email */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=varadaangadi203@gmail.com" 
        className="font-oxanium text-xl font-bold leading-[1.1] no-underline " 
        style={{color: "white", textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail className="w-[32px] h-[32px]"/>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/varada-angadi"
        className="text-white text-3xl hover:text-[#8DA563] transition-colors"
        style={{color: "white", textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="w-[32px] h-[32px]"/>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/varada-angadi"
        className="text-white text-3xl hover:text-[#8DA563] transition-colors"
        style={{color: "white", textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="w-[32px] h-[32px]"/>
      </a>
    </div>

    <div className="relative flex items-center justify-between px-[4px]">

  <p onClick={scrollToTop}  className="cursor-pointer font-oxanium text-sm font-bold leading-[2]" style={{color: "white", textDecoration: "none" }}>
    <FaArrowUp className="w-[12px] h-[12px] px-[10px]"/>Back To Top</p>
      
      <a href="/files/VaradaAngadi_Resume.pdf"  target="_blank" rel="noopener noreferrer" 
      className="font-oxanium text-sm font-bold leading-[2]" style={{color: "white", textDecoration: "none" }}>
        <FaDownload className="w-[12px] h-[12px] px-[10px]"/>Resume</a>
    </div>

    </footer>
  );
}
