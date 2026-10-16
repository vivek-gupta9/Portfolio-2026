import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  
  // Fake terminal logs for background effect
  const fakeLogs = [
    "kernel: CPU initialization complete...",
    "kernel: Memory checking: 1048576K OK",
    "[ OK ] Mounted Root Filesystem.",
    "Loading drivers: net, disk, gpu...",
    "Starting system logging daemon...",
    "Configuring network interfaces...",
    "Connecting to Redis & Kafka streams...",
    "Starting Full_Stack_Dev_Services...",
    "[ OK ] Reached target System Initialization.",
    "Executing VIVEK_KUMAR_OS environment..."
  ];

  useEffect(() => {
    // Progress Bar Logic
    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextValue = prev + Math.floor(Math.random() * 8) + 2;
        if (nextValue >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 800);
          return 100;
        }
        return nextValue;
      });
    }, 150);

    // Terminal Logs Logic
    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < fakeLogs.length) {
        setLogs(prev => [...prev, fakeLogs[logIndex]]);
        logIndex++;
      }
    }, 300);

    return () => {
      clearInterval(interval);
      clearInterval(logInterval);
    };
  }, [onComplete]);

  // Determine status text based on progress
  let statusText = "INITIALIZING KERNEL...";
  if (progress > 30) statusText = "MOUNTING FILESYSTEM...";
  if (progress > 60) statusText = "LOADING RESOURCES...";
  if (progress > 90) statusText = "SYSTEM READY. BOOTING...";

  const totalBlocks = 15;
  const activeBlocks = Math.floor((progress / 100) * totalBlocks);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="os-boot"
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 bg-[#050505] z-50 flex items-center justify-center overflow-hidden font-mono text-white selection:bg-cardPink selection:text-black"
      >
        {/* Subtle Background Elements / Glitches */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-[10%] left-[5%] text-xs text-gray-500">0x00A1F 0x0000 0x11B</div>
          <div className="absolute bottom-[20%] left-[10%] text-xs text-gray-500">SYS_MEM_ALLOC: OK</div>
          <div className="absolute top-[40%] right-[15%] text-xs text-cardPink">{'>> ERROR_IGNORED'}</div>
        </div>

        {/* Top Right Mini Terminal */}
        <div className="absolute top-10 right-4 md:right-10 w-48 md:w-64 h-32 md:h-48 border border-green-500/40 bg-black p-2 overflow-hidden hidden sm:flex flex-col gap-1 shadow-[0_0_10px_rgba(34,197,94,0.1)]">
          <div className="bg-green-500 text-black text-[10px] font-bold px-1 w-fit mb-1">Terminal-1</div>
          <div className="text-green-400 text-[10px] leading-tight flex flex-col gap-1">
            {logs.slice(0, 5).map((log, i) => (
              <span key={i}>{'>'} {log}</span>
            ))}
          </div>
        </div>

        {/* Bottom Right Mini Terminal */}
        <div className="absolute bottom-10 right-4 md:right-10 w-48 md:w-64 h-32 border border-purple-500/40 bg-black p-2 overflow-hidden hidden sm:flex flex-col gap-1 shadow-[0_0_10px_rgba(168,85,247,0.1)]">
          <div className="bg-purple-500 text-black text-[10px] font-bold px-1 w-fit mb-1">Proc_Monitor</div>
          <div className="text-purple-400 text-[10px] leading-tight flex flex-col gap-1">
            {logs.slice(5).map((log, i) => (
              <span key={i}>{'>'} {log}</span>
            ))}
          </div>
        </div>

        {/* SKIP INTRO Button */}
        <button 
          onClick={onComplete} 
          className="fixed top-4 left-4 z-50 bg-white text-black border-2 border-black px-3 py-1 font-bold text-xs hover:bg-cardPink shadow-[2px_2px_0px_0px_rgba(249,168,212,1)] transition-colors cursor-pointer uppercase"
        >
          Skip Boot
        </button>

        {/* Main Central UI */}
        <div className="relative z-10 flex flex-col items-center md:items-start max-w-3xl w-full px-6">
          
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-widest drop-shadow-[2px_2px_0_rgba(255,255,255,0.2)]">
            SYSTEM BOOT:
          </h1>
          <h2 className="text-4xl md:text-7xl font-extrabold text-cardPink tracking-wider mt-2 md:mt-4 drop-shadow-[3px_3px_0_rgba(249,168,212,0.3)]">
            VIVEK_KUMAR_OS
          </h2>
          
          {/* Segmented Progress Bar */}
          <div className="w-full max-w-xl h-10 md:h-14 border-[3px] md:border-4 border-white mt-8 md:mt-12 p-1 md:p-1.5 flex gap-1 md:gap-1.5 bg-black">
            {Array.from({ length: totalBlocks }).map((_, i) => (
              <div 
                key={i} 
                className={`h-full flex-1 transition-colors duration-75 ${i < activeBlocks ? 'bg-cardPink shadow-[0_0_8px_rgba(249,168,212,0.6)]' : 'bg-transparent'}`}
              ></div>
            ))}
          </div>

          {/* Status & Percentage */}
          <div className="w-full max-w-xl flex justify-between items-end mt-6">
            <div className="text-cardYellow text-base md:text-xl font-bold animate-pulse">
              {statusText}
            </div>
            <div className="text-white text-xl md:text-2xl font-bold bg-white/10 px-2 py-1">
              {progress}%
            </div>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroScreen;