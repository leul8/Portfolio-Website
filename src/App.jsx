import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import EducationAndCerts from './components/EducationAndCerts';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CloudBackground from './components/CloudBackground';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'dark' : ''} relative min-h-screen overflow-hidden bg-white dark:bg-gray-900`}>
     
      <div className="relative z-10">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Intro />
        <EducationAndCerts />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
