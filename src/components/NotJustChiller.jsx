import React, {useState} from 'react';

const NotJustChillar = () => {

  const [isJustVideo, setJustVideo] = useState(false);
  const overlayVideo = "/videos/njcOverlay.mp4";      // initial video with overlay
  const fullScreenVideo = "/videos/NotJustChiller.mp4"; 

  const handleToggle = () => {
    setJustVideo(!isJustVideo);
  };

  return (


    <div className="relative w-full h-[calc(100vh+20px)] flex justify-center items-center overflow-hidden" onClick={handleToggle}>
  {/* Video */}
  <video 
    src={isJustVideo ? fullScreenVideo : overlayVideo}
    className={`transition-all duration-500
    ${isJustVideo
      ? 'relative w-[450px] h-[calc(100vh-20px)] mx-auto object-fit justify-center'
      :'absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover z-10'
    }`}
    loop
    muted
    autoPlay
    playsInline
  />

{isJustVideo && (
    <img
      src="/images/exit.png"
      alt="Click to exit"
      className="absolute left-[100px] top-[150px] w-[250px] h-[270px] z-30"
    />
  )}

  {/* Click hint for fullscreen video */}
  {!isJustVideo && (
    <img
      src="/images/demo.png"
      alt="Click to watch demo"
      className="absolute right-[100px] top-[150px] w-[250px] h-[270px] z-30"
    />
  )}

  {/* Text overlay at bottom-left */}
  {!isJustVideo && (
        <>
  <div className="absolute bottom-[140px] left-[30px] z-20 mb-">
    <p className="font-[Iceland] text-white text-[30px] leading-[0px] tracking-[2px] text-center">
      notjust
    </p>
    <p className="font-[Oxanium] text-[#8DA563] text-[30px] leading-[0px] font-bold tracking-[2px]">
      CH₹LLAR
    </p>
  </div>


{/* Project title and GitHub button */}

<div className="absolute bottom-[52px] left-[30px] z-20 flex flex-col" >
  <p className='font-poppins text-[50px] font-bold leading-[1.1]'>
    NotJustChillar - Student Finance Tracker
  </p>

  <button
  className='absolute bottom-[-15px] w-[150px] h-[50px] border-2 rounded-[20px] flex items-center justify-center'
  style={{ backgroundColor: 'black', borderColor: 'white' }}
>
  <p className="font-poppins text-center font-bold text-[32px]">
    <a
        href="https://github.com/varada-angadi/NotJustChiller"
        className="hover:text-[#8DA563] transition-colors"
        style={{color:"#0C6B2C", textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer"
      >GitHub</a>
    
  </p>
</button>
</div>
        </>
      )}

</div>




  );
};

export default NotJustChillar;
