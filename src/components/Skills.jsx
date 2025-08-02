import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skills = [
  { name: "HTML", level: 94 },
  { name: "CSS", level: 84 },
  { name: "JavaScript", level: 74 },
  { name: "Bootstrap", level: 80 },
  { name: "Git & GitHub", level: 75 },
  { name: "React", level: 80 },
  { name: "Java", level: 80 },
  { name: "Python", level: 70 },
  { name: "SQL", level: 70 },
  { name: "Tailwind CSS", level: 70 },
  { name: "C#", level: 70 },
  { name: "AWS Cloud", level: 75 },
  { name: "Oracle Cloud", level: 70 },
  { name: "Docker & Kubernetes", level: 75 },
  { name: "Node.js", level: 80 },
];

const SkillBar = ({ name, level, index }) => {
  return (
    <motion.div
      className="flex flex-col gap-2 px-4" // horizontal space inside each item
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
    >
      <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
        {name}
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <motion.div
          className="h-3 rounded-full bg-blue-500 dark:bg-blue-400"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-white dark:bg-gray-900 py-20 px-6 md:px-8 min-h-screen"
    >
      <motion.div
        className="max-w-5xl mx-auto space-y-12"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500 dark:text-white text-center mb-10">
            Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8">
            {skills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                level={skill.level}
                index={index}
              />
            ))}
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
};

export default Skills;
