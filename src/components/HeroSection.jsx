import React from "react";
import { Typewriter } from "react-simple-typewriter";
import fingerprint from "/images/fingerprint.gif";
import globe from "/images/globe.gif";
import terminal from "/images/terminal.gif";

function HeroSection() {
  return (
    <div className=" w-full min-h-screen flex justify-center items-center text-center overflow-hidden">
      
      {/* Floating Elements */}

      {/* Fingerprint element */}
      <img
        src={fingerprint}
        alt="Fingerprint"
        className="absolute top-[10%] left-[5%] sm:left-[8%] md:left-[10%] lg:left-[12%] 
        h-[80px] sm:h-[80px] md:h-[100px] lg:h-[120px] z-0 opacity-70"
      />

      {/* Globe element */}
      <img
        src={globe}
        alt="Globe"
        className="absolute bottom-[10%] right-[5%] sm:right-[8%] md:right-[10%] lg:right-[12%] 
        h-[80px] sm:h-[80px] md:h-[100px] lg:h-[120px] z-0 opacity-70"
      />

      {/* Code terminal */}
      <img
        src={terminal}
        alt="Terminal Top"
        className="absolute top-[2%] right-[0%] h-[120px] sm:h-[160px] md:h-[140px] lg:h-[160px] opacity-75 z-0"
      />
      <img
        src={terminal}
        alt="Terminal Bottom"
        className="absolute bottom-[0%] left-[2%] h-[140px] sm:h-[120px] md:h-[140px] lg:h-[160px] opacity-75 z-0 rotate-180"
      />

      {/* Text element*/}
      <div className="hidden lg:block opacity-70 absolute top-[30%] right-[10%] 
      w-[200px] h-[40px] border-2 border-[#fff] rounded-[20px] flex items-center justify-center">
        <p className="text-[#0C6B2C] font-vt text-center text-[24px]">
          Raw Data-&gt;Insights
        </p>
      </div>

      {/* Bottom-left box */}
      <div className="hidden lg:block opacity-70 absolute top-[60%] left-[10%] 
      w-[140px] h-[40px] border-2 border-[#fff] rounded-[20px] flex items-center justify-center">
        <p className="text-[#0C6B2C] font-vt text-center text-[24px]">
          Developer
        </p>
      </div>

      {/* Hero Text */}
      <div className="z-10 space-y-4 px-4 sm:px-8">
        <p className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-vt mb-12">
          $cat intro.txt
        </p>
        <p className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-poppins font-bold leading-[0]">
          WELCOME TO
        </p>
        <p className="text-[50px] sm:text-[65px] md:text-[75px] lg:text-[85px] tracking-[6px] md:tracking-[10px] font-poppins">
          VARADA’S
        </p>
        <p className="text-[50px] sm:text-[60px] md:text-[85px] lg:text-[100px] font-vt leading-[1]">
          <Typewriter
            words={["Development Playground", "Codebase Hub", "Digital Creations"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={80}
            delaySpeed={2000}
          />
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
