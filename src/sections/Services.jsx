import { motion } from 'framer-motion';
import { Globe, Sparkles, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Full Stack Web Development',
    description:
      'Building end-to-end web applications with modern technologies, from responsive frontends to scalable backend architectures.',
    features: [
      'Scalable MERN stack applications',
      'RESTful API design & development',
      'Database architecture & optimization',
      'Cloud-ready deployment pipelines',
      'Performance optimization & monitoring',
    ],
  },
  {
    icon: Sparkles,
    title: 'AI-Integrated Applications',
    description:
      'Developing intelligent applications that leverage machine learning, NLP, and modern AI APIs to create smarter solutions.',
    features: [
      'Machine learning model integration',
      'AI-powered analytics dashboards',
      'Natural language processing systems',
      'Intelligent document processing',
      'Health & risk prediction platforms',
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const featureContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const featureVariants = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <motion.div
      variants={cardVariants}
      className="bg-surface rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
    >
      {/* Icon Container */}
      <div className="inline-flex items-center justify-center rounded-xl bg-accent/10 p-3 mb-6">
        <Icon size={32} className="text-accent" />
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-text-primary font-sans mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-text-secondary leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Feature Bullets */}
      <motion.ul
        variants={featureContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-3"
      >
        {service.features.map((feature) => (
          <motion.li
            key={feature}
            variants={featureVariants}
            className="flex items-start gap-3 text-text-secondary text-sm"
          >
            <ArrowRight
              size={16}
              className="text-accent flex-shrink-0 mt-0.5"
            />
            <span>{feature}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background-alt">
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
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-2">
            Services I Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary font-sans">
            What I Do
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
