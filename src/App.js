import React from 'react';

import Home from './components/pages/home/Home';
import Skills from './components/pages/skills/Skills';
import Projects from './components/pages/projects/Projects';
import Contact from './components/pages/contact/Contact';
import Footer from './components/UI/footer/Footer';

// to use app css
import './App.css';






function App() {
  return (
    <div>
      <Home />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div> 
  );
}

export default App;
