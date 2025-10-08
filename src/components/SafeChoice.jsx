import React, { useState } from 'react';

const SafeChoice = () => {
  const overlayVideo = "/videos/scOverlay.mp4";      // initial video with overlay
  const fullScreenVideo = "/videos/SafeChoice.mp4"; 

  // Var that tracks demo playing or not
    const [isJustVideo, setJustVideo] = useState(false);
  
    // Var that tracks if the video loaded or not
    const [videoLoaded, setVideoLoaded] = useState(false);

  const handleToggle = () => {
    setJustVideo(!isJustVideo);
  };

  return (
    <div className="relative w-full h-[calc(100vh+20px)] flex justify-center items-center overflow-hidden" onClick={handleToggle}>
      {/*Project Video */}
      <video
        src={isJustVideo ? fullScreenVideo : overlayVideo}
        onLoadedData={() => setVideoLoaded(true)}
        poster="/images/scPoster.png"
        className={`transition-all duration-500
          ${isJustVideo
            ? 'max-w-[90%] max-h-[90%] object-contain z-10'
            : 'min-w-full min-h-full object-cover z-10'}`}
        style={!isJustVideo ? { filter: 'brightness(0.6)' } : {}}
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
          <img src='/images/sc.png'
            className="absolute bottom-[17%] sm:bottom-[21%] md:bottom-[21%] left-[2%] 
            w-[186px] h-[40px] z-20"/>
          
          {/* Project Title & GitHub */}
          <div className="absolute bottom-[5%] left-[2%] items-start z-20 flex flex-col space-y-[16px]" >
            <p className='text-2xl sm:text-3xl md:text-5xl font-bold leading-[1.1]'>
              SafeChoice - Carcinogens Risk Awareness Platform
            </p>

          {/* Gitbut Link Button */}
          <button className='w-[120px] h-[40px] sm:w-[150px] sm:h-[50px] md:w-[150px] md:h-[50px] border-2 rounded-[20px] flex items-center justify-center'
            style={{ backgroundColor: 'black', borderColor: 'white' }}>
            <p className="text-center font-bold text-2xl sm:text-3xl md:text-4xl">
            <a href="https://github.com/varada-angadi/SafeChoice"
              className="hover:text-[#8DA563] transition-colors"
              style={{color:"#0C6B2C",textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer">
                GitHub
            </a> 
          </p>
        </button>

      </div>
      </>)}
    </div>
  );
};

export default SafeChoice;
