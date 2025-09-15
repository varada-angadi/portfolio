import React from 'react';
import NavBar from './components/nav';
import Hero from './components/hero';
import fingerprint from './assets/images/fingerprint.gif';
import globe from './assets/images/globe.gif';
import terminal from './assets/images/terminal.gif';
import AnimateOnLoad from './components/fade';
import NotJustChillar from './components/NotJustChiller';
import SafeChoice from './components/SafeChoice';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className='min-h-screen w-full'>

      <AnimateOnLoad
        delay={100}
        initialClasses="opacity-0 translate-y-[-20px]"
        animateClasses="opacity-100 translate-y-0"
        transitionClasses="transition-all duration-700 ease-out">
      <NavBar/>
      </AnimateOnLoad>

      
      
      <div className='pt-[28px]'>
        <section id='home'>
      <Hero/>
       </section>
      </div>

     

        <img
        src={fingerprint}
        alt="Fingerprint Scan"
        className="absolute top-1/8 left-[100px] h-[100px] w-auto z-0 opacity-75"/>

      <img
        src={globe}
        alt="Cyber Globe"
        className="absolute bottom-1/8 right-[100px] h-[100px] w-auto z-0 opacity-75" />

      <img
        src={terminal}
        alt="Terminal Output"
        className="absolute top-[10px] right-[0px] h-[160px] w-auto z-0 opacity-75"/>

      <img
        src={terminal}
        alt="Terminal Output"
        className="absolute bottom-[10px] left-[0px] h-[160px] w-auto z-0 opacity-75 rotate-[180deg]"/>

      <div className='absolute top-2/5 right-1/8 w-[200px] h-[50px] border-2 boreder-[#fff] rounded-[20px] flex items-center justify-center  '>
        <p className="text-[#0C6B2C] font-vt text-center text-[24px]">Raw Data-&gt;Insights</p>
      </div>
        
      <div className='absolute top-3/5 left-1/8 w-[120px] h-[50px] border-2 boreder-[#fff] rounded-[20px] flex items-center justify-center  '>
        <p className="text-[#0C6B2C] font-vt text-center text-[24px]">Developer</p>
      </div>
      

      {/* Projects Section */}
      <section id="projects">
      <NotJustChillar/>
      </section>

      <SafeChoice/>

      <Footer/>
    </div>
  )
}

export default App
