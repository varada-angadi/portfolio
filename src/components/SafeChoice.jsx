import React, { useState } from 'react';

const SafeChoice = () => {
  const [isJustVideo, setJustVideo] = useState(false);
  const overlayVideo = "/videos/scOverlay.mp4";      // initial video with overlay
  const fullScreenVideo = "/videos/SafeChoice.mp4"; 

  const handleToggle = () => {
    setJustVideo(!isJustVideo);
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden" onClick={handleToggle}>
      
      {/* Video */}
      <video
        src={isJustVideo ? fullScreenVideo : overlayVideo}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500
          ${isJustVideo
            ? 'max-w-[90%] max-h-[90%] object-contain z-10'
            : 'min-w-full min-h-full object-cover z-10'}`}
        style={!isJustVideo ? { filter: 'brightness(0.6)' } : {}}
        loop
        muted
        autoPlay
        playsInline
      />

      {/* Exit / Demo Images */}
      <img
        src="/images/exit.png"
        alt="Click to exit"
        className={`absolute left-[100px] top-[150px] w-[250px] h-[270px] z-30 transition-opacity duration-300
          ${isJustVideo ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      <img
        src="/images/demo.png"
        alt="Click to watch demo"
        className={`absolute right-[100px] top-[150px] w-[200px] h-[220px] z-30 transition-opacity duration-300
          ${!isJustVideo ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Project Logo */}
      <img
        src='/images/sc.png'
        className={`absolute left-[30px] bottom-[155px] w-[186px] h-[40px] z-30 transition-opacity duration-300
          ${!isJustVideo ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Project Title & GitHub */}
      <div className={`absolute bottom-[52px] left-[30px] z-20 flex flex-col transition-opacity duration-300
          ${!isJustVideo ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <p className='font-poppins text-[50px] font-bold leading-[1.1]'>
          SafeChoice - Carcinogens Risk Awareness Platform
        </p>

        <button
          className='absolute bottom-[-15px] w-[150px] h-[50px] border-2 rounded-[20px] flex items-center justify-center'
          style={{ backgroundColor: 'black', borderColor: 'white' }}
        >
          <p className="text-[#0C6B2C] font-poppins text-center font-bold text-[32px]">
            <a
        href="https://github.com/varada-angadi/SafeChoice"
        className="hover:text-[#8DA563] transition-colors"
        style={{color:"#0C6B2C",textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer"
      >GitHub</a>
            
          </p>
        </button>
      </div>
    </div>
  );
};

export default SafeChoice;
