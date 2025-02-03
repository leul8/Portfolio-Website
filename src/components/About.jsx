import React from "react";
import Reveal from "./Reveal";
//<section id="about" className="bg-white dark:bg-gray-900 py-20 flex flex-col px-4 md:px-20">
const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-20 px-4 md:px-20 relative overflow-hidden min-h-screen">

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
      <div className="container mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white pb-12 text-blue-500">
          About Me
          
        </h2>
        <Reveal>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-6 text-justify text-sm md:text-base">
          • I am an aspiring Software Engineering Intern with hands-on experience in developing robust applications and a strong passion solving complex problems. I excel in implementing efficient solutions, leveraging strong analytical skills, proficiency in Python and Java, and a proactive approach to learning new technologies.
<br/><br/>
          • I am proficient in Java and Python programming, which enables me to tackle diverse coding challenges and develop robust applications. My expertise extends to Database Management, allowing me to design, implement, and maintain complex data systems. As a Full-Stack Web Developer, I build comprehensive web solutions, handling both front-end and back-end development. In addition to these skills, I have a strong foundation in Artificial Intelligence, including experience with machine learning algorithms, neural networks, and natural language processing. This allows me to integrate AI-driven features into applications and leverage data for predictive analytics. I emphasize a Customer-Centric Approach, ensuring that solutions are tailored to meet user needs effectively. My strong grasp of Algorithm Implementation helps in optimizing performance and solving problems efficiently. Familiar with the Software Development Life Cycle (SDLC), I manage projects from inception to deployment, ensuring high-quality outcomes.
        </p>
        </Reveal>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800">
          <a href="https://drive.google.com/file/d/1cY6TmjphGyjRbMotSNfRhZudsMLwWVuG/view?usp=sharing">Download CV</a>
        </button>
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

export default About;
