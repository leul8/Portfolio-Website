import React, { useState } from 'react';
import p1 from '../assets/1.png';
import p2 from '../assets/2.png';
import p3 from '../assets/3.png';
import p4 from '../assets/4.png';
import p5 from '../assets/5.png';
import p6 from '../assets/6.png';
import p7 from '../assets/7.png';
import { FaLink } from "react-icons/fa";
import Reveal from "./Reveal";

// Sample portfolio data
const portfolioData = [
  { id: 1, title: 'Portfolio Website 1', category: 'Website', image: p3, description: 'A simple personal portfolio website', tech: 'HTML, CSS, JavaScript' },
  { id: 2, title: 'Industrial Project Management System', category: 'Application', image: p1, description: 'A management system for tracking and handling industrial projects.', tech: 'Java, SQL Server' },
  { id: 3, title: 'Tic Tac Toe Game', category: 'Application', image: p4, description: 'A simple Tic Tac Toe game made using C++.', tech: 'C++' },
  { id: 4, title: 'Information Retrieval System For Amaharic Language', category: 'Application', image: p2, description: 'An information retrieval system for the Amharic language.', tech: 'Python' },
  { id: 5, title: 'Food Vendor Management System', category: 'Application', image: p5, description: 'A Food Vendor Management System that helps streamline the process of sourcing, managing, and tracking food vendors efficiently.', tech: 'C#, SQL Server' },
  { id: 6, title: 'Portfolio Website 2(This Website!)', category: 'Website', image: p6, description: 'A personal portfolio website made with React and Tailwind CSS', tech: 'React, Tailwind CSS' },
  { id: 7, title: 'Car finder For Ethiopia', category: 'Website', image: p7, description: 'A tool that searches through Jiji and Mekina to help users find available cars quickly and easily.', tech: 'React, Express JS' },

];

const links = [
  "https://github.com/leul8/Projects/blob/main/Portfolio%20Website%201/Readme.txt",
  "https://github.com/leul8/Projects/blob/main/Industrial%20Project%20Management%20System/Readme.txt",
  "https://github.com/leul8/Projects/blob/main/TIC%20TAC%20TOE%20Game.cpp",
  "https://github.com/leul8/Projects/blob/main/Information%20Retrieval%20System%20For%20Amaharic%20Language/Readme.txt"
];

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredItem, setHoveredItem] = useState(null);

  const filteredPortfolio = activeFilter === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="bg-white dark:bg-gray-900 py-20 px-4 md:px-20 relative overflow-hidden min-h-screen">
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

          .snowflake-2 {
            width: 25px;
            height: 25px;
            opacity: 0.6;
            animation-duration: 3s;
          }

          .snowflake-3 {
            width: 30px;
            height: 30px;
            opacity: 0.4;
            animation-duration: 4s;
          }

          .snowflake-4 {
            width: 20px;
            height: 20px;
            opacity: 0.8;
            animation-duration: 5s;
          }

          .snowflake:hover {
            transform: translateY(500px) rotate(360deg);
            animation-timing-function: ease-in-out;
          }
        `}
      </style>

      <div className="container mx-auto text-center md:text-left">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 dark:text-white text-blue-500">Projects</h2>

          {/* Filter buttons */}
          <div className="flex justify-center mb-8 flex-wrap">
            {['All', 'Website', 'Application'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`mx-2 mb-2 px-4 py-2 rounded-full border-2 border-blue-500 dark:border-blue-500 ${
                  activeFilter === filter ? 'bg-blue-500 dark:bg-blue-500 text-white' : 'bg-white dark:bg-gray-800 text-blue-500 dark:text-blue-500'
                } transition duration-300`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Portfolio items */}
          <div className="flex flex-wrap justify-center gap-6">
            {filteredPortfolio.map((item, index) => (
              <div
                key={item.id}
                className="relative w-full sm:w-[45%] md:w-[45%] lg:w-[22%] bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mb-6 transition-transform transform hover:scale-105 hover:shadow-xl"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-[200px] object-cover transition-opacity duration-300 ${hoveredItem === item.id ? 'opacity-50' : 'opacity-100'}`}
                />

                {/* Project Name Under Image */}
                <div className="p-2">
                  <h3 className="text-lg font-semibold dark:text-white text-gray-800 mb-1">{item.title}</h3>
                </div>

                {hoveredItem === item.id && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-60 text-white text-xl font-bold z-10 p-2">
                    <p className="text-sm mt-1">{item.description}</p>
                    <p className="text-xs mt-1 italic">{item.tech}</p>
                    <a
                      href={links[index]} // Use the link from the links array
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm transition-transform transform hover:scale-105"
                    >
                      <FaLink className="mr-2" /> View Project
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Snowflakes animation */}
      {Array.from({ length: 30 }).map((_, index) => (
        <div
          key={index}
          className={`snowflake snowflake-${Math.floor(Math.random() * 4) + 1}`}
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

export default Project;
