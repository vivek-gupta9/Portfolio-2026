import React from 'react';
import { Download, Mail, Github, Linkedin, Code2 } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = ({ onContactClick }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4 items-stretch">
      
      {/* LEFT: Profile Card */}
      <div className="bg-white brutal-border rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-5 md:p-6 flex flex-col items-center justify-between h-full">
        
        <div className="flex flex-col items-center w-full">
          <div className="w-28 h-28 border-[3px] border-black bg-cyan-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4 relative overflow-hidden group">
            <img 
              src="/profile.jpg" 
              alt="Vivek" 
              className="w-full h-full object-cover bg-gray-200 transition-transform duration-500 cursor-pointer hover:scale-110"
              onError={(e) => { e.target.style.display = 'none'; }} 
            />
            <div className="absolute inset-0 flex items-center justify-center font-black text-gray-800 -z-10 text-xl">
              SDE
            </div>
          </div>
          
          {/* LUXURY CLASSIC FONT FOR NAME */}
          <h2 className="text-4xl md:text-5xl font-serif font-black uppercase tracking-[0.15em] mb-2 text-black">
            VIVEK
          </h2>
          
          {/* <div className="bg-black text-white text-[10px] font-bold px-4 py-1.5 rounded-full mb-3 font-mono shadow-[3px_3px_0px_0px_rgba(200,200,200,0.5)] border-2 border-gray-700">
           SOFTWARE_ENGINEER()
          </div> */}
          <div className="bg-black text-white text-[10px] md:text-xs font-extrabold px-4 py-1.5 rounded-full mb-3 font-mono shadow-[4px_4px_0px_0px_rgba(200,200,200,0.5)] border-2 border-gray-700 tracking-wide">
  SOFTWARE_ENGINEER()
</div>

          <div className="w-full h-[2px] bg-black my-2"></div>
        </div>

       {/* DETAILS SECTION */}
        <div className="w-full space-y-4 font-mono text-sm md:text-base font-extrabold my-5 text-black uppercase tracking-wide">
          
          <div className="flex items-center gap-3">
            <span className="bg-cardYellow border-2 border-black px-2.5 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs md:text-sm">
              [LOCATION]
            </span>
            <span>Patna, Bihar</span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="bg-cardGreen border-2 border-black px-2.5 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs md:text-sm">
              [STATUS]
            </span>
            <span>4th Year ECE B.Tech</span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="bg-bgBlue border-2 border-black px-2.5 py-1 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs md:text-sm">
              [MISSION]
            </span>
            <span>CODE, COFFEE, COMMIT</span>
          </div>
          
        </div>

        <div className="w-full flex flex-col items-center mt-auto">
          
          {/* DARKER GREEN & BIGGER TEXT FOR RESUME */}
          <a 
            href="/resume.pdf" 
            download="Vivek_Kumar_Resume.pdf"
            className="w-full bg-green-400 border-[3px] border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-2.5 font-extrabold flex items-center justify-center gap-2 mb-3 text-black hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer uppercase text-sm"
          >
            <Download size={18} strokeWidth={3} /> DOWNLOAD_RESUME
          </a>
          
          {/* DARKER RED & BIGGER TEXT FOR CONTACT */}
          <button 
            onClick={onContactClick} 
            className="w-full bg-red-500 border-[3px] border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-2.5 font-extrabold flex items-center justify-center gap-2 text-white hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer uppercase text-sm"
          >
            <Mail size={18} strokeWidth={3} /> CONTACT ME
          </button>

          {/* COLORFUL BRAND LOGOS */}
          <div className="flex gap-7 mt-5 mb-1 items-center">
            <a href="https://github.com/vivek-gupta9" target="_blank" rel="noreferrer" className="cursor-pointer hover:-translate-y-1.5 transition-transform">
              <Github size={26} strokeWidth={2.5} className="text-black fill-black" />
            </a>
            <a href="https://www.linkedin.com/in/vivek-kumar-842136306/" target="_blank" rel="noreferrer" className="cursor-pointer hover:-translate-y-1.5 transition-transform">
              <Linkedin size={26} strokeWidth={2} className="text-[#0a66c2] fill-[#0a66c2]" />
            </a>
            <a href="https://leetcode.com/u/vivekkr99/" target="_blank" rel="noreferrer" className="cursor-pointer hover:-translate-y-1.5 transition-transform">
              <Code2 size={28} strokeWidth={3} className="text-[#ea580c]" />
            </a>
          </div>

        </div>
      </div>

      {/* RIGHT: Bio & Terminal */}
      <div className="lg:col-span-2 flex flex-col justify-between space-y-6">
        
        <div className="bg-cardYellow brutal-border shadow-brutal-lg p-6 md:p-8 flex-grow">
          <h1 className="heading-font text-3xl md:text-4xl font-extrabold italic mb-5 text-black">Hi people!</h1>
          
          <p className="text-sm md:text-base font-medium leading-relaxed mb-4 text-gray-900">
            I'm an <span className="bg-white border-2 border-black px-1 font-bold text-black">final year student at NIT Srinagar</span> and a Full Stack Developer.<br className="hidden md:block"/>
            Previously, I worked as a Web Developer Intern at <span className="bg-white border-2 border-black px-1 font-bold text-black">Cantilever</span>.
          </p>
          
          <p className="text-sm md:text-base font-medium leading-relaxed mb-5 text-gray-900">
            I'm always excited to connect with folks building scalable systems or solving complex DSA problems!
          </p>
          
          <div className="inline-block bg-white brutal-border py-2.5 px-5 text-sm md:text-base font-extrabold flex items-center gap-2 w-fit shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black">
              🚀 Open to Software Engineering Intern & FTE roles
               </div>
        </div>

        <div className="brutal-border bg-black text-green-400 p-5 md:p-6 font-mono text-xs md:text-sm shadow-brutal-lg">
          <div className="flex gap-2 mb-3 border-b border-gray-700 pb-2">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-400"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-green-500"></div>
          </div>
          <div className="text-white mt-2 leading-relaxed">
            <span className="text-pink-500">class</span> <span className="text-yellow-300">Main</span> {'{'} <br/>
            
            &nbsp;&nbsp;<span className="text-pink-500">public static void</span> <span className="text-yellow-300">main</span>(String[] args) {'{'} <br/>
            
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">System.out.print</span>("
            <span className="text-orange-400">
              <Typewriter
                words={['hi welcome to my portfolio', 'I am a Full Stack Developer', 'I build scalable systems']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
            ");<br/>
            
            &nbsp;&nbsp;{'}'}<br/>
            {'}'}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;