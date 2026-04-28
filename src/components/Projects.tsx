import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Zap, Brain, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      id: 1,
      title: 'AI-Based Traffic Violation Detection & Police verification System',
      description: 'Built a MERN-stack cross-platform system to detect and record real-time traffic violations.Integrated YOLO-based object detection model to identify violations like helmetless riding and phone usage, triple riding, stunt riding, smoking and fire accidents,.',
      image: '/projects/kaapaan.png',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Pytourch'],
      demoUrl: 'https://kaapaan-frontend.vercel.app/',
      githubUrl: 'https://github.com/kishore2818/kaapaan-frontend-',
      icon: <Brain className="w-6 h-6" />,
      featured: true,
    },
    {
      id: 2,
      title: 'SRI – AI & ML Enabled Video Analysis (SIH-2025)',
      description: 'Developed an AI/ML-enabled video analysis and interpretation system for real-time suspect tracking, weapon detection, and suspicious behavior analysis. Leveraged instance-level video summarization, pattern matching, and visual analytics to reduce large video feed processing time from 100% (1-hour footage) to ~33% (~20 minutes). Built on an agentic microservices architecture integrating 7+ AI/DL modules for scalable, low-latency intelligence.',
      image: '/projects/sri.png',
      tech: ['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'WebSockets', 'MERN'],
      demoUrl: 'https://sri-eta.vercel.app/',
      githubUrl: 'https://github.com/Naveenkumar7125/SRI-V1',
      icon: <Brain className="w-6 h-6" />,
      featured: true,
    },
    {
      id: 3,
      title: 'Shree – AI Agent for Temple & Pilgrimage Crowd Management',
      description: 'Developed an AI/ML-enabled video intelligence system for real-time suspect tracking, weapon detection, and suspicious behavior analysis across multi-camera feeds. Built a high-throughput summarization and visual analytics pipeline that reduced large video processing time from 100% (1-hour footage) to ~33% (~20 minutes). Architected an agentic microservices architecture integrating 7+ AI/DL modules for scalable, low-latency, real-time intelligence.',
      image: '/projects/shree.png',
      tech: ['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'Microservices', 'MERN'],
      demoUrl: 'https://kiosk-vert.vercel.app/',
      githubUrl: 'https://github.com/kishore2818/temple',
      icon: <Globe className="w-6 h-6" />,
      featured: false,
    },
    {
      id: 4,
      title: 'NEC-Bus Repair Tracking System',
      description: 'Built a real-time bus repair and maintenance tracking system for Nandha Engineering College. Enables staff to report, track, and resolve bus repair requests with live status updates, history logs, and admin dashboard for fleet management — reducing downtime and improving communication between drivers and the maintenance team.',
      image: '/projects/nec.png',
      tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      demoUrl: '#',
      githubUrl: '#',
      demoAlert: '⚠️ Live demo not deployed yet.',
      githubAlert: '⚠️ Code has not been pushed to GitHub yet.',
      icon: <Zap className="w-6 h-6" />,
      featured: false,
    },
    {
      id: 5,
      title: 'Kolam App – Digital Kolam for Indian Women',
      description: 'Designed and developed a mobile-friendly app celebrating the traditional Indian art of Kolam. Allows users to create, customize, and share digital Kolam patterns inspired by South Indian culture. Features dot-grid based drawing tools, a pattern library, daily challenges, and a community sharing feed — making the centuries-old art form accessible and interactive for modern Indian women.',
      image: '/projects/kolam.png',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Express.js'],
      demoUrl: 'https://black-squad-kolam.vercel.app/',
      githubUrl: 'https://github.com/kishore2818/black-squad-kolam',
      icon: <Globe className="w-6 h-6" />,
      featured: false,
    },
    {
      id: 6,
      title: 'SafeWave – IoT Anti-Drowning Wearable System',
      description: 'Designed SafeWave, a smart anti-drowning wearable band that continuously monitors motion, heart rate, depth, and body orientation using multi-sensor IoT technology. Automatically deploys a CO₂ flotation airbag upon detecting drowning patterns and sends GPS-based emergency alerts via GSM to rescue teams. Features a companion mobile app for real-time monitoring and rescue tracking.',
      image: '/projects/iot.png',
      tech: ['IoT', 'Arduino', 'GPS', 'GSM', 'React Native', 'Firebase'],
      demoUrl: '#',
      githubUrl: '#',
      demoAlert: '⚠️ Hardware project — live demo not available online.',
      githubAlert: '⚠️ Code has not been pushed to GitHub yet.',
      icon: <Zap className="w-6 h-6" />,
      featured: false,
    },
    {
      id: 7,
      title: 'Loading... Upcoming',
      description: 'A new project is currently in the works — exploring cutting-edge technologies and solving real-world problems. Stay tuned for the reveal!',
      image: '/projects/upcoming.png',
      tech: ['Coming Soon'],
      demoUrl: '#',
      githubUrl: '#',
      demoAlert: '⚠️ This project is still in development. Stay tuned!',
      githubAlert: '⚠️ This project is still in development. Stay tuned!',
      icon: <Zap className="w-6 h-6" />,
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cyber font-bold text-gradient-cyber mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-cyber-text-muted max-w-3xl mx-auto">
              A showcase of innovative solutions that demonstrate my passion for
              cutting-edge technology and exceptional user experiences.
            </p>
            <div className="w-20 h-1 bg-cyber-violet mx-auto mt-6 glow-violet" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className={`card-cyber rounded-xl overflow-hidden group ${project.featured ? 'lg:col-span-2' : ''
                  }`}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg via-transparent to-transparent opacity-60" />

                  {/* Project Icon */}
                  <div className="absolute top-4 right-4 p-2 bg-cyber-bg/80 backdrop-blur-sm rounded-lg border border-cyber-cyan/30">
                    <div className="text-cyber-cyan">
                      {project.icon}
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-cyber-violet/20 backdrop-blur-sm rounded-full border border-cyber-violet">
                      <span className="text-cyber-violet text-sm font-cyber font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-cyber font-bold text-cyber-text group-hover:text-cyber-cyan transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-cyber-text-muted text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-cyber-surface/50 text-cyber-cyan rounded-full border border-cyber-cyan/30 hover:border-cyber-cyan transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-2">
                    {(project as any).demoAlert ? (
                      <motion.button
                        onClick={() => alert((project as any).demoAlert)}
                        className="flex items-center gap-2 px-4 py-2 bg-cyber-cyan text-cyber-bg rounded-lg font-semibold text-sm hover:bg-cyber-violet transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.button>
                    ) : (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-cyber-cyan text-cyber-bg rounded-lg font-semibold text-sm hover:bg-cyber-violet transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    )}

                    {(project as any).githubAlert ? (
                      <motion.button
                        onClick={() => alert((project as any).githubAlert)}
                        className="flex items-center gap-2 px-4 py-2 border border-cyber-cyan text-cyber-cyan rounded-lg font-semibold text-sm hover:bg-cyber-cyan hover:text-cyber-bg transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        Code
                      </motion.button>
                    ) : (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-cyber-cyan text-cyber-cyan rounded-lg font-semibold text-sm hover:bg-cyber-cyan hover:text-cyber-bg transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More CTA */}
          <motion.div
            variants={cardVariants}
            className="text-center"
          >
            <motion.a
              href="https://github.com/kishore2818"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-cyber-violet text-cyber-violet rounded-lg font-cyber font-semibold hover:bg-cyber-violet hover:text-cyber-bg transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              View More on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;