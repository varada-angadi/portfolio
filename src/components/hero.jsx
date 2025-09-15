import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
import AnimateOnLoad from './fade';

function Hero() {
  return (
    <div className="pt-[48px] text-center ">

      <AnimateOnLoad
        delay={250}
        initialClasses="opacity-0 translate-y-[-20px]"
        animateClasses="opacity-100 translate-y-0"
        transitionClasses="transition-all duration-700 ease-out">
      <p className='text-[50px] font-vt '>$cat intro.txt</p>
      </AnimateOnLoad>

      <AnimateOnLoad
        delay={500}
        initialClasses="opacity-0 translate-y-[-20px]"
        animateClasses="opacity-100 translate-y-0"
        transitionClasses="transition-all duration-700 ease-out">
      <h1 className='text-[65px] leading-[20px] font-poppins'>WELCOME TO</h1>
      </AnimateOnLoad>


      <AnimateOnLoad
        delay={750}
        initialClasses="opacity-0 translate-y-[-20px]"
        animateClasses="opacity-100 translate-y-0"
        transitionClasses="transition-all duration-700 ease-out">
      <h1 className='text-[75px] leading-[20px] font-poppins tracking-[10px]'>VARADA’S</h1>
      </AnimateOnLoad>

      <AnimateOnLoad
        delay={1000}
        initialClasses="opacity-0 translate-y-[-20px]"
        animateClasses="opacity-100 translate-y-0"
        transitionClasses="transition-all duration-700 ease-out">
      <p className='text-[100px] font-vt pt-[28px]'>
      <Typewriter
          words={[
            "Development Playground",
            "Codebase Hub",
            "Digital Creations",
            
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={80}
          delaySpeed={2000}
        />
        </p>
        </AnimateOnLoad>

    </div>
  )
}

export default Hero
