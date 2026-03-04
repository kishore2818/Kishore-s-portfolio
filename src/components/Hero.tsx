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
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
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
            className="text-4xl sm:text-6xl lg:text-7xl font-cyber font-bold text-gradient-cyber mb-4"
          >
            Kishore Abinash
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="h-16 flex items-center justify-center"
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
            className="text-lg sm:text-xl text-cyber-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            I craft exceptional digital experiences through cutting-edge web technologies
            and artificial intelligence, turning complex problems into elegant solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
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

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyber-cyan rounded-full opacity-60"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-cyber-violet rounded-full opacity-40"
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyber-pink rounded-full opacity-50"
          animate={{
            y: [0, -20, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </section>
  );
};

export default Hero;