import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, MessageSquare } from 'lucide-react';

const roles = ['Full Stack Developer', 'MERN Engineer', 'AI Integration Enthusiast'];

const floatingShapes = [
  { size: 80, top: '10%', left: '5%', delay: 0, shape: 'circle', color: 'bg-accent/10' },
  { size: 50, top: '60%', left: '12%', delay: 1.5, shape: 'square', color: 'bg-accent/8' },
  { size: 60, top: '75%', right: '8%', delay: 0.8, shape: 'circle', color: 'bg-accent/6' },
  { size: 40, top: '15%', right: '15%', delay: 2, shape: 'square', color: 'bg-accent/10' },
  { size: 70, top: '45%', left: '3%', delay: 1.2, shape: 'circle', color: 'bg-accent/5' },
];

const techBadges = [
  { label: 'React', top: '5%', left: '-8%', delay: 0.2 },
  { label: 'Node.js', top: '20%', right: '-12%', delay: 0.5 },
  { label: 'AI / ML', bottom: '20%', right: '-8%', delay: 0.8 },
  { label: 'MongoDB', bottom: '5%', left: '-5%', delay: 1.1 },
];

const socialLinks = [
  { icon: Github, href: 'hhttps://github.com/Furqantech1', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/furqan-naikwadi-7860f', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:furqannaikwadi61@gmail.com', label: 'Email' },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatAnimation = (delay = 0) => ({
  y: [0, -18, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    repeatType: 'loop',
    ease: 'easeInOut',
    delay,
  },
});

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Dot Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, var(--border-color) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.5,
        }}
      />

      {/* Floating Geometric Shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.color} ${
            shape.shape === 'circle' ? 'rounded-full' : 'rounded-xl'
          } pointer-events-none`}
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
          }}
          animate={floatAnimation(shape.delay)}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Side — Text Content (60%) */}
          <motion.div
            className="lg:col-span-3"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Availability Badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-border text-sm font-medium text-text-secondary mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                Available for Opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={item}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary mt-4"
            >
              Hi, I&apos;m Furqan
              <br />
              <span className="text-accent">Naikwadi</span>
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.div variants={item} className="h-10 mt-5 mb-2">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="text-xl md:text-2xl font-semibold text-accent font-mono"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Intro Paragraph */}
            <motion.p
              variants={item}
              className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mt-4"
            >
              Pre-final year Information Science and Engineering student building
              scalable web applications, AI-powered systems, and modern user
              experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-3 mt-8"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold text-sm shadow-sm hover:shadow-md hover:bg-accent-hover hover:scale-[1.03] transition-all duration-300"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-accent text-accent font-semibold text-sm hover:bg-accent hover:text-white hover:scale-[1.03] transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4" />
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-alt text-text-primary font-semibold text-sm hover:shadow-md hover:scale-[1.03] transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={item} className="flex items-center gap-3 mt-8">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-11 h-11 rounded-full border border-border text-text-secondary hover:bg-surface-alt hover:text-accent hover:border-accent/30 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side — Profile Image (40%) */}
          <motion.div
            className="lg:col-span-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 60, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <div className="relative">
              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px] rounded-2xl overflow-hidden border-2 border-border shadow-lg">
                <img
                  src="/images/profile.jpeg"
                  alt="Furqan Naikwadi"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Tech Badges */}
              {techBadges.map((badge, i) => (
                <motion.span
                  key={badge.label}
                  className="absolute backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 border border-white/20 dark:border-white/10 text-text-primary text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap"
                  style={{
                    top: badge.top,
                    left: badge.left,
                    right: badge.right,
                    bottom: badge.bottom,
                  }}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    ...floatAnimation(badge.delay),
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.6 + i * 0.15 },
                    scale: { duration: 0.5, delay: 0.6 + i * 0.15 },
                  }}
                >
                  {badge.label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
