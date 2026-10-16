import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "Full Stack Web Developer Intern",
    company: "Cantilever",
    date: "May 2026 - Jun 2026",
    location: "Remote",
    bgColor: "bg-cardPink",
    points: ["Built a full-stack social media platform supporting 50+ concurrent users using Node.js, Express.js, MongoDB, and React.", "Designed JWT-based authentication with role-based access control (RBAC).", "Implemented real-time chat and live notifications using Socket.io and debugged race conditions."]
  },
  {
    role: "Research Intern",
    company: "SSPL, DRDO",
    date: "Summer Internship",
    location: "New Delhi, India",
    bgColor: "bg-cardPurple",
    points: ["Conducted research focusing on Surface Acoustic Wave (SAW) filters and their applications.", "Prepared detailed presentations and technical reports analyzing signal processing capabilities."]
  }
];

const Experience = () => {
  return (
    <div className="w-full mt-20">
      <div className="inline-block bg-cardYellow brutal-border shadow-brutal px-6 py-2 mb-16">
        <h2 className="heading-font text-2xl font-extrabold italic uppercase tracking-widest text-black">EXPERIENCE</h2>
      </div>

      <div className="relative w-full">
        {/* Main Vertical Dotted Line */}
        <div className="hidden lg:block absolute left-[300px] top-6 bottom-16 w-0 border-l-[4px] border-dotted border-black z-0"></div>

        <div className="flex flex-col gap-16 md:gap-24 w-full">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-start w-full relative">
              
              {/* Left Side: Date & Location */}
              <div className="w-full lg:w-[300px] flex flex-col items-start lg:items-end pr-0 lg:pr-12 pt-4 relative z-10">
                <div className="bg-white border-[3px] border-black rounded-full py-2 px-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 font-bold text-sm">
                  <Calendar size={16} /> {exp.date}
                </div>
                <div className="mt-4 flex items-center gap-1 font-bold text-sm text-gray-800 lg:mr-2">
                  <MapPin size={16} /> {exp.location}
                </div>
                
                {/* Horizontal Line from Date Pill to Dotted Line */}
                <div className="hidden lg:block absolute top-[34px] right-0 w-12 border-t-[3px] border-black z-0"></div>
              </div>

              {/* Right Side: Experience Terminal Card */}
              <div className="w-full lg:w-[calc(100%-300px)] pl-0 lg:pl-10 mt-6 lg:mt-0 relative z-10">
                {/* Horizontal Line from Card to Dotted Line */}
                <div className="hidden lg:block absolute top-[34px] left-0 w-10 border-t-[3px] border-black z-0"></div>
                
                <div className="bg-white brutal-border shadow-brutal-lg overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                  <div className={`${exp.bgColor} border-b-3 border-black p-2 flex justify-between`}>
                    <div className="flex gap-2 pl-2">
                      <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                      <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                      <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                    </div>
                    <div className="text-xs font-bold font-mono pr-2 uppercase text-black">
                      experience.exe
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <h3 className="heading-font text-2xl md:text-3xl font-extrabold italic mb-4">{exp.role}</h3>
                    <div className="inline-block bg-cardPink text-black border-2 border-black px-4 py-1 font-bold mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-full">
                      {exp.company}
                    </div>
                    
                    <div className="bg-white border-2 border-black rounded-lg p-5 space-y-3 shadow-sm">
                      {exp.points.map((point, idx) => (
                        <div key={idx} className="flex gap-3">
                          <div className="flex-shrink-0 mt-1">
                             <div className="w-3 h-3 rounded-full bg-cardGreen border border-black"></div>
                          </div>
                          <p className="font-medium text-sm md:text-base text-gray-800 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;