"use client";
import React, {useRef,useState} from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";


const NotJustChillar = () => {


  // Element tracker
  const ref = useRef(null);

  // Scroll progress tracker
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  // Based on scroll progress opacity change
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Based on the scroll progress size change
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.7]);


  // Var that tracks demo playing or not
  const [isJustVideo, setJustVideo] = useState(false);

  // Var that tracks if the video loaded or not
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  //Initial Video
  const overlayVideo = "/videos/njcOverlay.mp4"; 
  
  // Demo video
  const fullScreenVideo = "/videos/NotJustChiller.mp4"; 

  // Switches between videos
  const handleToggle = () => {
    setJustVideo(!isJustVideo);
  };

  return (
    <>
    {/* Project section heading */}
    <section ref={ref} className="relative h-[120vh]">
      <motion.div style={{ opacity, scale }} className="sticky top-0 h-screen flex items-center justify-center">
        <p className="font-bold font-poppins text-5xl sm:text-6xl md:text-7xl text-center leading-normal">
          PROJECTS BY <br />
          <span className="tracking-[5px] sm:tracking-[8px] md:tracking-[10px]">VARADA ANGADI</span>
        </p>
      </motion.div>
    </section>
    

    <div className="relative w-full h-[calc(100vh+20px)] flex justify-center items-center overflow-hidden" onClick={handleToggle}>
      {/* Project Video */}
      <video 
        src={isJustVideo ? fullScreenVideo : overlayVideo}
        onLoadedData={() => setVideoLoaded(true)}
        poster="/images/njcPoster.png"
        className={`transition-all duration-500

        ${isJustVideo
          ? 'relative lg:w-[450px] w-full h-[calc(100vh-20px)] mx-auto object-fit justify-center'
          :'absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover z-10'}`}
        loop muted autoPlay playsInline/>

        {/* Loading element */}
        {!videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-3xl sm:text-4xl md:text-5xl font-poppins">Loading video...</p>
        </div> )}

        {/* Click hint to exit demo */}
        {isJustVideo && (
          <img src="/images/exit.png" alt="Click to exit" className="absolute left-[5%] top-[15%] w-[150px] sm:w-[180px] md:w-[250px] z-30"/>)}

        {/* Click hint to watch demo */}
        {!isJustVideo && (
          <img src="/images/demo.png" alt="Click to watch demo" className="absolute right-[5%] top-[15%] w-[150px] sm:w-[180px] md:w-[250px] h-auto z-30"></img>)}

        {/* Text overlay at bottom-left */}
        {!isJustVideo && (
        <>
          {/* Project Logo */}
          <div className="absolute bottom-[17%] sm:bottom-[21%] md:bottom-[21%] left-[2%] z-20">
            <p className="font-[Iceland] text-white text-2xl md:text-3xl text-center leading-[1]">
              notjust
            </p>
            <p className="font-[Oxanium] text-[#8DA563] text-2xl md:text-3xl font-bold leading-[1]">
              CH₹LLAR
            </p>
          </div>


          {/* Project title and GitHub button */}
          <div className="absolute bottom-[5%] left-[2%] items-start z-20 flex flex-col space-y-[16px]" >
            <p className='text-2xl sm:text-3xl md:text-5xl font-bold leading-[1.1]'>
              NotJustChillar - Student Finance Tracker
            </p>

            {/* Gitbut Link Button */}
            <button className='w-[120px] h-[40px] sm:w-[150px] sm:h-[50px] md:w-[150px] md:h-[50px] border-2 rounded-[20px] flex items-center justify-center'
            style={{ backgroundColor: 'black', borderColor: 'white' }}>
              <p className="text-center font-bold text-2xl sm:text-3xl md:text-4xl">
                <a href="https://github.com/varada-angadi/NotJustChiller"
                  className="hover:text-[#8DA563] transition-colors"
                  style={{color:"#0C6B2C", textDecoration: "none" }} 
                  target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
              </p>
            </button>

          </div>
        </> )}
    </div>
  </>
 );
};

export default NotJustChillar;
