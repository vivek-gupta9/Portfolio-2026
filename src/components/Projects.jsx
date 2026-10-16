import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI Smart Attendance",
    status: "LIVE PROJECT",
    tech: ["Python", "OpenCV", "Streamlit", "Flask"],
    desc: [
      "Engineered a dual-modality biometric verification pipeline combining Facial and Voice recognition.",
      "Built a QR-based self-service enrollment system for instant course creation.",
      "Delivered a Flask-based portal for student registration and a Streamlit dashboard for teachers."
    ],
    github: "",
    live: "https://ai-attendence-system-landing-page-nine.vercel.app/",
    color: "bg-cardGreen"
  },
  {
    title: "Job Portal Web App",
    status: "LIVE PROJECT",
    tech: ["React.js", "Node.js", "Kafka", "Docker"],
    desc: [
      "Architected an event-driven backend using Apache Kafka for asynchronous processing.",
      "Built a full-stack job portal with role-based dashboards and secure JWT authentication.",
      "Containerized the application with Docker for seamless and scalable deployment."
    ],
    github: "",
    live: "https://job-portal-sigma-gilt.vercel.app/",
    color: "bg-cardPurple"
  },
  {
    title: "DevSync Social Media",
    status: "LIVE PROJECT",
    tech: ["MERN Stack", "Socket.io", "JWT", "Tailwind CSS"],
    desc: [
      "Engineered a full-stack social media platform with real-time chat functionality using Socket.io.",
      "Implemented instant live notifications for user interactions like comments and likes.",
      "Designed a secure and scalable backend with JWT authentication and Role-Based Access Control."
    ],
    github: "",
    live: "https://devsync-social-media.vercel.app/",
    color: "bg-cardYellow"
  },
  {
    title: "Property Booking Platform",
    status: "GITHUB",
    tech: ["MERN Stack", "MongoDB", "Razorpay", "Cloudinary"],
    desc: [
      "Engineered a full-stack property booking platform with advanced search, filtering, and pagination.",
      "Integrated Razorpay with server-side order creation and signature verification.",
      "Leveraged Cloudinary for efficient image storage and implemented atomic booking updates."
    ],
    github: "https://github.com/vivek-gupta9/Property-Booking-Platform",
    live: "",
    color: "bg-orange-300"
  },
  {
    title: "AI Neural Style Transfer",
    status: "GITHUB",
    tech: ["Python", "PyTorch", "Flask", "VGG Network"],
    desc: [
      "Implemented arbitrary neural style transfer in PyTorch using Adaptive Instance Normalization (AdaIN).",
      "Optimized a pretrained VGG encoder-decoder network using content and style losses for zero-shot stylization.",
      "Built a Flask web app allowing users to upload and instantly generate stylized images in a single forward pass."
    ],
    github: "https://github.com/vivek-gupta9/AI-NST-PROJECT",
    live: "",
    color: "bg-cardPink"
  }
];

const Projects = () => {
  return (
    <div className="w-full mt-20">
      <div className="inline-block bg-cardGreen brutal-border shadow-brutal px-6 py-2 mb-12">
        <h2 className="heading-font text-2xl font-extrabold italic uppercase tracking-widest text-black">PROJECTS</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className={`${project.color} brutal-border shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-5 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300`}>
            
            {/* Header: Title & Links */}
            <div className="flex justify-between items-start mb-4">
              <h3 className="heading-font text-2xl font-extrabold italic leading-tight max-w-[75%] text-black">{project.title}</h3>
              <div className="flex gap-2">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="bg-white border-2 border-black p-1.5 hover:bg-black hover:text-white transition-colors shadow-sm text-black">
                    <Github size={18} />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="bg-white border-2 border-black p-1.5 hover:bg-black hover:text-white transition-colors shadow-sm text-black">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            {/* Status Pill */}
            <div className="mb-4">
              <span className="bg-red-500 text-white font-bold text-[10px] px-2.5 py-1 rounded-full border-2 border-black uppercase tracking-wider shadow-sm">
                {project.status}
              </span>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-white border-2 border-black px-2 py-0.5 text-xs font-bold font-mono shadow-sm text-black">
                  {tech}
                </span>
              ))}
            </div>

            {/* Description Box */}
            <div className="bg-white border-2 border-black p-5 flex-grow shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <ul className="space-y-3">
                {project.desc.map((point, i) => (
                  <li key={i} className="flex gap-2 text-sm font-medium text-gray-900 leading-relaxed">
                    <span className="text-black font-bold mt-0.5">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;