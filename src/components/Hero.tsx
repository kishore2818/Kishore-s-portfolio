import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'Web & AI Developer',
    'Full-Stack Engineer',
    'Digital Innovator',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-cyber-cyan text-lg font-cyber"
            >
              Hello, my name is
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-cyber font-bold text-gradient-cyber mb-4 whitespace-nowrap"
            >
              Kishore Abinash
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="h-16 flex items-center lg:justify-start justify-center"
            >
              <h2 className="text-2xl sm:text-4xl font-cyber font-semibold text-cyber-text typing-cursor">
                {displayText}
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg sm:text-xl text-cyber-text-muted max-w-2xl leading-relaxed"
            >
              I craft exceptional digital experiences through cutting-edge web technologies
              and artificial intelligence, turning complex problems into elegant solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center items-center mt-12"
            >
              <motion.button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="button-cyber px-8 py-3 rounded-lg font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>

              <motion.a
                href="/projects/KISHORE ABINASH A-RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-lg border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-bg transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              {/* Spinning border ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #00ffff, #8b5cf6, #ec4899, #00ffff)',
                  padding: '3px',
                  borderRadius: '50%',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />

              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: '0 0 40px rgba(0,255,255,0.4), 0 0 80px rgba(139,92,246,0.2)',
                  borderRadius: '50%',
                }}
              />

              {/* Photo container */}
              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden"
                style={{
                  border: '3px solid transparent',
                  background: 'linear-gradient(135deg, #0d1117, #1a0533) padding-box, conic-gradient(from 0deg, #00ffff, #8b5cf6, #ec4899, #00ffff) border-box',
                }}
              >
                <img
                  src="/projects/profile.jpg"
                  alt="Kishore Abinash"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%' }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0d1117,#1a0533);color:#00ffff;font-family:monospace;gap:8px;">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#00ffff" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                        <span style="font-size:12px;opacity:0.6;">Add profile.jpg to public/</span>
                      </div>`;
                    }
                  }}
                />
              </div>

              {/* Floating orb decorations */}
              <motion.div
                className="absolute -top-2 -right-2 w-5 h-5 bg-cyber-cyan rounded-full"
                style={{ boxShadow: '0 0 12px #00ffff' }}
                animate={{ y: [0, -12, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -bottom-3 -left-3 w-4 h-4 bg-cyber-violet rounded-full"
                style={{ boxShadow: '0 0 10px #8b5cf6' }}
                animate={{ y: [0, 14, 0], scale: [1, 0.8, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
              <motion.div
                className="absolute top-1/2 -left-6 w-3 h-3 bg-cyber-pink rounded-full"
                style={{ boxShadow: '0 0 8px #ec4899' }}
                animate={{ x: [0, -10, 0], scale: [1, 1.3, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          className="text-cyber-cyan hover:text-cyber-violet transition-colors p-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.2 }}
        >
          <ArrowDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;