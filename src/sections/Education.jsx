import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react';
import { useRef } from 'react';

const educationData = [
  {
    id: 1,
    icon: GraduationCap,
    degree: 'Bachelor of Engineering — Information Science and Engineering',
    institution: 'Gogte Institute Of Technology, Belgaum',
    duration: '2023 – 2027',
    grade: 'CGPA: 8.68/10',
    coursework: [
      'DBMS',
      'Operating Systems',
      'Data Structures & Algorithms',
      'Computer Networks',
      'Object-Oriented Programming',
      'Software Engineering',
    ],
  },
  {
    id: 2,
    icon: School,
    degree: 'Higher Secondary (XII) — PCMB',
    institution: 'SSR PU College, Mudalgi',
    duration: '2022 – 2023',
    grade: 'Percentage: 89.17% (535/600)',
    coursework: [],
  },
  {
    id: 3,
    icon: BookOpen,
    degree: 'Secondary School (X)',
    institution: 'Love Dale International School',
    duration: '2020 – 2021',
    grade: 'Percentage: 94.4% (590/625)',
    coursework: [],
  },
];

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -60 },
  hiddenRight: { opacity: 0, x: 60 },
  hiddenUp: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const tagContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};

const tagItem = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

function TimelineDot({ index }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-0 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 z-10 flex items-center justify-center"
    >
      <span className="block w-3 h-3 rounded-full bg-accent ring-[3px] ring-accent/20">
        <span className="block w-1.5 h-1.5 rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </span>
    </motion.div>
  );
}

function EducationCard({ entry, index }) {
  const isEven = index % 2 === 0;
  const Icon = entry.icon;

  return (
    <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-16 last:mb-0">
      {/* Dot */}
      <TimelineDot index={index} />

      {/* Spacer for alternating layout */}
      {!isEven && <div className="hidden md:block" />}

      {/* Card */}
      <motion.div
        initial={
          typeof window !== 'undefined' && window.innerWidth >= 768
            ? isEven
              ? 'hiddenLeft'
              : 'hiddenRight'
            : 'hiddenUp'
        }
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
        className={`bg-surface rounded-2xl ${entry.coursework.length > 0 ? 'p-6 md:p-8' : 'p-5 md:p-6'} border border-border shadow-sm hover:shadow-md transition-all duration-300 ${
          isEven ? 'md:text-right' : ''
        }`}
      >
        {/* Header */}
        <div className={`flex items-start gap-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
          <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-xl text-text-primary leading-snug">
              {entry.degree}
            </h3>
            <p className="text-text-secondary mt-1">{entry.institution}</p>
          </div>
        </div>

        {/* Badges */}
        <div className={`flex flex-wrap gap-2 mt-4 ${isEven ? 'md:justify-end' : ''}`}>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-surface-alt text-text-secondary">
            {entry.duration}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent">
            {entry.grade}
          </span>
        </div>

        {/* Coursework */}
        {entry.coursework.length > 0 && (
          <div className="mt-5">
            <p className={`text-sm font-medium text-text-secondary mb-3 ${isEven ? 'md:text-right' : ''}`}>
              Relevant Coursework
            </p>
            <motion.div
              variants={tagContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}
            >
              {entry.coursework.map((course) => (
                <motion.span
                  key={course}
                  variants={tagItem}
                  className="bg-surface-alt text-text-secondary rounded-full px-3 py-1 text-sm"
                >
                  {course}
                </motion.span>
              ))}
            </motion.div>
          </div>
        )}
      </motion.div>

      {/* Spacer for alternating layout */}
      {isEven && <div className="hidden md:block" />}
    </div>
  );
}

export default function Education() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.8', 'end 0.6'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="education" className="py-24 md:py-32 bg-background">
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
            Education
          </h2>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-accent via-accent/80 to-accent/40 rounded-full origin-top"
            />
          </div>

          {/* Education entries */}
          {educationData.map((entry, index) => (
            <EducationCard key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
