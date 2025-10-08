// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { LuFileText } from "react-icons/lu";

export default function Footer() {

  return (
    <footer className="text-center font-poppins mt-6 mb-6">
     <p className="text-xl md:text-3xl lg:text-3xl leading-[50px] md:leading-[60px] lg:leading-[80px]">Thanks for scrolling</p>
     <p className="text-xl sm:text-2xl md:text-4xl font-bold pb-6">Reach out — I’d love to hear from you!</p>

    <div className="flex justify-center gap-8 items-center pb-6">
      {/* Email */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=varadaangadi203@gmail.com" 
        style={{color: "white", textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer">
        <MdEmail className="w-8 md:w-8 lg:w-12 h-8 md:h-8 lg:h-12"/>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/varada-angadi"
        style={{color: "white", textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer">
        <FaGithub className="w-8 md:w-8 lg:w-12 h-8 md:h-8 lg:h-12"/>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/varada-angadi"
        style={{color: "white", textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer">
        <FaLinkedin className="w-8 md:w-8 lg:w-12 h-8 md:h-8 lg:h-12"/>
      </a>

      {/* LinkedIn */}
      <a
        href="/files/VaradaAngadi_Resume.pdf"
        style={{color: "white", textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer">
        <LuFileText  className="w-8 md:w-8 lg:w-12 h-8 md:h-8 lg:h-12"/>
      </a>

    </div>

    </footer>
  );
}
