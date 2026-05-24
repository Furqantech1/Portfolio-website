import { motion } from 'framer-motion';
import { Code2, Monitor, Server, Database, BookOpen, Wrench } from 'lucide-react';

const skillCategories = [
  {
    name: 'Languages',
    icon: Code2,
    skills: ['Java', 'JavaScript', 'C', 'C++', 'Python', 'SQL'],
  },
  {
    name: 'Frontend',
    icon: Monitor,
    skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'FastAPI'],
  },
  {
    name: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'MySQL', 'Oracle SQL', 'Firebase'],
  },
  {
    name: 'Core Concepts',
    icon: BookOpen,
    skills: ['OOP', 'DSA', 'DBMS', 'OS', 'Computer Networks'],
  },
  {
    name: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel'],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const pillContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.15,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function SkillCard({ category }) {
  const Icon = category.icon;

  return (
    <motion.div
      variants={cardVariants}
      className="bg-surface rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300 group"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon size={22} className="text-accent flex-shrink-0" />
        <h3 className="font-semibold text-lg text-text-primary">{category.name}</h3>
      </div>

      <motion.div
        variants={pillContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap gap-2"
      >
        {category.skills.map((skill) => (
          <motion.span
            key={skill}
            variants={pillVariants}
            className="bg-surface-alt text-text-secondary rounded-lg px-3 py-1.5 text-sm font-medium border border-transparent hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="w-12 h-1 bg-accent rounded-full mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary font-sans">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <SkillCard key={category.name} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
