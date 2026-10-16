import React from 'react';

const skillCategories = [
  { title: "Programming Languages", color: "bg-cardPink", skills: ["Java", "Python", "C" , "JavaScript", "SQL"] },
  { title: "Core CS", color: "bg-orange-300", skills: ["OOP", "DBMS", "Operating Systems", "System Design", "DSA"] },
  { title: "Frontend", color: "bg-bgBlue", skills: ["React.js", "Redux", "HTML", "CSS", "Tailwind CSS", "Material-UI"] },
  { title: "Backend & DBs", color: "bg-cardGreen", skills: ["Node.js", "Express.js", "RESTful APIs", "JWT", "WebSockets", "MongoDB", "MySQL", "Redis"] },
  { title: "System & DevOps", color: "bg-cardYellow", skills: ["Docker", "Kubernetes", "Apache Kafka", "CI/CD (GitHub Actions)"] },
  { title: "AI/ML & Tools", color: "bg-cardPurple", skills: ["OpenAI APIs", "Agentic AI", "Prompt Engineering", "OpenCV", "Streamlit", "Git", "GitHub"] }
];

const Skills = () => {
  return (
    <div className="w-full mt-20">
      <div className="bg-cardPink brutal-border shadow-brutal-lg p-6 md:p-10">
        <div className="flex justify-center mb-10">
          <div className="bg-cardYellow brutal-border shadow-brutal px-8 py-2">
            <h2 className="heading-font text-2xl font-extrabold italic uppercase text-black">SKILLS</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white brutal-border p-5 hover:scale-[1.02] transition-transform">
              <div className={`${category.color} border-2 border-black inline-block px-3 py-1 font-bold italic mb-4`}>
                {category.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="border-2 border-black px-3 py-1 rounded-full text-sm font-bold bg-gray-50">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;