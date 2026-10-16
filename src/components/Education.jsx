import React, { useRef, useState, useEffect } from 'react';
import { Pen, Eraser, Trash2 } from 'lucide-react';

const Education = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#ffffff');
  const [isEraser, setIsEraser] = useState(false);

  // Canvas context setup
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 4;
  }, []);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.strokeStyle = isEraser ? '#27272a' : color; 
    ctx.lineWidth = isEraser ? 20 : 4;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="w-full mt-20 mb-20">
      
      {/* Main Light Green Container */}
      <div className="bg-[#9ae6b4] border-[3px] border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 relative">

        {/* Title */}
        <div className="flex justify-center mb-10">
          <div className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full px-8 py-1.5 transform -rotate-2">
            <h2 className="heading-font text-2xl md:text-3xl font-black italic uppercase tracking-widest text-black">EDUCATION</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column: Compact Education Cards */}
          <div className="space-y-6">

            {/* College Card */}
            <div className="bg-white border-[3px] border-black rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] p-5 relative">
              <div className="absolute -top-3 -left-3 bg-black text-white text-[10px] font-black px-2 py-1 border-[2px] border-black rounded-md">
                2023-2027
              </div>
              <h3 className="heading-font text-lg font-black italic mt-1 text-black">B.Tech ECE</h3>
              <p className="font-extrabold text-black text-[13px] mb-3 leading-tight">National Institute of Technology Srinagar</p>
              <div className="border-[2px] border-gray-200 rounded-lg p-2.5 font-mono text-[11px] font-bold text-black space-y-1">
                <p>• GPA: 7.57</p>
                <p>• Focus: Software Engineering & AI</p>
              </div>
            </div>

            {/* Class 12 Card */}
            <div className="bg-white border-[3px] border-black rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] p-5 relative">
              <div className="absolute -top-3 -left-3 bg-black text-white text-[10px] font-black px-2 py-1 border-[2px] border-black rounded-md">
                XII
              </div>
              <h3 className="heading-font text-lg font-black italic mt-1 text-black">Senior Secondary</h3>
              <p className="font-extrabold text-black text-[13px] mb-3 leading-tight">R.P.S College Patna</p>
              <div className="border-[2px] border-gray-200 rounded-lg p-2 font-mono text-[11px] font-bold text-black">
                BSEB Board | Percentage: 85.4%
              </div>
            </div>

            {/* Class 10 Card */}
            <div className="bg-white border-[3px] border-black rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] p-5 relative">
              <div className="absolute -top-3 -left-3 bg-black text-white text-[10px] font-black px-2 py-1 border-[2px] border-black rounded-md">
                X
              </div>
              <h3 className="heading-font text-lg font-black italic mt-1 text-black">Secondary Education</h3>
              <p className="font-extrabold text-black text-[13px] mb-3 leading-tight">Sinha Model High School Patna</p>
              <div className="border-[2px] border-gray-200 rounded-lg p-2 font-mono text-[11px] font-bold text-black">
                CBSE Board | Percentage: 83%
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Drawing Board */}
          <div className="lg:col-span-2 flex flex-col relative h-[450px]">
            <div className="bg-[#27272a] border-[4px] border-cardYellow rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full h-full relative overflow-hidden flex flex-col">

              {/* Toolbar */}
              <div className="absolute top-4 left-4 z-20 flex gap-2 bg-white p-1 border-[2px] border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <button onClick={() => {setIsEraser(false); setColor('#ffffff')}} className={`p-1.5 rounded-md border-2 border-transparent ${!isEraser && color === '#ffffff' ? 'border-black bg-gray-200' : 'hover:bg-gray-100'}`}><Pen size={16} strokeWidth={2.5}/></button>
                <button onClick={() => {setIsEraser(false); setColor('#FDE047')}} className={`p-3 rounded-md bg-[#FDE047] border-2 border-black ${!isEraser && color === '#FDE047' ? 'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5' : ''}`}></button>
                <button onClick={() => {setIsEraser(false); setColor('#F9A8D4')}} className={`p-3 rounded-md bg-[#F9A8D4] border-2 border-black ${!isEraser && color === '#F9A8D4' ? 'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5' : ''}`}></button>
                <button onClick={() => setIsEraser(true)} className={`p-1.5 rounded-md border-2 border-transparent ${isEraser ? 'border-black bg-gray-200' : 'hover:bg-gray-100'}`}><Eraser size={16} strokeWidth={2.5}/></button>
                <button onClick={clearCanvas} className="p-1.5 rounded-md hover:bg-red-100 text-red-500 border-2 border-transparent"><Trash2 size={16} strokeWidth={2.5}/></button>
              </div>

              {/* DRAW HERE Background Text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                <span className="heading-font text-4xl md:text-6xl font-black italic text-gray-700/40 tracking-widest uppercase">
                  DRAW HERE!
                </span>
              </div>

              {/* HTML5 Canvas */}
              <canvas
                ref={canvasRef}
                width={800}
                height={450}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                className="w-full h-full cursor-crosshair touch-none relative z-10"
                style={{ flexGrow: 1 }}
              />

            </div>

            {/* Doodle Pill - BOUNCING ANIMATION ADDED HERE */}
            <div className="absolute -bottom-4 right-8 bg-white px-5 py-2 border-[2px] border-black rounded-full text-[13px] font-bold font-mono shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 animate-bounce flex items-center gap-1.5">
              ✨ Bored? Doodle something!
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Education;