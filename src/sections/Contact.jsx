import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  Copy,
  Check,
  ExternalLink,
  Loader2,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'furqannaikwadi61@gmail.com',
    href: 'mailto:furqannaikwadi61@gmail.com',
    copyable: true,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-9886601627',
    href: 'tel:+919886601627',
    copyable: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Furqan LinkedIN',
    href: 'https://www.linkedin.com/in/furqan-naikwadi-7860f',
    external: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Furqan GitHub',
    href: 'https://github.com/Furqantech1',
    external: true,
  },
];

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/Furqantech1',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/furqan-naikwadi-7860f',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:furqannaikwadi61@gmail.com',
    label: 'Email',
  },
];

const cardContainerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const formVariants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function ContactCard({ item }) {
  const [copied, setCopied] = useState(false);
  const Icon = item.icon;

  const handleCopy = async () => {
    if (!item.copyable) return;
    try {
      await navigator.clipboard.writeText(item.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback silently
    }
  };

  const CardContent = () => (
    <div className="flex items-center gap-4 w-full">
      <div className="flex-shrink-0 bg-accent/10 rounded-lg p-3">
        <Icon size={20} className="text-accent" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-0.5">
          {item.label}
        </p>
        <p className="text-text-primary text-sm md:text-base truncate group-hover:text-accent transition-colors duration-300">
          {item.value}
        </p>
      </div>
      {item.copyable && (
        <div className="relative flex-shrink-0">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleCopy();
            }}
            className="p-2 rounded-lg hover:bg-surface-alt transition-colors duration-200"
            aria-label={`Copy ${item.label}`}
          >
            {copied ? (
              <Check size={16} className="text-green-500" />
            ) : (
              <Copy size={16} className="text-text-muted" />
            )}
          </button>
          {copied && (
            <motion.span
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-accent text-white text-xs rounded-md whitespace-nowrap font-medium"
            >
              Copied!
            </motion.span>
          )}
        </div>
      )}
      {item.external && (
        <ExternalLink
          size={16}
          className="flex-shrink-0 text-text-muted group-hover:text-accent transition-colors duration-300"
        />
      )}
    </div>
  );

  return (
    <motion.div variants={cardItemVariants}>
      <a
        href={item.href}
        target={item.external ? '_blank' : undefined}
        rel={item.external ? 'noopener noreferrer' : undefined}
        className="group flex items-center bg-surface rounded-xl border border-border p-4 hover:border-accent/30 hover:shadow-md transition-all duration-300"
      >
        <CardContent />
      </a>
    </motion.div>
  );
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID || 'YOUR_FORM_ID';

    try {
      await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      setSubmitted(true);
      e.target.reset();
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      // Handle error silently
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles =
    'w-full bg-surface-alt border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all font-sans';

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={formVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-5"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your Name"
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="your@email.com"
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Your message..."
          className={`${inputStyles} resize-none`}
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-accent text-white rounded-xl px-6 py-3 font-semibold hover:bg-accent-hover transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : submitted ? (
          <>
            <Check size={18} />
            Message Sent!
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </motion.button>
    </motion.form>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background-alt">
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
            Get In Touch
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
            Let&apos;s build something amazing together
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column — Contact Info */}
          <div>
            {/* Open to Opportunities Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2.5 bg-green-500/10 dark:bg-green-500/5 border border-green-500/20 rounded-full px-4 py-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-sm font-medium text-green-700 dark:text-green-400">
                  Open to Opportunities
                </span>
              </div>
            </motion.div>

            {/* Contact Cards */}
            <motion.div
              className="space-y-4"
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {contactInfo.map((item) => (
                <ContactCard key={item.label} item={item} />
              ))}
            </motion.div>
          </div>

          {/* Right Column — Contact Form */}
          <div className="bg-surface rounded-2xl border border-border p-6 md:p-8">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-text-primary mb-6 font-sans"
            >
              Send a Message
            </motion.h3>
            <ContactForm />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border mt-20 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            {/* Social Icons */}
            <div className="flex items-center justify-center gap-4 mb-6">
              {socialLinks.map((social) => {
                const SocialIcon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 rounded-xl bg-surface border border-border hover:border-accent/30 hover:bg-accent/10 hover:text-accent text-text-secondary transition-all duration-300"
                  >
                    <SocialIcon size={20} />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <p className="text-text-primary font-medium mb-1.5">
              &copy; 2026 Furqan Naikwadi. Crafted with passion and precision.
            </p>
            <p className="text-text-muted text-sm">
              Built with React, Tailwind CSS &amp; Framer Motion
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
