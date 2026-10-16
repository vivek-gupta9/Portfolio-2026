import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ onContactClick }) => {
  /// Live Date State
  const [liveDate, setLiveDate] = useState('System Online');

  useEffect(() => {
    const updateDate = () => {
      const date = new Date();
      const day = date.toLocaleDateString('en-US', { weekday: 'long' }); // ex: Saturday
      const exactDate = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }); // ex: 10/17/2026
      setLiveDate(`${day}, ${exactDate}`);
    };
    
    updateDate(); // Turant date set karega
    const interval = setInterval(updateDate, 60000); // Har minute update karega
    return () => clearInterval(interval);
  }, []);
  ///live dat

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = ['EXPERIENCE', 'PROJECTS', 'SKILLS', 'EDUCATION'];

  return (
    <nav className="-mt-4 md:-mt-8 flex flex-wrap items-center justify-between gap-4 py-4 w-full sticky top-0 z-40 bg-[#E5E7EB] backdrop-blur-sm p-4 rounded-b-xl border-b-4 border-black">
      <motion.div 
        whileHover={{ scale: 1.05, rotate: -2 }}
        className="bg-cardPurple text-white font-black text-3xl md:text-4xl italic tracking-wider px-6 py-2 brutal-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-sans cursor-pointer uppercase"
        onClick={() => window.scrollTo(0, 0)}
      >
        PORTFOLIO
      </motion.div>

      <div className="flex flex-wrap items-center gap-2 md:gap-4 font-bold text-sm md:text-base">
        {navItems.map((item) => (
          <motion.button 
            key={item}
            whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
            onClick={() => scrollTo(item.toLowerCase())}
            className="bg-white hover:bg-cardYellow px-4 py-1.5 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer"
          >
            {item}
          </motion.button>
        ))}
        {/* Contact Button opens Modal */}
        <motion.button 
          whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
          onClick={onContactClick}
          className="bg-cardPink hover:bg-cardYellow px-4 py-1.5 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer"
        >
          CONTACT
        </motion.button>
      </div>
       
       {/* LIVE DATE BUTTON */}
        <div className="hidden md:flex items-center gap-2 bg-[#FDE047] border-[3px] border-black rounded-full px-4 py-1.5 font-mono font-bold text-xs md:text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          {/* Black blinking cursor box */}
          <div className="w-2 h-4 bg-black animate-pulse"></div>
          <span>{liveDate}</span>
        </div>
    </nav>
  );
};

export default Navbar;