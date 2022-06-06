import React from 'react';

import Home from './components/pages/home/Home';
import Skills from './components/pages/skills/Skills';
import Projects from './components/pages/projects/Projects';
import Contact from './components/pages/contact/Contact';

// to use app css
import './App.css';





function App() {
  return (
    <div>
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div> 
  );
}

export default App;
