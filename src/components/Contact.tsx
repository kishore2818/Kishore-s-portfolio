import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, ExternalLink, Send, CheckCircle, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ─── EmailJS credentials ───────────────────────────────────────────────────
// Sign up free at https://www.emailjs.com and replace these three values:
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';   // e.g. 'aBcDeFgHiJkLmNoP'
// ──────────────────────────────────────────────────────────────────────────

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');


  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      href: 'kishoreabinash2005@gmail.com',
      label: 'kishoreabinash2005@gmail.com',
      color: 'cyber-cyan',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/kishore-abinash-a-962516274/',
      label: '/in/kishore-abinash-a',
      color: 'cyber-violet',
    },
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/kishore2818',
      label: '@kishore2818',
      color: 'cyber-green',
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'kishoreabinash2005@gmail.com',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 9597277150',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: '20/112,Market Street, Srivaikuntam,Tuticorin 628-601.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'kishoreabinash2005@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setErrorMsg('❌ Failed to send message. Please try again or email me directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-cyber-text-muted max-w-3xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to collaborate
              on innovative projects and discuss new opportunities.
            </p>
            <div className="w-20 h-1 bg-cyber-violet mx-auto mt-6 glow-violet" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-cyber font-bold text-cyber-cyan mb-6">
                  Get In Touch
                </h3>
                <p className="text-cyber-text-muted leading-relaxed mb-8">
                  Whether you have a project in mind, want to discuss opportunities,
                  or just want to say hello, I'd love to hear from you. Let's create
                  something extraordinary together.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    variants={itemVariants}
                    className="flex items-center gap-4 p-4 card-cyber rounded-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-cyber-cyan">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-cyber-text-muted font-medium">
                        {info.label}
                      </p>
                      <p className="text-cyber-text">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-cyber font-semibold text-cyber-violet">
                  Connect With Me
                </h4>
                <div className="grid gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target={social.name !== 'Email' ? '_blank' : undefined}
                      rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 card-cyber rounded-lg group"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, x: 10 }}
                    >
                      <div className="text-current transition-colors group-hover:text-cyber-cyan">
                        {social.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-cyber-text group-hover:text-cyber-cyan transition-colors">
                          {social.name}
                        </p>
                        <p className="text-sm text-cyber-text-muted">
                          {social.label}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-cyber-text-muted group-hover:text-cyber-cyan transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-cyber font-bold text-cyber-violet">
                Send a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-8 card-cyber rounded-lg"
                >
                  <CheckCircle className="w-16 h-16 text-cyber-green mx-auto mb-4" />
                  <h4 className="text-xl font-cyber font-bold text-cyber-green mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-cyber-text-muted">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-cyber-cyan hover:text-cyber-violet transition-colors font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-cyber-text mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-cyber-surface border border-cyber-cyan/30 rounded-lg text-cyber-text placeholder-cyber-text-muted focus:border-cyber-cyan focus:outline-none focus:glow-cyan transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-cyber-text mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-cyber-surface border border-cyber-cyan/30 rounded-lg text-cyber-text placeholder-cyber-text-muted focus:border-cyber-cyan focus:outline-none focus:glow-cyan transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-cyber-text mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-surface border border-cyber-cyan/30 rounded-lg text-cyber-text placeholder-cyber-text-muted focus:border-cyber-cyan focus:outline-none focus:glow-cyan transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-cyber-text mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-cyber-surface border border-cyber-cyan/30 rounded-lg text-cyber-text placeholder-cyber-text-muted focus:border-cyber-cyan focus:outline-none focus:glow-cyan transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 button-cyber rounded-lg font-cyber font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-cyber-bg border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send size={20} />
                    )}
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </motion.button>

                  {/* Error message */}
                  {errorMsg && (
                    <motion.p
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm text-center mt-2"
                    >
                      {errorMsg}
                    </motion.p>
                  )}
                </form>
              )}
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-16 border-t border-cyber-surface"
          >
            <p className="text-cyber-text-muted">
              © 2025 Kishore Abinash. All Rights Reserved.
            </p>
            <p className="text-sm text-cyber-text-muted/60 mt-2">
              "Let’s connect & create something amazing."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;