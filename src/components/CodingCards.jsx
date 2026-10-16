import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, AlertTriangle } from 'lucide-react';

const CodingCards = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cfUnavailable, setCfUnavailable] = useState(false);

  return (
    <div className="w-full mt-12">
      {/* Coding Banner */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-cardYellow brutal-border shadow-brutal flex justify-between items-center p-4 cursor-pointer hover:bg-yellow-300 transition-colors"
      >
        <h2 className="heading-font text-2xl font-extrabold italic uppercase tracking-widest">CODING PROFILES</h2>
        <button className="bg-black text-white font-bold px-4 py-1 text-sm border-2 border-white">
          {isOpen ? 'CLOSE' : 'OPEN'}
        </button>
      </div>

      {/* Top-to-Down Dropdown Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 24 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            className="overflow-hidden flex flex-col md:flex-row gap-6"
          >
            {/* LeetCode Card */}
            <div className="flex-1 bg-white brutal-border shadow-brutal-lg p-6 group">
              <div className="flex justify-between items-start mb-4">
               {/* Yahan se 'p-2' hata diya hai, 'overflow-hidden' aur 'object-cover' lagaya hai */}
<div className="w-16 h-16 rounded-xl brutal-border overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
  <img src="/leetcode.png" alt="LeetCode" className="w-full h-full object-cover" />
</div>
                <a href="https://leetcode.com/u/vivekkr99/" target="_blank" rel="noreferrer" className="hover:text-bgBlue">
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3 className="heading-font text-2xl font-bold text-orange-500 mb-1">LeetCode Knight</h3>
              <div className="font-bold font-mono text-sm mb-4">
                Max Rating <span className="bg-cardYellow border border-black px-1">1864</span>
              </div>
              <div className="bg-cardPink border-2 border-black inline-block px-3 py-1 font-bold text-sm mb-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                900+ DSA problems solved.
              </div>
            </div>

            {/* GFG Card */}
            <div className="flex-1 bg-white brutal-border shadow-brutal-lg p-6 group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full brutal-border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-cardGreen">
                  <span className="text-2xl text-green-600 font-extrabold heading-font">G</span>
                </div>
                <a href="https://www.geeksforgeeks.org/profile/vkvnshu1itv?from=explore" target="_blank" rel="noreferrer" className="hover:text-bgBlue">
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3 className="heading-font text-2xl font-bold text-green-600 mb-1">GeeksforGeeks</h3>
              <div className="font-bold font-mono text-sm mb-4">
                Platform <span className="bg-cardGreen border border-black px-1">Active</span>
              </div>
              <div className="bg-bgBlue text-white border-2 border-black inline-block px-3 py-1 font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Consistent problem solver.
              </div>
            </div>

            {/* Codeforces Card */}
            <div 
              className="flex-1 bg-white brutal-border shadow-brutal-lg p-6 group cursor-pointer relative"
              onClick={() => setCfUnavailable(true)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full brutal-border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-cardRed">
                  <span className="text-2xl font-extrabold text-red-600">il</span>
                </div>
                <ExternalLink size={20} className="text-gray-400" />
              </div>
              <h3 className="heading-font text-2xl font-bold text-red-600 mb-1">Codeforces</h3>
              <div className="font-bold font-mono text-sm mb-4 text-gray-500">
                Competitive Programming
              </div>

              {/* Unavailable Overlay Popup */}
              <AnimatePresence>
                {cfUnavailable && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 bg-white/90 backdrop-blur-sm brutal-border flex flex-col items-center justify-center z-10 p-4 text-center"
                  >
                    <AlertTriangle className="text-red-500 mb-2" size={32} />
                    <span className="font-extrabold heading-font text-lg">CURRENTLY UNAVAILABLE</span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setCfUnavailable(false); }}
                      className="mt-2 bg-black text-white text-xs px-3 py-1 font-bold"
                    >
                      DISMISS
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CodingCards;