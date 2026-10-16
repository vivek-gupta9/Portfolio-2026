import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroScreen from './components/IntroScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CodingCards from './components/CodingCards'; // <-- Yahan import wapas add kiya hai
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import ContactModal from './components/ContactModal';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen text-black bg-bgBlue" style={{ scrollBehavior: 'smooth' }}>
      <AnimatePresence>
        {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-12 pb-20 relative">
          <Navbar onContactClick={() => setIsContactOpen(true)} />
          
          <main className="space-y-4">
            <section id="hero">
              <Hero onContactClick={() => setIsContactOpen(true)} />
            </section>
            
            {/* <-- Yahan CodingCards ko wapas render kar diya hai --> */}
            <section id="coding"><CodingCards /></section>
            
            <section id="experience"><Experience /></section>
            <section id="projects"><Projects /></section>
            <section id="skills"><Skills /></section>
            <section id="education"><Education /></section>
          </main>
          
    
         <footer className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] mt-20 bg-black py-10 border-t-[3px] border-white flex flex-col items-center justify-center text-center z-50 shadow-[0_500px_0_0_#000000]">
            <h2 className="heading-font text-[#FDE047] text-xl md:text-2xl font-black italic tracking-wide mb-3 px-4">
              Made with ☕ , 💻 , and BGMI Breaks
            </h2>
            <p className="text-[#60A5FA] font-mono text-xs md:text-sm font-bold opacity-80">
              © 2026 Vivek Kumar. All Rights Reserved.
            </p>
          </footer>
        </div>
      )}

      {/* Render Contact Modal outside of normal flow so it floats on top */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;