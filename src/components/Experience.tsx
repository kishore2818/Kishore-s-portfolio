import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Calendar, MapPin, Award, GraduationCap, Briefcase, GraduationCapIcon } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    
    {
      type: 'work',
      title: 'MERN-Stack Developer',
      company: 'Mobile Application Hub',
      location: 'NEC',
      period: '2024 -2027',
      description: 'Developed and maintained multiple client projects using React, Node.js, and various cloud services. Collaborated with designers and product managers in an agile environment.',
      achievements: [
        'Built 15+ production applications from scratch',
        'Integrated third-party APIs and payment systems',
        'Contributed to open-source projects with 1K+ stars'
      ],
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Science Engineering',
      company: 'Nandha Engineering College',
      location: 'Erode',
      period: '2023 - 2027',
      description: 'Pursuing my Bachelor of Engineering in Computer Science at Nandha Engineering College, with a strong foundation in software development, web technologies, and innovative problem-solving.',
      achievements: [
        'CGPA: 8.04/10.0 in B.E. Computer Science, Nandha Engineering College',
        'Active in hackathons and full-stack internships',
        'Built and deployed MERN & AI-driven projects'
      ],
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      type: 'schooling',
      title: 'Higher Scondary Education',
      company: 'M.M Matriculation Higher Secondary School',
      location: 'Patemanagaram',
      period: '2023',
      description: 'Completed my schooling at M.M with an aggregate of 81%, laying a strong foundation for my academic and technical journey.',
      achievements: [
        'Strong academic performance with 81% aggregate',
        'Built a solid foundation in mathematics, science',
        'Developed discipline, adaptability, and teamwork skills'
      ],
      icon: <GraduationCapIcon className="w-5 h-5" />,
    },
    {
      type: 'achievement',
      title: 'Achievements & Recognition',
      company: 'Competitions & Publications',
      location: 'National Level',
      period: '2024 – Present',
      description: 'Recognised at national-level competitions and research forums for innovation in AI, surveillance technology, and cultural tech solutions.',
      achievements: [
        '🏆 SIH 2025 Grand Finalist – Smart India Hackathon national-level grand finale participant',
        '📄 IEEE Paper Publisher – Published research on AI-driven surveillance and behavior analysis',
        '📑 Patent Published – "Edge-Based Unified AI Agent for Autonomous Surveillance Behavior Analysis and Risk-Driven Response"',
        '🥇 Kaaval Hackathon Title Winner – First place in the Kaaval national-level hackathon'
      ],
      icon: <Award className="w-5 h-5" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'cyber-cyan';
      case 'education':
        return 'cyber-violet';
      case 'certification':
        return 'cyber-green';
      case 'achievement':
        return 'cyber-pink';
      default:
        return 'cyber-cyan';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'work':
        return 'Experience';
      case 'education':
        return 'Education';
      case 'certification':
        return 'Certification';
      case 'achievement':
        return 'Achievement';
      default:
        return 'Experience';
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cyber font-bold text-gradient-cyber mb-4">
              Experience & Education
            </h2>
            <p className="text-xl text-cyber-text-muted max-w-3xl mx-auto">
              A journey of continuous learning and professional growth in the ever-evolving tech landscape.
            </p>
            <div className="w-20 h-1 bg-cyber-cyan mx-auto mt-6 glow-cyan" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-cyan via-cyber-violet to-cyber-green" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyber-bg border-2 border-current rounded-full z-10"
                    style={{ color: `var(--${getTypeColor(exp.type)})` }}>
                    <div className="absolute inset-1 rounded-full bg-current opacity-60" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}>
                    <motion.div
                      className="card-cyber p-6 rounded-xl space-y-4"
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Type Badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-cyber font-semibold border ${index % 2 === 0 ? 'md:ml-auto' : ''
                        }`}
                        style={{
                          color: `var(--${getTypeColor(exp.type)})`,
                          borderColor: `var(--${getTypeColor(exp.type)})`
                        }}>
                        {exp.icon}
                        {getTypeLabel(exp.type)}
                      </div>

                      {/* Title and Company */}
                      <div>
                        <h3 className="text-xl font-cyber font-bold text-cyber-text mb-1">
                          {exp.title}
                        </h3>
                        <div className="space-y-1">
                          <p className="text-lg font-semibold"
                            style={{ color: `var(--${getTypeColor(exp.type)})` }}>
                            {exp.company}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-2 text-sm text-cyber-text-muted">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-cyber-text-muted leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}
                            className="flex items-start gap-2 text-sm text-cyber-text-muted">
                            <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: `var(--${getTypeColor(exp.type)})` }} />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Resume Download */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-8"
          >
            <motion.a
              href="/projects/KISHORE ABINASH A-RESUME.pdf"
              download="KISHORE ABINASH A-RESUME.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyber-cyan to-cyber-violet text-cyber-bg rounded-lg font-cyber font-bold text-lg shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 40px rgba(0, 255, 255, 0.8)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={24} />
              Download Full Resume
            </motion.a>
            <p className="text-cyber-text-muted mt-3 text-sm">
              Complete work history, projects, and technical skills
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;