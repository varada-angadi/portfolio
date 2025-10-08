"use client";
import { useRef, useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";


export default function AboutIntro() {

  // Element tracker for More about..
  const ref = useRef(null);

  // Scroll progress tracker for More about..
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  // Based on scroll progress opacity change
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Based on the scroll progress size change
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.7]);

  // Element tracker for About Section..
  const sectionRef = useRef(null);

  // Scroll progress tracker for About Section..
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      const scrollProgress = Math.max(0, Math.min(
          1,(windowHeight - sectionTop) / (sectionHeight + windowHeight)));

      setProgress(scrollProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Content fade-in
  const contentOpacity = progress > 0.35 ? Math.min(1, (progress - 0.35) / 0.25) : 0;

  // Image subtle zoom
  const imageScale = 1 + Math.min(0.1, (progress - 0.35) * 0.2); // max 1.1x zoom

  // Text smooth upward slide
  const textTranslate = progress > 0.35 ? 30 - Math.min(30, (progress - 0.35) * 120) : 30;

  return (
    <>
      {/* Project section heading */}
        <section ref={ref} className="relative h-[120vh]">
          <motion.div style={{ opacity, scale }} className="sticky top-0 h-screen flex items-center justify-center">
            <p className="font-bold font-poppins text-5xl sm:text-6xl md:text-7xl text-center leading-normal">
              More About <br />
              <span className="tracking-[5px] sm:tracking-[8px] md:tracking-[10px]">VARADA ANGADI</span>
            </p>
          </motion.div>
        </section>

      {/* About Section */}
      <section ref={sectionRef} className="w-full h-[calc(100vh+20px)] flex items-center justify-center z-20 px-4 mb-32 md:mb-16 lg:mb-6">
        <div className="flex flex-col md:flex-row w-full max-w-6xl items-center justify-between gap-10">
    
        {/* Left Side Image */}
        <div style={{ opacity: contentOpacity, transform: `scale(${imageScale})`, transition: "transform 0.3s ease-out",}}
        className="w-full md:w-1/2 flex justify-center">
          <img src="/images/img.png" alt="Varada Angadi" className="w-[14rem] sm:w-[18rem] md:w-[20rem] h-auto object-cover rounded-xl shadow-2xl"/>
        </div>

        {/* Right Side About Text */}
        <div style={{opacity: contentOpacity, transform: `translateY(${textTranslate}px)`, transition: "transform 0.3s ease-out",}}
        className="w-full md:w-1/2 max-w-lg text-gray-100 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl md:text-[36px] text-white leading-tight font-poppins mb-4">
            About Me
          </h3>

          <div className="text-[16px] sm:text-[18px] leading-relaxed font-poppins tracking-[1px] font-thin space-y-4">
            <p>Hi, I’m Varada, a software developer with technical interests in Java, SQL, and operating systems.</p>
            <p>I’m drawn to work that balances logic with emotion. But what excites me the most is the process of solving real problems and the immense joy of seeing it all come together.</p>
            <p>I chase calm in organizing, cooking, and caring for my plants. I’m not perfect at painting, photography or embroidery but I love the process because creating, in any form, makes life lighter.</p>
          </div>

          {/* Button */}
          <div className="mt-6 flex justify-center md:justify-start mb-6">
            <button className="w-[180px] h-[50px] border-2 rounded-[20px] flex items-center justify-center"
              style={{ backgroundColor: "#070707", borderColor: "white" }}>
              <a
                href=""
                className="text-[#0C6B2C] text-center font-bold text-[16px] sm:text-[18px] font-poppins hover:text-[#8DA563] transition-colors"
                target="_blank"
                rel="noopener noreferrer">
                Beyond the Code
              </a>
            </button>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
