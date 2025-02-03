/*import React, { useState, useEffect } from 'react';
import DevImg from '../assets/asset 0.png';

const TypewriterText = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[charIndex]);
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, text, speed]);

  return <span>{displayedText}</span>;
};

const Hero = () => {
  const name = "Leul Eyasu";
  const title = "Software Developer";

  return (
    <section id="home" className="bg-white dark:bg-gray-900 py-20 px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col justify-center p-16 mt-4 text-2xl">
          <a href="https://www.linkedin.com/in/vikash-kumar-78269923b/" className="text-gray-600 dark:text-gray-300 hover:text-gray-300 py-4"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/becodewala-youtube" className="text-gray-600 dark:text-gray-300 hover:text-gray-300 py-4"><i className="fab fa-github"></i></a>
          <a href="https://www.instagram.com/becodewala_youtube/" className="text-gray-600 dark:text-gray-300 hover:text-gray-300 py-4"><i className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/@becodewala/home" className="text-gray-600 dark:text-gray-300 hover:text-gray-300 py-4"><i className="fab fa-youtube"></i></a>
        </div>
        <div className="text-left">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            <TypewriterText text="Hello, I'm" speed={150} />
            <br />
            <span className="text-purple-600 dark:text-purple-400">
              <TypewriterText text={name} speed={150} />
            </span>
          </h1>
          <h2 className="text-2xl font-semibold mt-2 text-gray-800 dark:text-gray-300">
            <TypewriterText text={title} speed={150} />
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            I Design Web Applications for my Clients and Company. If you want to make your Website, contact me.
          </p>
          <button className="mt-6 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600">
            Contact Me
          </button>
        </div>
        <img src={DevImg} alt="Developer Illustration" className="w-1/2" />
      </div>
    </section>
  );
};

export default Hero;*/
import React, { useState, useEffect } from 'react';

const TypewriterText = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[charIndex]);
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, text, speed]);

  return <span>{displayedText}</span>;
};

const Intro = () => {
  const name = "Leul Makonnen";
  const title = "Software Developer";
  const occupation = "3rd year Information Systems Student at Addis Ababa University.";
//<section id="home" className="bg-white dark:bg-gray-900 py-20 px-5 md:px-20 relative overflow-hidden">
  return (
<section id="home" className="bg-white dark:bg-gray-900 py-20 px-0 relative overflow-hidden">
              <style>{`
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
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center h-screen -mt-24 text-center md:text-left">
          <div className="flex-shrink-0 w-screen md:w-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            <TypewriterText text="Hello, I'm" speed={150} />
            <br />
            <span className="text-blue-500 dark:text-blue-500">
              <TypewriterText text={name} speed={150} />
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mt-2 text-gray-800 dark:text-gray-300">
            <TypewriterText text={title} speed={150} />
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm md:text-base">
            <TypewriterText text={occupation} speed={150} />
          </p>
          <a href = "#contact">
          <button className="mt-6 px-4 md:px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-800">
            Contact Me
          </button>
          </a>
        </div>
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





export default Intro;
