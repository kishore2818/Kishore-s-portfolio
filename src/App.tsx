import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-cyber-bg text-cyber-text">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none" />
      
      {/* Ambient Glow Effects */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-cyber-cyan opacity-10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-cyber-violet opacity-10 rounded-full filter blur-3xl pointer-events-none" />
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;