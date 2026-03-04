import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Rocket, Heart } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'] },
    { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain', 'Computer Vision'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Maven', 'Figma', 'Supabase'] },
  ];

  const passions = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Full-Stack Development',
      description: 'Designing and implementing end-to-end web solutions with the MERN stack.',
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI & Computer Vision',
      description: 'Building intelligent systems using YOLO and deep learning for real-world problem solving.',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Collaboration',
      description: 'Thriving in team environments and hackathons, turning ideas into working prototypes.',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Continuous Growth',
      description: 'Exploring new technologies and sharpening skills through projects and internships.',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
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
              About Me
            </h2>
            <div className="w-20 h-1 bg-cyber-cyan mx-auto glow-cyan" />
          </motion.div>

          {/* Bio Section */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-cyber font-semibold text-cyber-cyan">
                Building the Future, One Line at a Time
              </h3>
              <div className="space-y-4 text-lg text-cyber-text-muted leading-relaxed">
                <p>
                 I am a MERN Stack Developer skilled in building end-to-end web applications using modern technologies. My focus lies in creating scalable, intuitive, and high-performance solutions.
                </p>
                <p>
                  With hands-on experience in Java, Python, and full-stack development, I excel at transforming complex requirements into clean and efficient code. I enjoy solving problems that balance both business goals and user needs.
                </p>
                <p>
                 Beyond technical expertise, I bring strong organizational and teamwork skills. I am passionate about innovation, continuous learning, and delivering impactful digital solutions.
                </p>
              </div>
            </div>

            {/* Passions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {passions.map((passion, index) => (
                <motion.div
                  key={passion.title}
                  variants={itemVariants}
                  className="card-cyber p-6 rounded-lg group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-cyber-cyan mb-3 group-hover:text-cyber-violet transition-colors">
                    {passion.icon}
                  </div>
                  <h4 className="font-cyber font-semibold text-cyber-text mb-2">
                    {passion.title}
                  </h4>
                  <p className="text-sm text-cyber-text-muted">
                    {passion.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-cyber font-semibold text-center text-cyber-violet">
              Technical Arsenal
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, groupIndex) => (
                <motion.div
                  key={skillGroup.category}
                  variants={itemVariants}
                  className="space-y-4"
                >
                  <h4 className="font-cyber font-semibold text-cyber-cyan text-lg border-b border-cyber-cyan/30 pb-2">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          delay: (groupIndex * 0.1) + (skillIndex * 0.05),
                          duration: 0.4 
                        }}
                        className="flex items-center space-x-3 text-cyber-text-muted hover:text-cyber-text transition-colors cursor-default"
                      >
                        <div className="w-2 h-2 bg-cyber-violet rounded-full glow-violet" />
                        <span>{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;