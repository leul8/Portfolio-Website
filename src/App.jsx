import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Intro from './components/Intro'
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
    <div className={darkMode ? 'dark' : ''}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Intro/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
    
  );
}

export default App;
