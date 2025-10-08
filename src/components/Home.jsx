import React from 'react';
import NavBar from './Nav';
import Hero from './Hero';
import AnimateOnLoad from './Fade';
import NotJustChillar from './NotJustChiller';
import SafeChoice from './SafeChoice';
import AboutIntro from './AboutIntro';
import Footer from './Footer';


const Home = () => {
  return (
    
    //Parent Section
    <>
      <section id="home">
        {/* Navigation bar */}
        <AnimateOnLoad delay={100} 
        initialClasses="opacity-0 translate-y-[-20px]" 
        animateClasses="opacity-100 translate-y-0"
        transitionClasses="transition-all duration-700 ease-out">
            <NavBar/>
        </AnimateOnLoad>

        {/* Hero & Floating Elements */}
        <Hero/>
      </section>



      {/* Project 1: Not Just Chillar */}
      <section id="projects">
        <NotJustChillar/>
      </section>

      {/* Project 2: Safe Choice */}
      <SafeChoice/>

      {/* About me */}
      <AboutIntro/>

      {/* Footer */}
      <Footer/>
    </>
  )
}

export default Home