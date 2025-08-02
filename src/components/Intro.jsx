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
  const occupation = "4th year Information Systems Student at Addis Ababa University.";

  return (
    <section id="home" className="bg-white dark:bg-gray-900 py-20 px-0 relative overflow-hidden">
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
          <a href="#contact">
            <button className="mt-6 px-4 md:px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-800">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
