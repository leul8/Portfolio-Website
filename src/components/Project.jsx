import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import p1 from '../assets/1.png';
import p2 from '../assets/2.png';
import p3 from '../assets/3.png';
import p4 from '../assets/4.png';
import p5 from '../assets/5.png';
import p6 from '../assets/6.png';
import p7 from '../assets/7.png';
import p8 from '../assets/PartSmart.jpeg';
import p9 from '../assets/flashcards.png';
import p10 from '../assets/kurazint.png';
import p11 from '../assets/task.jpg';

import { FaLink } from "react-icons/fa";
import Reveal from "./Reveal";

const portfolioData = [
  { id: 1, title: 'Portfolio Website 1', category: 'Website', image: p3, description: 'A personal portfolio website.', tech: 'HTML, CSS, JavaScript' },
  { id: 2, title: 'Industrial Project Management', category: 'Application', image: p1, description: 'System to manage industrial projects.', tech: 'Java, SQL Server' },
  { id: 3, title: 'Tic Tac Toe Game', category: 'Application', image: p4, description: 'Classic Tic Tac Toe game.', tech: 'C++' },
  { id: 4, title: 'Amharic Info Retrieval', category: 'Application', image: p2, description: 'Retrieves info for Amharic language.', tech: 'Python' },
  { id: 5, title: 'Food Vendor System', category: 'Application', image: p5, description: 'Manage food vendor operations.', tech: 'C#, SQL Server' },
  { id: 6, title: 'This Portfolio Website', category: 'Website', image: p6, description: 'Built with React & Tailwind CSS.', tech: 'React, Tailwind CSS' },
  { id: 7, title: 'Ethiopia Car Finder', category: 'Website', image: p7, description: 'Find cars on Jiji & Mekina.', tech: 'React, Express JS' },
  { id: 8, title: 'PartSmart: Car Parts and Accessories Marketplace', category: 'Website', image: p8, description: 'PartSmart is a platform for searching and purchasing car parts', tech: 'React, Node.js, Firebase' },
  { id: 9, title: 'Flash Cards', category: 'Website', image: p9, description: 'A minimal React app that lets users flip through flash cards to study questions and answers interactively.', tech: 'React, Tailwind CSS' },
  { id: 10, title: 'Weather App', category: 'Website', image: p10, description: 'A responsive weather app built as an intern, fetching real-time weather data using an external API.', tech: 'React, Tailwind CSS' },
  { id: 11, title: 'Task Management App', category: 'Website', image: p11, description: 'A straightforward task manager app built to create, track, and manage daily tasks with a clean, user-friendly interface.', tech: 'React, Tailwind CSS' },
];

const links = [
  "https://github.com/leul8/Projects/blob/main/Portfolio%20Website%201/Readme.txt",
  "https://github.com/leul8/Projects/blob/main/Industrial%20Project%20Management%20System/Readme.txt",
  "https://github.com/leul8/Projects/blob/main/TIC%20TAC%20TOE%20Game.cpp",
  "https://github.com/leul8/Projects/blob/main/Information%20Retrieval%20System%20For%20Amaharic%20Language/Readme.txt",
  "https://github.com/leul8/Projects/blob/main/Food%20Vendor%20Management%20System/Readme.txt",
  "https://github.com/leul8/Projects/blob/main/Portfolio%20Website%202/Readme.txt",
  "https://github.com/leul8/Projects/blob/main/Car%20Finder%20for%20Ethiopia/Readme.txt",
  "https://partsmart.com.et",
  "https://flashcards.leulmakonnen.com",
  "https://weatherapp.leulmakonnen.com",
  "https://github.com/leul8",
];

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const descVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: 10, scale: 0.8, transition: { duration: 0.2 } },
};

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredItem, setHoveredItem] = useState(null);

  const filteredPortfolio = activeFilter === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="bg-white dark:bg-gray-900 py-20 px-6 md:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <Reveal>
          <h2 className="text-4xl font-bold mb-12 text-blue-500 dark:text-white">Projects</h2>
          <div className="flex justify-center mb-10 flex-wrap gap-3">
            {['All', 'Website', 'Application'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full border-2 border-blue-500 ${
                  activeFilter === filter
                    ? 'bg-blue-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-blue-500'
                } transition duration-300`}
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div
            className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                }
              }
            }}
          >
            {filteredPortfolio.map((item, index) => (
              <motion.div
                key={item.id}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden w-full max-w-xs cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
                initial="hidden"
                animate="visible"
              >
                <div className="relative rounded-t-xl overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: hoveredItem === item.id ? 0.5 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.a
                        href={links[index]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-1/2 left-1/2 transform -translate-x-[60%] -translate-y-1/2 bg-blue-500 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg text-sm"
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        exit="exit"
                      >
                        <FaLink className="text-sm" />
                        View Project
                      </motion.a>
                    )}
                  </AnimatePresence>
                </div>

                <div className="p-4 min-h-[140px]">
                  <h3 className="text-lg font-semibold dark:text-white text-gray-800 line-clamp-2">{item.title}</h3>
                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.p
                        className="text-sm text-gray-500 dark:text-gray-300 mt-2"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={descVariants}
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};

export default Project;
