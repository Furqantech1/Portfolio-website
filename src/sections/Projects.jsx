import { motion } from 'framer-motion';
import {
  FileCode,
  Leaf,
  HeartPulse,
  TrendingUp,
  Github,
  ExternalLink,
} from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Code Auditor & Documentation Suite',
    description:
      'An intelligent platform that automates code review, generates comprehensive documentation, and provides actionable audit reports using AI.',
    achievements: [
      'Reduced manual code review cycles by 40%',
      'Multi-language support with Monaco Editor integration',
      'Automated PDF audit report generation',
      'FastAPI + React architecture with real-time analysis',
    ],
    tech: ['React.js', 'FastAPI', 'Python', 'Monaco Editor', 'AI/ML', 'PDF Generation'],
    icon: FileCode,
    image: '/images/ai_code_review.png',
    gradientLight: 'from-indigo-500/20 to-purple-500/20',
    gradientDark: 'dark:from-indigo-500/10 dark:to-purple-500/10',
    github: '#',
    demo: '#',
  },
  {
    title: 'EcoTrade: B2B Carbon Credit Marketplace',
    description:
      'A secure enterprise platform for trading carbon credits with SHA-256 verification, real-time analytics, and automated compliance certification.',
    achievements: [
      'SHA-256 hash verification for transaction integrity',
      'Real-time analytics dashboard with interactive charts',
      'Automated PDF compliance certification system',
      'Clerk authentication with role-based access control',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Clerk Auth', 'SHA-256', 'Chart.js'],
    icon: Leaf,
    image: '/images/ecotrade.png',
    gradientLight: 'from-emerald-500/20 to-teal-500/20',
    gradientDark: 'dark:from-emerald-500/10 dark:to-teal-500/10',
    github: '#',
    demo: '#',
  },
  {
    title: 'HealthTwin: AI-Based Diabetes Risk Prediction',
    description:
      'An AI-powered health analytics platform using XGBoost for diabetes risk prediction with SHAP explainability and Gemini AI health advisor integration.',
    achievements: [
      'XGBoost ML model with 92% prediction accuracy',
      'SHAP-based explainability for transparent AI decisions',
      'Lifestyle simulation for personalized health recommendations',
      'Gemini AI integration for conversational health advising',
    ],
    tech: ['React.js', 'FastAPI', 'XGBoost', 'SHAP', 'Gemini AI', 'Python'],
    icon: HeartPulse,
    image: '/images/health_twin.png',
    gradientLight: 'from-rose-500/20 to-orange-500/20',
    gradientDark: 'dark:from-rose-500/10 dark:to-orange-500/10',
    github: '#',
    demo: '#',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const badgeContainerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.3 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

function ProjectCard({ project, index }) {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="group bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        {/* Card Image/Header Area */}
        <div className="relative h-64 overflow-hidden bg-surface-alt border-b border-border flex items-center justify-center">
          {project.image ? (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
            </>
          ) : (
            <div className={`relative w-full h-full bg-gradient-to-br ${project.gradientLight} ${project.gradientDark} flex items-center justify-center overflow-hidden`}>
              {/* Background pattern dots */}
              <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, currentColor 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
              </div>

              {/* Large background icon */}
              <Icon
                size={120}
                className="absolute text-text-primary opacity-[0.06] dark:opacity-[0.08]"
                strokeWidth={1}
              />

              {/* Centered icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Icon
                  size={64}
                  className="text-text-primary opacity-30"
                  strokeWidth={1.5}
                />
              </motion.div>
            </div>
          )}

          {/* Decorative corner accent */}
          <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent/40" />
          <div className="absolute top-4 right-9 w-1.5 h-1.5 rounded-full bg-accent/20" />
        </div>

        {/* Content Area */}
        <motion.div
          className="p-6 md:p-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Title */}
          <motion.h3
            variants={itemVariants}
            className="text-xl md:text-2xl font-bold text-text-primary mb-3 font-sans"
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-text-secondary leading-relaxed mb-6"
          >
            {project.description}
          </motion.p>

          {/* Key Achievements */}
          <motion.div variants={itemVariants} className="mb-6">
            <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {project.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 text-text-secondary text-sm"
                >
                  <TrendingUp
                    size={16}
                    className="text-accent mt-0.5 flex-shrink-0"
                  />
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            variants={badgeContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {project.tech.map((t, i) => (
              <motion.span
                key={i}
                variants={badgeVariants}
                className="px-3 py-1 text-xs font-medium font-mono bg-surface-alt text-text-secondary rounded-full border border-border hover:border-accent/30 hover:text-accent transition-all duration-300"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface-alt hover:bg-accent hover:text-white rounded-lg px-4 py-2 text-sm font-medium text-text-primary border border-border hover:border-accent transition-all duration-300"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white hover:bg-accent-hover rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 font-sans">
            Featured Projects
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
            Recent work I&apos;m proud of
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
