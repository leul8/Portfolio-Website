import React from "react";
import Reveal from "./Reveal";

const About = () => {
  const highlights = [
    "Aspiring Software Engineering Intern with hands-on experience in building scalable applications and solving real-world problems.",
    "Proficient in Java and Python, capable of handling both object-oriented and functional programming challenges.",
    "Skilled in Full-Stack Web Development — creating responsive, user-centric interfaces and efficient backend systems.",
    "Strong foundation in Cloud Computing, with certifications in AWS, Azure, and Oracle Cloud. Experienced in deploying and managing cloud-based solutions.",
    "Well-versed in Database Management, RESTful APIs, and CI/CD pipelines for modern development workflows.",
    "Focused on delivering customer-centric solutions, with a deep understanding of the Software Development Life Cycle (SDLC) and Agile methodologies.",
  ];

  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-900 py-20 px-5 md:px-20 relative overflow-hidden min-h-screen"
    >

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-blue-500 dark:text-white mb-12">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto grid gap-6">
          {highlights.map((point, index) => (
            <Reveal key={index}>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 hover:rotate-1 transition-all duration-300 ease-in-out text-left">
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                  • {point}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <a
          href="https://drive.google.com/file/d/1cY6TmjphGyjRbMotSNfRhZudsMLwWVuG/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-8 py-3 mt-10 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-all duration-300 ease-in-out shadow-md">
            Download CV
          </button>
        </a>
      </div>
    </section>
  );
};

export default About;
