import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { FolderKanban, Layers, Building2, Brain } from 'lucide-react';

const stats = [
  { value: 10, suffix: '+', label: 'Projects Built', icon: FolderKanban },
  { value: 15, suffix: '+', label: 'Technologies', icon: Layers },
  { value: 1, suffix: '', label: 'Internship', icon: Building2 },
  { value: 3, suffix: '', label: 'AI Projects', icon: Brain },
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

const cardVariants = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function Highlight({ children }) {
  return <span className="text-accent font-semibold">{children}</span>;
}

function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [target]);

  useEffect(() => {
    if (inView) {
      animate();
    }
  }, [inView, animate]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function StatCard({ stat, index, inView }) {
  const Icon = stat.icon;

  return (
    <motion.div
      variants={cardVariants}
      className="bg-surface rounded-2xl p-6 border border-border hover:shadow-md transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight">
          <AnimatedCounter
            target={stat.value}
            suffix={stat.suffix}
            inView={inView}
          />
        </span>
        <div className="p-2 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <p className="text-sm font-medium text-text-secondary">{stat.label}</p>
    </motion.div>
  );
}

export default function About() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <section id="about" className="relative bg-background-alt py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="w-10 h-1 rounded-full bg-accent mb-4" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight">
            About Me
          </h2>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Bio */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5"
          >
            <motion.p
              variants={item}
              className="text-text-secondary text-base md:text-lg leading-relaxed"
            >
              I&apos;m a pre-final year Information Science and Engineering
              student with a deep passion for building production-ready web
              applications and AI-integrated systems. My journey in software
              development spans across the MERN stack, where I&apos;ve developed
              scalable applications that solve real-world problems.
            </motion.p>

            <motion.p
              variants={item}
              className="text-text-secondary text-base md:text-lg leading-relaxed"
            >
              Through my internship at IIT Ropar via NPTEL, I gained hands-on
              experience developing production-grade modules with{' '}
              <Highlight>React.js</Highlight>,{' '}
              <Highlight>Node.js</Highlight>, and{' '}
              <Highlight>MongoDB</Highlight>. I focus on writing clean,
              maintainable code and building systems that are both performant and
              user-centric.
            </motion.p>

            <motion.p
              variants={item}
              className="text-text-secondary text-base md:text-lg leading-relaxed"
            >
              Beyond web development, I&apos;m deeply interested in AI
              integration — building intelligent applications that leverage
              machine learning models, natural language processing, and modern AI
              APIs to create smarter user experiences. I also work with{' '}
              <Highlight>FastAPI</Highlight> and{' '}
              <Highlight>Java</Highlight> for backend services and system-level
              projects.
            </motion.p>
          </motion.div>

          {/* Right — Stats Grid */}
          <motion.div
            ref={statsRef}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                stat={stat}
                index={index}
                inView={statsInView}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
