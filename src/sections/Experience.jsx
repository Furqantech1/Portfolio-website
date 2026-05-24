import { motion } from 'framer-motion';
import { CheckCircle2, Briefcase } from 'lucide-react';

const experience = {
  role: 'Winter Intern — MERN Stack Developer',
  company: 'NPTEL, IIT Ropar (Virtual)',
  duration: 'Jan 2025 – Apr 2025',
  type: 'Internship',
  initials: 'IIT',
  bullets: [
    'Developed 4 production-ready full stack modules using React.js, Node.js, and MongoDB',
    'Improved application performance by 35% through code optimization and efficient database queries',
    'Built RESTful APIs following industry best practices for scalable backend architecture',
    'Collaborated with team using Git workflows, code reviews, and agile development methodology',
    'Received academic mentorship on real-world engineering implementation patterns',
  ],
  techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git'],
};

const bulletContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const bulletItem = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const techContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.8 } },
};

const techItem = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-background-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex justify-center mb-4">
            <span className="block w-10 h-1 rounded-full bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary font-sans">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/60 to-transparent origin-top"
          />

          {/* Timeline dot */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 md:left-8 -translate-x-1/2 md:-translate-x-1/2 top-8 z-10"
          >
            <span className="relative block w-3 h-3 rounded-full bg-accent ring-[3px] ring-accent/20">
              <span className="block w-1.5 h-1.5 rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </span>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="pl-8 md:pl-20"
          >
            <div className="bg-surface rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              {/* Card Header */}
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Logo placeholder */}
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm tracking-wide">
                    {experience.initials}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-xl text-text-primary leading-snug">
                      {experience.role}
                    </h3>
                  </div>
                  <p className="text-text-secondary">{experience.company}</p>

                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-surface-alt text-text-secondary">
                      <Briefcase className="w-3.5 h-3.5" />
                      {experience.duration}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent">
                      {experience.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="my-5 border-t border-border" />

              {/* Bullet Points */}
              <motion.ul
                variants={bulletContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-3"
              >
                {experience.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    variants={bulletItem}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary text-[15px] leading-relaxed">
                      {bullet}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Divider */}
              <div className="my-5 border-t border-border" />

              {/* Tech Stack */}
              <div>
                <p className="text-sm font-medium text-text-muted mb-3">Tech Stack</p>
                <motion.div
                  variants={techContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex flex-wrap gap-2"
                >
                  {experience.techStack.map((tech) => (
                    <motion.span
                      key={tech}
                      variants={techItem}
                      className="bg-surface-alt text-text-secondary rounded-full px-3 py-1 text-sm font-medium hover:bg-accent/10 hover:text-accent transition-colors duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Summary Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-text-secondary mt-14 md:mt-16 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Actively developing and deploying scalable web applications and AI-integrated
          platforms.
        </motion.p>
      </div>
    </section>
  );
}
