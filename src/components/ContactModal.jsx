import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Code2, Instagram, X } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  const links = [
    { name: "viveknits2027@gmail.com", icon: Mail, url: "mailto:viveknits2027@gmail.com", color: "bg-[#FDE047]", text: "text-black" },
    { name: "GitHub", icon: Github, url: "https://github.com/vivek-gupta9", color: "bg-[#E5E7EB]", text: "text-black" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/vivek-kumar-842136306/", color: "bg-[#BFDBFE]", text: "text-black" },
    { name: "LeetCode", icon: Code2, url: "https://leetcode.com/u/vivekkr99/", color: "bg-[#FFDDC1]", text: "text-black" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/vivekkumar9_", color: "bg-[#FBCFE8]", text: "text-black" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          {/* Background Overlay click to close */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 cursor-pointer"
            onClick={onClose}
          />
          
          {/* Modal Container */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
            className="relative bg-white w-full max-w-sm rounded-[24px] border-[4px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-10"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="heading-font text-2xl font-extrabold italic text-black">Get in Touch 📬</h2>
              <motion.button 
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-black hover:text-red-500"
              >
                <X size={24} strokeWidth={3} />
              </motion.button>
            </div>

            {/* Links */}
            <div className="space-y-3">
              {links.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 w-full p-3 rounded-xl border-2 border-black ${link.color} ${link.text} font-bold shadow-sm cursor-pointer`}
                  >
                    <Icon size={20} strokeWidth={2.5} />
                    <span>{link.name}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Close Button at Bottom */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="mt-6 w-full bg-[#F87171] text-white font-black text-lg py-3 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
            >
              CLOSE
            </motion.button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;