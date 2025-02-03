import React from 'react';
import Reveal from "./Reveal";

const Skills = () => {
  
  const skills = [
    { name: 'HTML', level: 94 },
    { name: 'CSS', level: 84 },
    { name: 'JavaScript', level: 74 },
    { name: 'Bootstrap', level: 80 },
    { name: 'Git & GitHub', level: 75 },
    { name: 'React', level: 80 },
    { name: 'Java', level: 80 },
    { name: 'Python', level: 70 },
    { name: 'SQL', level: 70 },
    { name: 'Tailwind CSS', level: 70 },
    { name: 'C#', level: 70 },
  ];
  
  return (
    <section id="skills" className="bg-white dark:bg-gray-900 py-20 px-4 md:px-20 relative overflow-hidden min-h-screen"
>
      <style>
        {`
          @keyframes drop {
            0% {
              transform: translateY(-100px);
              opacity: 1;
            }
            100% {
              transform: translateY(500px);
              opacity: 0;
            }
          }

          .snowflake {
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: rgba(255, 255, 255, 0.8);
            animation: drop linear infinite;
            clip-path: polygon(
              50% 0%, 
              61% 35%, 
              98% 35%, 
              68% 57%, 
              79% 91%, 
              50% 70%, 
              21% 91%, 
              32% 57%, 
              2% 35%, 
              39% 35%
            );
          }
        `}
      </style>
      
      <div className="container mx-auto text-center md:text-left"> <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 dark:text-white text-blue-500">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         
          {skills.map((skill, index) => (
            <div key={index} className="w-full">
              <h3 className="text-sm font-semibold dark:text-gray-300">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 dark:bg-blue-500 h-2 rounded-full" style={{ width: `${skill.level}%` }} />
                
              </div>
              
            </div>
          ))}
        </div></Reveal>
      </div>
      
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </section>
    
  );
};

export default Skills;
