import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t-4 border-black pt-8 pb-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-cardYellow p-6 brutal-border shadow-brutal-lg">
      <div className="flex flex-col items-center md:items-start gap-2">
        <h3 className="heading-font font-extrabold text-2xl italic uppercase">Vivek Kumar</h3>
        <p className="font-mono font-bold text-sm bg-white border-2 border-black px-2 py-1">Full Stack Developer</p>
      </div>

      <div className="flex gap-4">
        <a href="https://github.com/vivek-gupta9" target="_blank" rel="noreferrer" className="bg-white p-2 brutal-border hover:bg-black hover:text-white transition-colors">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/vivek-kumar-842136306/" target="_blank" rel="noreferrer" className="bg-white p-2 brutal-border hover:bg-bgBlue hover:text-white transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="mailto:viveknits2027@gmail.com" className="bg-white p-2 brutal-border hover:bg-cardRed hover:text-white transition-colors">
          <Mail size={24} />
        </a>
      </div>

      <div className="text-center md:text-right">
        <p className="font-mono font-bold text-sm mb-1">Made with ☕ & Code</p>
        <p className="font-mono font-bold text-xs bg-black text-white px-2 py-1 inline-block">© 2026 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;