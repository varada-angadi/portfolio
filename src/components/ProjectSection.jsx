import React from 'react';

const Project=()=>{
  return(
    <div>
      <div className="relative w-full h-[calc(100vh-20px)] flex justify-center items-center overflow-hidden">
        <video src="/videos/NotJustChiller.mp4"
          className="w-[450px] h-full object-cover object-center relative z-10"
          loop muted autoPlay playsInline/>

          <div className="absolute inset-0 bg-black opacity-100 z-20"></div>
      </div>



</div>


  )
}
export default Project